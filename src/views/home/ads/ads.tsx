import { AnimatedSection } from "@/components/section";

export function Ads(): React.JSX.Element {
	return (
		<AnimatedSection
			itemID="sponsors"
			className="flex flex-col items-center gap-10 max-w-[1280px] mx-auto w-full"
		>
			<a
				className="w-full flex justify-center"
				href="https://www.exitlag.com/refer/10206908"
				target="_blank"
				rel="noreferrer"
				title="Exit Lag"
			>
				<picture>
					<source
						media="(max-width: 640px)"
						srcSet="/assets/ads/exit-lag-mobile.webp"
					/>
					<source
						media="(min-width: 641px)"
						srcSet="/assets/ads/exit-lag.webp"
					/>
					<img
						src="/assets/ads/exit-lag.webp"
						alt="Exit Lag"
						className="w-full h-auto"
					/>
				</picture>
			</a>
		</AnimatedSection>
	);
}
