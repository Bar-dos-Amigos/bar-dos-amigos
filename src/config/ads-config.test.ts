import { describe, expect, it } from "vitest";
import { createAdsConfig, hasValidClientId } from "./ads-config";

describe("ads config", () => {
	it("disables verification with missing client id", () => {
		const config = createAdsConfig(
			{ NEXT_PUBLIC_ADSENSE_VERIFICATION_ENABLED: "true" },
			"production",
			"bardosamigos.com.br",
		);

		expect(config.verificationEnabled).toBe(true);
		expect(hasValidClientId(config.clientId)).toBe(false);
	});

	it("disables verification with malformed client id", () => {
		const config = createAdsConfig(
			{
				NEXT_PUBLIC_ADSENSE_VERIFICATION_ENABLED: "true",
				NEXT_PUBLIC_ADSENSE_CLIENT_ID: "ca-pub-SEU-ID",
			},
			"production",
			"bardosamigos.com.br",
		);

		expect(hasValidClientId(config.clientId)).toBe(false);
	});

	it("does not run in development", () => {
		const config = createAdsConfig(
			{
				NEXT_PUBLIC_ADSENSE_VERIFICATION_ENABLED: "true",
				NEXT_PUBLIC_ADSENSE_CLIENT_ID: "ca-pub-1234567890123456",
			},
			"development",
			"bardosamigos.com.br",
		);

		expect(config.isProduction).toBe(false);
	});

	it("does not run in preview hosts", () => {
		const config = createAdsConfig(
			{
				NEXT_PUBLIC_ADSENSE_VERIFICATION_ENABLED: "true",
				NEXT_PUBLIC_ADSENSE_CLIENT_ID: "ca-pub-1234567890123456",
			},
			"production",
			"bar-dos-amigos-git-main.vercel.app",
		);

		expect(config.isProduction).toBe(false);
	});

	it("keeps manual ad units disabled by default", () => {
		const config = createAdsConfig({}, "production", "bardosamigos.com.br");

		expect(config.adUnitsEnabled).toBe(false);
	});
});
