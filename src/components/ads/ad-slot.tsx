import { useEffect, useRef } from "react";
import type React from "react";
import { adsConfig, hasValidClientId } from "@/config/ads-config";
import { cn } from "@/lib/utils";

const APPROVED_POSITIONS = ["after-projects", "before-footer"] as const;

type ApprovedPosition = (typeof APPROVED_POSITIONS)[number];

interface AdSlotProps {
	slot: string;
	eligible?: boolean;
	className?: string;
	position: ApprovedPosition;
	loading?: boolean;
	error?: boolean;
	empty?: boolean;
}

declare global {
	interface Window {
		adsbygoogle?: unknown[];
	}
}

export function canRenderAdSlot({
	config = adsConfig,
	slot,
	eligible,
	position,
	loading,
	error,
	empty,
}: Pick<
	AdSlotProps,
	"slot" | "eligible" | "position" | "loading" | "error" | "empty"
> & {
	config?: Pick<typeof adsConfig, "isProduction" | "adUnitsEnabled" | "clientId">;
}) {
	return (
		config.isProduction &&
		config.adUnitsEnabled &&
		hasValidClientId(config.clientId) &&
		Boolean(slot.trim()) &&
		eligible === true &&
		APPROVED_POSITIONS.includes(position) &&
		!loading &&
		!error &&
		!empty
	);
}

export function AdSlot({
	slot,
	eligible = false,
	className,
	position,
	loading = false,
	error = false,
	empty = false,
}: AdSlotProps): React.JSX.Element | null {
	const initialized = useRef(false);

	useEffect(() => {
		if (
			initialized.current ||
			!canRenderAdSlot({ slot, eligible, position, loading, error, empty })
		) {
			return;
		}

		initialized.current = true;
		try {
			window.adsbygoogle = window.adsbygoogle || [];
			window.adsbygoogle.push({});
		} catch {
			initialized.current = false;
		}
	}, [slot, eligible, position, loading, error, empty]);

	if (!canRenderAdSlot({ slot, eligible, position, loading, error, empty })) {
		return null;
	}

	return (
		<div
			className={cn(
				"mx-auto flex w-full max-w-[728px] flex-col items-center gap-2",
				className,
			)}
			data-ad-position={position}
		>
			<p className="text-xs uppercase tracking-normal text-muted-foreground">
				Publicidade
			</p>
			<ins
				className="adsbygoogle block min-h-[90px] w-full"
				data-ad-client={adsConfig.clientId}
				data-ad-slot={slot}
				data-ad-format="auto"
				data-full-width-responsive="true"
				data-adtest={adsConfig.testMode ? "on" : undefined}
			/>
		</div>
	);
}
