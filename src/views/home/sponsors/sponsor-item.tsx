import { Item, ItemContent, ItemMedia } from "@/components/ui/item";
import type { Sponsor } from "./sponsor.type";

export function ProjectItem({ data }: { data: Sponsor }): React.JSX.Element {
	return (
		<Item
			variant="outline"
			className="relative flex flex-col lg:flex-row overflow-hidden rounded-2xl border border-border bg-card/60 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm w-full h-full"
		>
			<ItemMedia className="relative w-full lg:w-1/3 min-w-[200px] h-48 lg:h-auto overflow-hidden flex-shrink-0">
				<img
					src={data.image}
					alt={data.title}
					className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-none" />
				<h4 className="absolute bottom-0 left-0 right-0 text-2xl font-bold text-foreground p-2 lg:hidden">
					{data.title}
				</h4>
			</ItemMedia>

			<ItemContent className="p-4 lg:p-6 flex-1 flex flex-col justify-between text-sm text-muted-foreground leading-relaxed">
				<p>{data.description}</p>
			</ItemContent>
		</Item>
	);
}
