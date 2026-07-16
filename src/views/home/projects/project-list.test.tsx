import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { ProjectItem } from "./project-item";
import { projects } from "./project-list";

describe("projects", () => {
	it("keeps existing project entries unchanged", () => {
		expect(projects.slice(0, 3).map((project) => project.title)).toEqual([
			"Guardian of Bravantus",
			"MythiCards",
			"Festival da Comunidade Bar dos Amigos",
		]);
		expect(projects.slice(0, 3).map((project) => project.image)).toEqual([
			"/assets/projects/guardian-of-bravantus.avif",
			"/assets/projects/mythic-cards.avif",
			"/assets/projects/festival-da-comunidade.avif",
		]);
	});

	it("adds Paldex Brasil with the production URL", () => {
		const paldex = projects.find((project) => project.title === "Paldex Brasil");

		expect(paldex).toMatchObject({
			topic: "Ferramenta Web",
			url: "https://paldexbr.bardosamigos.com.br",
			external: true,
			linkLabel: "Conhecer o Paldex Brasil",
		});
	});

	it("renders the Paldex external link with safe rel attributes", () => {
		const paldex = projects.find((project) => project.title === "Paldex Brasil");
		if (!paldex) {
			throw new Error("Paldex project not found");
		}

		const html = renderToStaticMarkup(<ProjectItem data={paldex} />);

		expect(html).toContain('href="https://paldexbr.bardosamigos.com.br"');
		expect(html).toContain('target="_blank"');
		expect(html).toContain('rel="noopener noreferrer"');
		expect(html).toContain("Conhecer o Paldex Brasil");
	});
});
