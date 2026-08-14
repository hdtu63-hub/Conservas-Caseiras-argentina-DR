import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renderiza la página de ventas completa en español LATAM", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /Conservas Caseras/);
  assert.match(html, /100\+ recetas rentables/);
  assert.match(html, /Preguntas/);
  assert.match(html, /frecuentes\./);
  assert.doesNotMatch(html, /\bvideos\b|comidas congeladas/i);
  assert.match(html, /\$6\.50/);
  assert.match(html, /\$9\.00/);
  assert.doesNotMatch(html, /R\$|pt-BR/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});
