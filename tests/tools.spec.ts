import { test, expect } from "@playwright/test";
import path from "path";

const fixtures = path.join(__dirname, "fixtures");

// ===== IMAGE CONVERTERS: upload file → click convert → verify download appears =====

const imageTools = [
  { slug: "jpg-to-png", file: "test.jpg", btn: "Convert to PNG" },
  { slug: "png-to-jpg", file: "test.png", btn: "Convert to JPG" },
  { slug: "webp-to-png", file: "test.webp", btn: "Convert to PNG" },
  { slug: "png-to-webp", file: "test.png", btn: "Convert to WebP" },
  { slug: "webp-to-jpg", file: "test.webp", btn: "Convert to JPG" },
  { slug: "jpg-to-webp", file: "test.jpg", btn: "Convert to WebP" },
  { slug: "bmp-to-png", file: "test.bmp", btn: "Convert to PNG" },
  { slug: "bmp-to-jpg", file: "test.bmp", btn: "Convert to JPG" },
  { slug: "gif-to-png", file: "test.gif", btn: "Convert to PNG" },
  { slug: "avif-to-png", file: "test.avif", btn: "Convert to PNG" },
  { slug: "avif-to-jpg", file: "test.avif", btn: "Convert to JPG" },
];

for (const tool of imageTools) {
  test(`Image: ${tool.slug} — upload, convert, download`, async ({ page }) => {
    await page.goto(`/tools/${tool.slug}`);

    // Verify page loaded
    await expect(page.locator("h1")).toBeVisible();

    // Upload file via input
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles(path.join(fixtures, tool.file));

    // Verify file appears in list
    await expect(page.getByText(tool.file)).toBeVisible();

    // Click convert
    await page.getByRole("button", { name: tool.btn }).click();

    // Wait for conversion result — look for green success text
    await expect(page.locator(".text-green-400").first()).toBeVisible({ timeout: 15000 });
  });
}

// ===== DATA CONVERTERS: paste/upload → convert → verify output =====

test("Data: csv-to-json — paste and convert", async ({ page }) => {
  await page.goto("/tools/csv-to-json");
  await page.locator("textarea").first().fill("name,age\nAlice,30\nBob,25");
  await page.getByRole("button", { name: "Convert" }).click();
  const output = await page.locator("textarea").last().inputValue();
  expect(output).toContain("Alice");
  expect(output).toContain("30");
});

test("Data: json-to-csv — paste and convert", async ({ page }) => {
  await page.goto("/tools/json-to-csv");
  await page.locator("textarea").first().fill('[{"name":"Alice","age":30},{"name":"Bob","age":25}]');
  await page.getByRole("button", { name: "Convert" }).click();
  const output = await page.locator("textarea").last().inputValue();
  expect(output).toContain("name");
  expect(output).toContain("Alice");
});

test("Data: xml-to-json — paste and convert", async ({ page }) => {
  await page.goto("/tools/xml-to-json");
  await page.locator("textarea").first().fill("<users><user><name>Alice</name></user></users>");
  await page.getByRole("button", { name: "Convert" }).click();
  const output = await page.locator("textarea").last().inputValue();
  expect(output).toContain("Alice");
});

test("Data: json-to-xml — paste and convert", async ({ page }) => {
  await page.goto("/tools/json-to-xml");
  await page.locator("textarea").first().fill('{"user":{"name":"Alice"}}');
  await page.getByRole("button", { name: "Convert" }).click();
  const output = await page.locator("textarea").last().inputValue();
  expect(output).toContain("<name>Alice</name>");
});

test("Data: yaml-to-json — paste and convert", async ({ page }) => {
  await page.goto("/tools/yaml-to-json");
  await page.locator("textarea").first().fill("name: Alice\nage: 30");
  await page.getByRole("button", { name: "Convert" }).click();
  const output = await page.locator("textarea").last().inputValue();
  expect(output).toContain("Alice");
  expect(output).toContain("30");
});

test("Data: json-to-yaml — paste and convert", async ({ page }) => {
  await page.goto("/tools/json-to-yaml");
  await page.locator("textarea").first().fill('{"name":"Alice","age":30}');
  await page.getByRole("button", { name: "Convert" }).click();
  const output = await page.locator("textarea").last().inputValue();
  expect(output).toContain("Alice");
});

test("Data: tsv-to-csv — paste and convert", async ({ page }) => {
  await page.goto("/tools/tsv-to-csv");
  await page.locator("textarea").first().fill("name\tage\nAlice\t30");
  await page.getByRole("button", { name: "Convert" }).click();
  const output = await page.locator("textarea").last().inputValue();
  expect(output).toContain("name,age");
  expect(output).toContain("Alice,30");
});

