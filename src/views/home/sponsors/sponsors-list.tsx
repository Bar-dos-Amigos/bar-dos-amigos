"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useDotButton } from "./carousel-dots";
import type { Sponsor } from "./sponsor.type";
import { ProjectItem } from "./sponsor-item";

export const sponsors: Sponsor[] = [
	{
		id: 1,
		title: "Wolfoxy",
		image: "/assets/sponsors/wolfoxy.avif",
		description:
			"Wolfoxy Ã© uma organizaÃ§Ã£o brasileira de e-sports dedicada a torneios da comunidade, com foco em jogos da Riot Games (LoL, VALORANT, TFT e LoR). Ativa hÃ¡ mais de 5 anos, conecta milhares de jogadores em competiÃ§Ãµes recorrentes e acessÃ­veis, fortalecendo a base competitiva no Brasil.",
	},
	{
		id: 2,
		title: "Star Seeds",
		image: "/assets/sponsors/star-seeds.avif",
		description:
			"AlÃ©m de guilda em jogos mmorpg (atualmente no BPSR) somos uma comunidade de amigos que curtem games, animes e cultura geek. Contudo, em nosso discord, vocÃª encontrarÃ¡ nossas Subcomunidades: GACHAZONE - tudo sobre jogos gacha. E a ANIMEVERSE - tudo sobre animes, mangas e afins.",
	},
];

export function SponsorList() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
		Autoplay({ delay: 5000 }),
	]);
	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useDotButton(emblaApi);

	return (
		<div className="w-full">
			<div className="overflow-hidden" ref={emblaRef}>
				<div className="flex">
					{sponsors.map((item) => (
						<div key={item.id} className="flex-none w-full sm:w-1/2 px-2">
							<ProjectItem data={item} />
						</div>
					))}
				</div>
			</div>

			<div className="flex justify-center mt-4 gap-2">
				{scrollSnaps.map((snap, index) => (
					<button
						type="button"
						key={snap}
						onClick={() => onDotButtonClick(index)}
						className={`lg:hidden w-3 h-3 rounded-full transition-colors ${
							index === selectedIndex ? "bg-orange-500" : "bg-gray-300"
						}`}
					/>
				))}
			</div>
		</div>
	);
}
