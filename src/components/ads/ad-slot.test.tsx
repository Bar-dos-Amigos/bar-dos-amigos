import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { AdSlot, canRenderAdSlot } from "./ad-slot";

const enabledConfig = {
	isProduction: true,
	adUnitsEnabled: true,
	clientId: "ca-pub-1234567890123456",
};

describe("AdSlot", () => {
	it("returns nothing when units are disabled", () => {
		expect(
			canRenderAdSlot({
				config: { ...enabledConfig, adUnitsEnabled: false },
				slot: "1234567890",
				eligible: true,
				position: "after-projects",
			}),
		).toBe(false);
	});

	it("returns nothing when eligible is false", () => {
		expect(
			canRenderAdSlot({
				config: enabledConfig,
				slot: "1234567890",
				eligible: false,
				position: "after-projects",
			}),
		).toBe(false);
	});

	it("returns nothing without a slot id", () => {
		expect(
			canRenderAdSlot({
				config: enabledConfig,
				slot: "",
				eligible: true,
				position: "after-projects",
			}),
		).toBe(false);
	});

	it("renders no empty container by default", () => {
		const html = renderToStaticMarkup(
			<AdSlot slot="1234567890" position="after-projects" />,
		);

		expect(html).toBe("");
	});
});
