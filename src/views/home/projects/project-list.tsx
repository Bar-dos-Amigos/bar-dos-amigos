import { AnimatedDiv } from "@/components/section";
import type { Project } from "./project.type";
import { ProjectItem } from "./project-item";

export const projects: Project[] = [
	{
		id: 1,
		title: "Guardian of Bravantus",
		image: "/assets/projects/guardian-of-bravantus.avif",
		topic: "Unity Enginer",
		description:
			"MMORPG Plataforma, o jogo que vai revolucionar suas experiÃªncias de RPG! Estamos 15% avanÃ§ados, e embora estejamos em pausa, a empolgaÃ§Ã£o sÃ³ aumenta! Este projeto incrÃ­vel promete trazer uma imersÃ£o multiplayer Ãºnica, com progressÃ£o dinÃ¢mica e diversas estratÃ©gias vocÃª explorar e se divertir. Prepare-se para uma aventura Ã©pica!",
	},
	{
		id: 2,
		title: "MythiCards",
		image: "/assets/projects/mythic-cards.avif",
		topic: "Roblox Studios",
		description:
			"Confira este emocionante jogo no Roblox, onde vocÃª pode mergulhar em um universo de cartas inspirado nas mitologias do mundo! Estamos a apenas 80% da entrega do nosso MVP, e a fase de desenvolvimento a todo vapor! Junte-se a nÃ³s e faÃ§a parte dessa aventura incrÃ­vel como colaborador da comunidade!",
	},
	{
		id: 3,
		title: "Festival da Comunidade Bar dos Amigos",
		image: "/assets/projects/festival-da-comunidade.avif",
		topic: "Evento Comunidade",
		description:
			"Prepare-se para um evento incrÃ­vel que vai mergulhar vocÃª no universo tecnologia, design e games! Vamos explorar uma variedade de conteÃºdos emocionantes, com torneios eletrizantes e Ã³timas conversas ao vivo com pessoas vibrantes e cheias de energia! NÃ£o perca essa oportunidade Ãºnica!",
	},
	{
		id: 4,
		title: "Paldex Brasil",
		image: "/assets/projects/paldex-br.svg",
		imageAlt: "Capa do projeto Paldex Brasil",
		topic: "Ferramenta Web",
		description:
			"Uma ferramenta em portuguÃªs para consultar Pals, elementos, fraquezas, vantagens de combate e informaÃ§Ãµes de acasalamento em Palworld.",
		url: "https://paldexbr.bardosamigos.com.br",
		external: true,
		linkLabel: "Conhecer o Paldex Brasil",
	},
];

export function ProjectList(): React.JSX.Element {
	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{projects.map((item, index) => (
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
