import { createFileRoute } from "@tanstack/react-router";
import type React from "react";
import { Ads } from "@/views/home/ads/ads";
import { ProjectsSection } from "@/views/home/projects/projects-section";
import { AboutSection } from "@/views/home/section/about-section";
import { SponsorsSection } from "@/views/home/sponsors/sponsors-section";

export const Route = createFileRoute("/")({
	component: App,
});

function App(): React.JSX.Element {
	return (
		<>
			<AboutSection />
			<div className="flex flex-col gap-16">
				<ProjectsSection />
				<SponsorsSection />
				<Ads />
			</div>
		</>
	);
}
