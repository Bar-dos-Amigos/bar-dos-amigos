"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useDotButton } from "./carousel-dots";
import type { Sponsor } from "./sponsor.type";
import { ProjectItem } from "./sponsor-item";

export function SponsorList() {
	const data: Sponsor[] = [
		{
			id: 1,
			title: "Wolfoxy",
			image: "/assets/sponsors/wolfoxy.avif",
			description:
				"Wolfoxy é uma organização brasileira de e-sports dedicada a torneios da comunidade, com foco em jogos da Riot Games (LoL, VALORANT, TFT e LoR). Ativa há mais de 5 anos, conecta milhares de jogadores em competições recorrentes e acessíveis, fortalecendo a base competitiva no Brasil.",
		},
		{
			id: 2,
			title: "Star Seeds",
			image: "/assets/sponsors/star-seeds.avif",
			description:
				"Além de guilda em jogos mmorpg (atualmente no BPSR) somos uma comunidade de amigos que curtem games, animes e cultura geek. Contudo, em nosso discord, você encontrará nossas Subcomunidades: GACHAZONE - tudo sobre jogos gacha. E a ANIMEVERSE - tudo sobre animes, mangas e afins.",
		},
	];

	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
		Autoplay({ delay: 5000 }),
	]);
	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useDotButton(emblaApi);

	return (
		<div className="w-full">
			<div className="overflow-hidden" ref={emblaRef}>
				<div className="flex">
					{data.map((item) => (
						<div key={item.id} className="flex-none w-full sm:w-1/2 px-2">
							<ProjectItem data={item} />
						</div>
					))}
				</div>
			</div>

			<div className="flex justify-center mt-4 gap-2">
				{scrollSnaps.map((_, index) => (
					<button
						type="button"
						key={index}
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
