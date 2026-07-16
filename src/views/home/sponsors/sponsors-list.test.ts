import { describe, expect, it } from "vitest";
import { sponsors } from "./sponsors-list";

describe("sponsors", () => {
	it("keeps existing partners unchanged", () => {
		expect(sponsors.map((sponsor) => sponsor.title)).toEqual([
			"Wolfoxy",
			"Star Seeds",
		]);
		expect(sponsors.map((sponsor) => sponsor.image)).toEqual([
			"/assets/sponsors/wolfoxy.avif",
			"/assets/sponsors/star-seeds.avif",
		]);
	});
});
