import { Separator } from "@radix-ui/react-separator";
import { AnimatedSection } from "@/components/section";
import { ProjectList } from "./project-list";

export function ProjectsSection(): React.JSX.Element {
	return (
		<AnimatedSection
			itemID="projects"
			className="flex flex-col items-center gap-10 max-w-[1280px] mx-auto scroll-mt-22"
		>
			<header className="w-full text-center">
				<h2 className="text-3xl font-bold">Projetos em andamento</h2>
				<Separator orientation="horizontal" className="h-6 w-px" />
				<p>
					Todos os projetos abaixos estão em desenvolvimento e abertos a apoio
					da comunidade para contribuir e de alguma forma dar inicio.
				</p>
			</header>
			<ProjectList />
		</AnimatedSection>
	);
}
