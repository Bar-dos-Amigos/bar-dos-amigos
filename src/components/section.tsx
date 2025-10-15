import {
	motion,
	type TargetAndTransition,
	type Transition,
	useInView,
	type VariantLabels,
} from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = React.PropsWithChildren<{
	itemID?: string;
	className?: string;
	initial?: boolean | TargetAndTransition | VariantLabels;
	animate?: boolean | TargetAndTransition | VariantLabels;
	transition?: Transition;
}>;

export function AnimatedSection({
	children,
	itemID,
	className,
	initial = { opacity: 0, y: 50 },
	animate = { opacity: 1, y: 0 },
	transition = { duration: 0.6 },
}: AnimatedSectionProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<motion.section
			ref={ref}
			initial={initial}
			animate={isInView ? animate : undefined}
			transition={transition}
			className={cn("flex flex-col gap-4", className)}
			id={itemID}
		>
			{children}
		</motion.section>
	);
}
