import { describe, expect, it } from "vitest";
import { buildAdsTxt } from "./ads.txt";

describe("ads.txt", () => {
	it("contains a valid Google seller line when configured", () => {
		const result = buildAdsTxt("pub-1234567890123456");

		expect(result.status).toBe(200);
		expect(result.body).toContain(
			"google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0",
		);
		expect(result.body.endsWith("\n")).toBe(true);
	});

	it("contains the Paldex subdomain declaration", () => {
		const result = buildAdsTxt("pub-1234567890123456");

		expect(result.body.match(/subdomain=paldexbr\.bardosamigos\.com\.br/g))
			?.toHaveLength(1);
	});

	it("does not expose a placeholder publisher id", () => {
		const result = buildAdsTxt("pub-0000000000000000");

		expect(result.body).not.toContain("google.com, pub-0000000000000000");
		expect(result.body).toContain("ADSENSE_PUBLISHER_ID is not configured");
	});
});
