import { useEffect } from "react";
import { adsConfig, hasValidClientId } from "@/config/ads-config";

const ADSENSE_SCRIPT_ID = "google-adsense";

export function shouldRenderAdsenseScript({
	isProduction,
	verificationEnabled,
	clientId,
	hasExistingScript,
}: {
	isProduction: boolean;
	verificationEnabled: boolean;
	clientId: string;
	hasExistingScript: boolean;
}) {
	return (
		isProduction &&
		verificationEnabled &&
		hasValidClientId(clientId) &&
		!hasExistingScript
	);
}

export function AdsenseScript(): null {
	useEffect(() => {
		if (
			!shouldRenderAdsenseScript({
				isProduction: adsConfig.isProduction,
				verificationEnabled: adsConfig.verificationEnabled,
				clientId: adsConfig.clientId,
				hasExistingScript: Boolean(document.getElementById(ADSENSE_SCRIPT_ID)),
			})
		) {
			return;
		}

		const script = document.createElement("script");
		script.id = ADSENSE_SCRIPT_ID;
		script.async = true;
		script.crossOrigin = "anonymous";
		script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsConfig.clientId}`;
		document.head.appendChild(script);
	}, []);

	return null;
}
