const PRODUCTION_DOMAIN = "bardosamigos.com.br";

type AdsEnv = Record<string, string | boolean | undefined>;

export function createAdsConfig(env: AdsEnv, mode = "", host = "") {
	const clientId =
		typeof env.NEXT_PUBLIC_ADSENSE_CLIENT_ID === "string"
			? env.NEXT_PUBLIC_ADSENSE_CLIENT_ID.trim()
			: "";

	return {
		verificationEnabled:
			env.NEXT_PUBLIC_ADSENSE_VERIFICATION_ENABLED === "true",
		adUnitsEnabled: env.NEXT_PUBLIC_ADSENSE_AD_UNITS_ENABLED === "true",
		testMode: env.NEXT_PUBLIC_ADSENSE_TEST_MODE === "true",
		clientId,
		isProduction: mode === "production" && (!host || host === PRODUCTION_DOMAIN),
	};
}

export const adsConfig = createAdsConfig(
	import.meta.env,
	import.meta.env.MODE,
	typeof window === "undefined" ? "" : window.location.hostname,
);

export const hasValidAdsenseClientId = /^ca-pub-\d{10,}$/.test(
	adsConfig.clientId,
);

export function hasValidClientId(clientId: string) {
	return /^ca-pub-\d{10,}$/.test(clientId);
}
