const ADSENSE_PUBLISHER_PATTERN = /^pub-\d{10,}$/;
const PLACEHOLDER_PUBLISHER_ID = "pub-0000000000000000";
const PALDEX_SUBDOMAIN_LINE = "subdomain=paldexbr.bardosamigos.com.br";

interface VercelResponse {
	status(code: number): VercelResponse;
	setHeader(name: string, value: string): void;
	send(body: string): void;
}

export function buildAdsTxt(publisherId?: string): {
	status: number;
	body: string;
} {
	const normalizedPublisherId = publisherId?.trim() ?? "";

	if (
		!ADSENSE_PUBLISHER_PATTERN.test(normalizedPublisherId) ||
		normalizedPublisherId === PLACEHOLDER_PUBLISHER_ID
	) {
		return {
			status: 200,
			body: `# ADSENSE_PUBLISHER_ID is not configured.\n${PALDEX_SUBDOMAIN_LINE}\n`,
		};
	}

	return {
		status: 200,
		body: `google.com, ${normalizedPublisherId}, DIRECT, f08c47fec0942fa0\n${PALDEX_SUBDOMAIN_LINE}\n`,
	};
}

export default function handler(_request: unknown, response: VercelResponse) {
	const result = buildAdsTxt(process.env.ADSENSE_PUBLISHER_ID);

	response.status(result.status);
	response.setHeader("Content-Type", "text/plain; charset=utf-8");
	response.send(result.body);
}
