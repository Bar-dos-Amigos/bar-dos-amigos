import { Link } from "@tanstack/react-router";
import { Folder, Handshake, Home, Menu } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
// import { ThemeSwitcher } from "./theme-switcher";
import { SOCIAL_LINKS } from "@/config/constants";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Separator } from "./ui/separator";

function SocialCard({
	icon,
	title,
	avatar,
	url,
	description,
}: {
	icon: React.JSX.Element;
	title: string;
	avatar: string;
	url: string;
	description: string;
}): React.JSX.Element {
	return (
		<HoverCard>
			<HoverCardTrigger asChild>
				<Button variant="ghost">{icon}</Button>
			</HoverCardTrigger>
			<HoverCardContent className="w-80">
				<div className="flex gap-4">
					<Avatar>
						<AvatarImage src={avatar} alt={title} />
						<AvatarFallback>BDA</AvatarFallback>
					</Avatar>
					<div className="space-y-1">
						<h4 className="text-sm font-semibold">
							<a href={url} target="_blank" rel="noreferrer">
								{title}
							</a>
						</h4>
						<p className="text-sm">{description}</p>
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	);
}

export function Header(): React.JSX.Element {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<>
			<header className="hidden md:flex border-b border-b/20 sticky top-0 z-50 bg-background">
				<div className="max-w-[1280px] mx-auto px-4 py-2 w-full flex justify-between items-center flex-1 h-16">
					<Link to="/" className="min-h-10 min-w-10 w-10 h-10">
						<img src="/logo512.png" alt="Logo do Bar dos Amigos" />
					</Link>

					<nav className="flex gap-2 items-center h-8">
						<Button asChild variant="ghost" className="text-sm">
							<Link to="/">Inicio</Link>
						</Button>
						<Button asChild variant="ghost" className="text-sm">
							<a href="#projects">Projetos</a>
						</Button>
						<Button asChild variant="ghost" className="text-sm">
							<a href="#sponsors">Parceiros</a>
						</Button>

						<Separator orientation="vertical" className="h-6 w-px" />

						<a
							href={SOCIAL_LINKS.instagram.href}
							target="_blank"
							rel="noreferrer"
						>
							<SocialCard
								icon={<SOCIAL_LINKS.instagram.icon size={20} />}
								title="@bar_dos_amigos_online"
								url={SOCIAL_LINKS.instagram.href}
								avatar="/logo512.png"
								description="🍻 Bem-vindo ao Bar dos Amigos!
							RPG, eventos, games e zoeira com a galera geek.
							Entra, pega tua bebida e bora jogar 🎮"
							/>
						</a>

						<a
							href={SOCIAL_LINKS.stream.href}
							target="_blank"
							rel="noreferrer"
						>
							<SocialCard
								icon={<SOCIAL_LINKS.stream.icon size={20} />}
								title="@kauso1"
								url={SOCIAL_LINKS.stream.href}
								avatar="/logo512.png"
								description="🍻 Bar dos Amigos — onde a live vira rolê!
							Games, animes, RPG e muita resenha com a comunidade 💬"
							/>
						</a>

						<a
							href={SOCIAL_LINKS.discord.href}
							target="_blank"
							rel="noreferrer"
						>
							<SocialCard
								icon={<SOCIAL_LINKS.discord.icon size={20} />}
								title="@Bar dos amigos"
								url={SOCIAL_LINKS.discord.href}
								avatar="/logo512.png"
								description="🍻 Bem-vindo ao Bar dos Amigos!
							RPG, eventos, games e zoeira com a galera geek.
							Entra, pega tua bebida e bora jogar 🎮"
							/>
						</a>

						{/* <Separator orientation="vertical" className="h-6 w-px" /> */}
						{/* <ThemeSwitcher /> */}
					</nav>
				</div>
			</header>

			<nav
				className="bg-background fixed md:hidden bottom-0 left-0 w-full h-14 flex justify-between items-center
                px-6 z-50
                border-t border-t/20"
			>
				<Link to="/" className="min-h-10 min-w-10 w-10 h-10">
					<img src="/logo512.png" alt="Logo do Bar dos Amigos" />
				</Link>

				<button
					type="button"
					onClick={() => setOpen((prev) => !prev)}
					className="p-2 rounded-md hover:bg-accent/20 transition"
				>
					<Menu size={22} />
				</button>
			</nav>

			<AnimatePresence>
				{open && (
					<>
						<motion.div
							className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setOpen(false)}
						/>

						<motion.div
							className="fixed bottom-0 left-0 w-full bg-background border-t border-border rounded-t-2xl z-50 p-6"
							initial={{ y: "100%" }}
							animate={{ y: 0 }}
							exit={{ y: "100%" }}
							transition={{ type: "spring", stiffness: 200, damping: 20 }}
						>
							<div className="flex flex-col gap-6">
								<Button
									asChild
									variant="ghost"
									className="text-sm"
									onClick={() => setOpen(false)}
								>
									<Link to="/">
										<Home /> Inicio
									</Link>
								</Button>
								<Button
									asChild
									variant="ghost"
									className="text-sm"
									onClick={() => setOpen(false)}
								>
									<a href="#projects">
										<Folder size={20} /> Projetos
									</a>
								</Button>
								<Button
									asChild
									variant="ghost"
									className="text-sm"
									onClick={() => setOpen(false)}
								>
									<a href="#sponsors">
										<Handshake />
										Parceiros
									</a>
								</Button>

								{/* <ThemeSwitcher label="Trocar tema" /> */}

								<div className="text-sm flex flex-wrap items-center justify-center gap-2 w-full">
									<Button asChild variant="ghost">
										<a
											href={SOCIAL_LINKS.stream.href}
											target="_blank"
											rel="noreferrer"
										>
											<SOCIAL_LINKS.stream.icon size={20} />
										</a>
									</Button>
									<Button asChild variant="ghost">
										<a
											href={SOCIAL_LINKS.instagram.href}
											target="_blank"
											rel="noreferrer"
										>
											<SOCIAL_LINKS.instagram.icon size={20} />
										</a>
									</Button>
									<Button asChild variant="ghost">
										<a
											href={SOCIAL_LINKS.discord.href}
											target="_blank"
											rel="noreferrer"
										>
											<SOCIAL_LINKS.discord.icon size={20} />
										</a>
									</Button>
								</div>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
