import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

describe("Header navigation", () => {
	it("keeps existing navigation anchors unchanged", () => {
		const source = readFileSync(resolve("src/components/header.tsx"), "utf8");

		expect(source).toContain("<Link to=\"/\">Inicio</Link>");
		expect(source).toContain("<a href=\"#projects\">Projetos</a>");
		expect(source).toContain("<a href=\"#sponsors\">Parceiros</a>");
	});
});