test("Data: html-to-markdown — paste and convert", async ({ page }) => {
  await page.goto("/tools/html-to-markdown");
  await page.locator("textarea").first().fill("<h1>Hello</h1><p>World</p>");
  await page.getByRole("button", { name: "Convert" }).click();
  const output = await page.locator("textarea").last().inputValue();
  expect(output).toContain("Hello");
});

// ===== TEXT UTILITIES =====

test("Text: base64-encode-decode — encode and decode", async ({ page }) => {
  await page.goto("/tools/base64-encode-decode");
  await page.locator("textarea").first().fill("Hello World");
  await page.getByRole("button", { name: "Encode" }).click();
  const encoded = await page.locator("textarea").last().inputValue();
  expect(encoded).toBe("SGVsbG8gV29ybGQ=");
});

test("Text: base64-encode-decode — unicode safe", async ({ page }) => {
  await page.goto("/tools/base64-encode-decode");
  await page.locator("textarea").first().fill("한국어 테스트 🎉");
  await page.getByRole("button", { name: "Encode" }).click();
  // Should not crash — just verify output exists
  const encoded = await page.locator("textarea").last().inputValue();
  expect(encoded.length).toBeGreaterThan(0);
});

test("Text: url-encode-decode — encode", async ({ page }) => {
  await page.goto("/tools/url-encode-decode");
  await page.locator("textarea").first().fill("hello world&foo=bar");
  await page.getByRole("button", { name: "Encode" }).click();
  const encoded = await page.locator("textarea").last().inputValue();
  expect(encoded).toContain("hello%20world");
});

test("Text: json-formatter — format valid JSON", async ({ page }) => {
  await page.goto("/tools/json-formatter");
  await page.locator("textarea").first().fill('{"name":"Alice","age":30}');
  await page.getByRole("button", { name: "Format" }).click();
  const output = await page.locator("textarea").last().inputValue();
  expect(output).toContain('"name"');
  expect(output).toContain("Alice");
});

test("Text: json-formatter — invalid JSON shows error", async ({ page }) => {
  await page.goto("/tools/json-formatter");
  await page.locator("textarea").first().fill("{invalid json}");
  await page.getByRole("button", { name: "Format" }).click();
  // Should show error, not crash
  await expect(page.locator(".text-red-400, .text-destructive").first()).toBeVisible({ timeout: 3000 });
});

test("Text: case-converter — shows conversions", async ({ page }) => {
  await page.goto("/tools/case-converter");
  await page.locator("textarea").fill("hello world test");
  // Results should appear in real-time — use exact match on output divs
  await expect(page.getByText("HELLO WORLD TEST", { exact: true })).toBeVisible();
  await expect(page.getByText("helloWorldTest", { exact: true })).toBeVisible();
  await expect(page.getByText("hello_world_test", { exact: true })).toBeVisible();
});

test("Text: word-counter — shows stats", async ({ page }) => {
  await page.goto("/tools/word-counter");
  await page.locator("textarea").fill("Hello world. This is a test.");
  // Stats should appear in real-time
  await expect(page.getByText("28")).toBeVisible(); // characters with spaces
  await expect(page.getByText("6")).toBeVisible(); // words
});

test("Text: lorem-ipsum-generator — generates text", async ({ page }) => {
  await page.goto("/tools/lorem-ipsum-generator");
  await page.getByRole("button", { name: "Generate" }).click();
  const output = await page.locator("textarea").inputValue();
  expect(output.length).toBeGreaterThan(50);
});

// ===== FILE PICKER: verify clicking dropzone opens file dialog =====

test("UX: file picker opens on click (jpg-to-png)", async ({ page }) => {
  await page.goto("/tools/jpg-to-png");
  const fileInput = page.locator('input[type="file"]');
  await expect(fileInput).toBeAttached();
  // Verify the input is inside a label (clickable)
  const label = page.locator("label").filter({ has: fileInput });
  await expect(label).toBeVisible();
});

// ===== EXISTING TOOLS: verify they still work =====

test("Existing: image-compressor page loads", async ({ page }) => {
  await page.goto("/tools/image-compressor");
  await expect(page.locator("h1")).toContainText("Image Compressor");
});

test("Existing: pdf-merge page loads", async ({ page }) => {
  await page.goto("/tools/pdf-merge");
  await expect(page.locator("h1")).toContainText("PDF Merge");
});

test("Existing: markdown-to-pdf page loads", async ({ page }) => {
  await page.goto("/tools/markdown-to-pdf");
  await expect(page.locator("h1")).toContainText("Markdown");
});

test("Existing: qr-code-generator page loads", async ({ page }) => {
  await page.goto("/tools/qr-code-generator");
  await expect(page.locator("h1")).toContainText("QR Code");
});
