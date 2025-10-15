import { AnimatedDiv } from "@/components/section";
import type { Project } from "./project.type";
import { ProjectItem } from "./project-item";

export function ProjectList(): React.JSX.Element {
	const data: Project[] = [
		{
			id: 1,
			title: "Guardian of Bravantus",
			image: "/assets/projects/guardian-of-bravantus.avif",
			topic: "Unity Enginer",
			description:
				"MMORPG Plataforma, o jogo que vai revolucionar suas experiências de RPG! Estamos 15% avançados, e embora estejamos em pausa, a empolgação só aumenta! Este projeto incrível promete trazer uma imersão multiplayer única, com progressão dinâmica e diversas estratégias você explorar e se divertir. Prepare-se para uma aventura épica!",
		},
		{
			id: 2,
			title: "MythiCards",
			image: "/assets/projects/mythic-cards.avif",
			topic: "Roblox Studios",
			description:
				"Confira este emocionante jogo no Roblox, onde você pode mergulhar em um universo de cartas inspirado nas mitologias do mundo! Estamos a apenas 80% da entrega do nosso MVP, e a fase de desenvolvimento a todo vapor! Junte-se a nós e faça parte dessa aventura incrível como colaborador da comunidade!",
		},
		{
			id: 3,
			title: "Festival da Comunidade Bar dos Amigos",
			image: "/assets/projects/festival-da-comunidade.avif",
			topic: "Evento Comunidade",
			description:
				"Prepare-se para um evento incrível que vai mergulhar você no universo tecnologia, design e games! Vamos explorar uma variedade de conteúdos emocionantes, com torneios eletrizantes e ótimas conversas ao vivo com pessoas vibrantes e cheias de energia! Não perca essa oportunidade única!",
		},
	];
	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{data.map((item, index) => (
				<AnimatedDiv
					key={item.id}
					transition={{
						duration: 0.5 + index * 0.2,
						delay: index * 0.1,
					}}
				>
					<ProjectItem key={item.id} data={item} />
				</AnimatedDiv>
			))}
		</div>
	);
}
