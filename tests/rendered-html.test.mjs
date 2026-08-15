import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const html = await readFile(new URL("../.next/server/app/index.html", import.meta.url), "utf8");
  return new Response(html, { status: 200, headers: { "content-type": "text/html; charset=utf-8" } });
}

test("renderiza la página de ventas completa en español LATAM", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /Conservas Caseras/);
  assert.match(html, /100\+ recetas para preparar y vender/);
  assert.match(html, /Preguntas/);
  assert.match(html, /frecuentes\./);
  assert.doesNotMatch(html, /\bvideos\b|comidas congeladas/i);
  assert.match(html, /\$6\.50/);
  assert.match(html, /\$9\.00/);
  assert.doesNotMatch(html, /R\$|pt-BR/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
  assert.match(html, /fbq\('init','1832021307783603'\)/);
  assert.match(html, /cdn\.utmify\.com\.br\/scripts\/utms\/latest\.js/);
  assert.match(html, /data-utmify-prevent-subids/);
});
