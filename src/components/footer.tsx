import { SOCIAL_LINKS } from "@/config/constants";
import { Button } from "./ui/button";

export function Footer(): React.JSX.Element {
	return (
		<footer className="border-t bg-background pb-14 md:pb-0">
			<div className="max-w-[1280px] mx-auto px-4 py-8 flex flex-col items-center gap-8">
				<a
					className="flex flex-col items-center sm:items-start gap-2"
					href="/"
					title="Inicio"
				>
					<img src="/logo512.png" alt="Bar dos Amigos" className="w-12" />
				</a>

				<div className="flex flex-col items-center gap-3">
					<div className="flex gap-4">
						<Button variant="ghost" asChild>
							<a
								href={SOCIAL_LINKS.discord.href}
								target="_blank"
								rel="noopener noreferrer"
								title="Entre no Discord"
							>
								<SOCIAL_LINKS.discord.icon size={28} />
							</a>
						</Button>
						<Button variant="ghost" asChild>
							<a
								href={SOCIAL_LINKS.instagram.href}
								target="_blank"
								rel="noopener noreferrer"
								title="Siga no Instagram"
							>
								<SOCIAL_LINKS.instagram.icon size={28} />
							</a>
						</Button>
						<Button variant="ghost" asChild>
							<a
								href={SOCIAL_LINKS.stream.href}
								target="_blank"
								rel="noopener noreferrer"
								title="Siga na Twitch"
							>
								<SOCIAL_LINKS.stream.icon size={28} />
							</a>
						</Button>
					</div>
				</div>

				{/* Iframe do Discord */}
				{/* <div className="flex justify-center sm:justify-end">
					<iframe
						src="https://discord.com/widget?id=SEU_SERVIDOR_ID&theme=light"
						width="250"
						height="300"
						allowTransparency
						frameBorder="0"
						sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
						className="rounded-md border border-gray-300 dark:border-gray-700"
					/>
				</div> */}
				<div className="flex flex-col items-center text-center gap-1 text-sm text-gray-700 dark:text-gray-300">
					<p>© 2025 Bar dos Amigos. Todos os direitos reservados.</p>
					<p>
						Desenvolvido por{" "}
						<a
							href="https://jrdan.dev?utm_source=bardosamigos&utm_medium=footer&utm_campaign=credits"
							target="_blank"
							rel="noopener noreferrer"
							className="underline underline-offset-2 hover:text-primary transition-colors"
						>
							jrdan.dev
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
