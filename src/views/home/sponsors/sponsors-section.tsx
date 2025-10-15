import { AnimatedSection } from "@/components/section";
import { SponsorList } from "./sponsors-list";

export function SponsorsSection(): React.JSX.Element {
	return (
		<AnimatedSection
			itemID="sponsors"
			className="flex flex-col items-center gap-10 max-w-[1280px] mx-auto w-full"
		>
			<header className="w-full text-center">
				<h2 className="text-3xl font-bold">Parceiros do Bar</h2>
			</header>
			<SponsorList />
		</AnimatedSection>
	);
}
