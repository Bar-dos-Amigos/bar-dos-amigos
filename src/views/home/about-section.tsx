import {
	BookOpen,
	ChevronRight,
	Cpu,
	Dice1,
	Gamepad,
	Trophy,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { Gamepad as GamepadLottie } from "@/components/lottie/gamepad";
import { Trophy as TrophyLottie } from "@/components/lottie/trophy";
import { Users as UsersLottie } from "@/components/lottie/users";
import { AnimatedSection } from "@/components/section";
import { Button } from "@/components/ui/button";

export function AboutSection(): React.JSX.Element {
	const items = [
		{
			text: "Eventos de anime",
			icon: <GamepadLottie />,
			iconAnimation: {
				initial: { opacity: 0, y: -20 },
				animate: { opacity: 1, y: 0 },
				exit: { opacity: 0, y: -20 },
			},
			textAnimation: {
				initial: { opacity: 0, y: 20 },
				animate: { opacity: 1, y: 0 },
				exit: { opacity: 0, y: 20 },
			},
		},
		{
			text: "Torneios mensais",
			icon: <TrophyLottie />,
			iconAnimation: {
				initial: { opacity: 0, scale: 0.5 },
				animate: { opacity: 1, scale: 1 },
				exit: { opacity: 0, scale: 0.5 },
			},
			textAnimation: {
				initial: { opacity: 0, scale: 0.8 },
				animate: { opacity: 1, scale: 1 },
				exit: { opacity: 0, scale: 0.8 },
			},
		},
		{
			text: "Comunidade no Discord",
			icon: <UsersLottie />,
			iconAnimation: {
				initial: { opacity: 0, x: -20 },
				animate: { opacity: 1, x: 0 },
				exit: { opacity: 0, x: -20 },
			},
			textAnimation: {
				initial: { opacity: 0, x: 20 },
				animate: { opacity: 1, x: 0 },
				exit: { opacity: 0, x: 20 },
			},
		},
	];

	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % items.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	const floatingElements = useMemo(
		() => [
			{
				element: <Gamepad size={32} />,
				x: 10,
				y: 20,
				duration: 4,
				delay: 0,
				opacity: 0.2,
			},
			{
				element: <Cpu size={28} />,
				x: 50,
				y: 10,
				duration: 3.5,
				delay: 1,
				opacity: 0.25,
			},
			{
				element: <BookOpen size={36} />,
				x: 80,
				y: 50,
				duration: 5,
				delay: 2,
				opacity: 0.15,
			},
			{
				element: <Dice1 size={24} />,
				x: 20,
				y: 70,
				duration: 4.2,
				delay: 0.5,
				opacity: 0.3,
			},
			{
				element: <Trophy size={30} />,
				x: 70,
				y: 20,
				duration: 3.8,
				delay: 1.5,
				opacity: 0.25,
			},

			{
				element: (
					<div
						className="rounded-full bg-primary"
						style={{ width: 10, height: 10 }}
					/>
				),
				x: 15,
				y: 25,
				duration: 3,
				delay: 0.2,
				opacity: 0.15,
			},
			{
				element: (
					<div
						className="rounded-full bg-primary"
						style={{ width: 8, height: 8 }}
					/>
				),
				x: 60,
				y: 30,
				duration: 3.5,
				delay: 0.8,
				opacity: 0.2,
			},
			{
				element: (
					<div
						className="rounded-full bg-primary"
						style={{ width: 12, height: 12 }}
					/>
				),
				x: 40,
				y: 60,
				duration: 4,
				delay: 1,
				opacity: 0.25,
			},
			{
				element: (
					<div
						className="rounded-full bg-primary"
						style={{ width: 9, height: 9 }}
					/>
				),
				x: 75,
				y: 70,
				duration: 3.8,
				delay: 1.3,
				opacity: 0.18,
			},
			{
				element: (
					<div
						className="rounded-full bg-primary"
						style={{ width: 11, height: 11 }}
					/>
				),
				x: 25,
				y: 50,
				duration: 4.2,
				delay: 0.6,
				opacity: 0.22,
			},
		],
		[],
	);

	return (
		<AnimatedSection
			itemID="about"
			className="relative flex flex-col justify-center items-center text-center gap-10 pt-30"
		>
			{floatingElements.map((el) => (
				<motion.div
					key={el.x + el.y}
					className="absolute text-primary/30"
					style={{
						top: `${el.y}%`,
						left: `${el.x}%`,
						opacity: el.opacity,
					}}
					animate={{ y: [0, -20, 0], rotate: [0, 15, -15, 0] }}
					transition={{
						repeat: Infinity,
						duration: el.duration,
						delay: el.delay,
					}}
				>
					{el.element}
				</motion.div>
			))}

			<div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/5 blur-3xl rounded-full" />
			<div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-500/5 blur-3xl rounded-full" />

			<div className="flex flex-col gap-8 items-center z-10 min-h-[250px] overflow-clip">
				<AnimatePresence mode="wait">
					<motion.div
						key={`icon-${current}`}
						{...items[current].iconAnimation}
						transition={{ duration: 0.7 }}
						className="text-primary h-[120px]"
					>
						{items[current].icon}
					</motion.div>

					<motion.h1
						key={`text-${current}`}
						{...items[current].textAnimation}
						transition={{ duration: 0.7 }}
						className="text-5xl font-bold "
					>
						{items[current].text}
					</motion.h1>
				</AnimatePresence>
			</div>

			<p className="max-w-xl text-gray-300 relative z-10 text-lg">
				Junte-se à nossa comunidade. Converse, compartilhe ideias e conecte-se
				com outros membros. Esperamos você lá!
			</p>

			<Button className="flex items-center justify-center gap-2 relative z-10">
				Junte-se a comunidade <ChevronRight size={50} />
			</Button>
		</AnimatedSection>
	);
}
