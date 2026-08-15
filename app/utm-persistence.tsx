"use client";

import { useEffect } from "react";

const STORAGE_KEY = "conservas_utm_params";
const TRACKING_PARAMETERS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "src",
  "sck",
  "fbclid",
  "gclid",
  "ttclid",
];

function readStoredParameters() {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}") as Record<string, string>;
  } catch {
    return {};
  }
}

function collectTrackingParameters() {
  const stored = readStoredParameters();
  const current = new URLSearchParams(window.location.search);

  for (const key of TRACKING_PARAMETERS) {
    const value = current.get(key);
    if (value) stored[key] = value;
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  } catch {
    // The current URL parameters still work when storage is unavailable.
  }

  return stored;
}

function decorateCheckoutLink(anchor: HTMLAnchorElement, parameters: Record<string, string>) {
  const url = new URL(anchor.href, window.location.href);
  if (url.hostname !== "pay.hotmart.com") return;

  for (const [key, value] of Object.entries(parameters)) {
    if (value && !url.searchParams.has(key)) url.searchParams.set(key, value);
  }

  const decoratedUrl = url.toString();
  if (anchor.href !== decoratedUrl) anchor.href = decoratedUrl;
}

export default function UtmPersistence() {
  useEffect(() => {
    const parameters = collectTrackingParameters();
    const decorateAllLinks = () => {
      document.querySelectorAll<HTMLAnchorElement>('a[href*="pay.hotmart.com"]').forEach((anchor) => {
        decorateCheckoutLink(anchor, parameters);
      });
    };

    decorateAllLinks();

    const observer = new MutationObserver(decorateAllLinks);
    observer.observe(document.body, { childList: true, subtree: true });

    const handleCheckoutClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href*="pay.hotmart.com"]');
      if (anchor) decorateCheckoutLink(anchor, collectTrackingParameters());
    };

    document.addEventListener("click", handleCheckoutClick, true);
    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleCheckoutClick, true);
    };
  }, []);

  return null;
}
