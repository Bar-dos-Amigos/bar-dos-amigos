import { createFileRoute } from "@tanstack/react-router";
import type React from "react";
import { ProjectsSection } from "@/views/home/projects/projects-section";
import { AboutSection } from "@/views/home/section/about-section";

export const Route = createFileRoute("/")({
	component: App,
});

function App(): React.JSX.Element {
	return (
		<>
			<AboutSection />
			<ProjectsSection />
		</>
	);
}
