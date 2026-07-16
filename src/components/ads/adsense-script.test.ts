import { describe, expect, it } from "vitest";
import { shouldRenderAdsenseScript } from "./adsense-script";

describe("AdsenseScript", () => {
	it("does not render without a valid client id", () => {
		expect(
			shouldRenderAdsenseScript({
				isProduction: true,
				verificationEnabled: true,
				clientId: "",
				hasExistingScript: false,
			}),
		).toBe(false);
	});

	it("does not render duplicate scripts", () => {
		expect(
			shouldRenderAdsenseScript({
				isProduction: true,
				verificationEnabled: true,
				clientId: "ca-pub-1234567890123456",
				hasExistingScript: true,
			}),
		).toBe(false);
	});
});
