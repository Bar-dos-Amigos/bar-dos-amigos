import { createFileRoute } from "@tanstack/react-router";
import type React from "react";
import { AboutSection } from "@/views/home/about-section";
import { ProjectsSection } from "@/views/home/projects/projects-section";

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
