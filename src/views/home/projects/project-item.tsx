import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Item,
	ItemContent,
	ItemHeader,
	ItemMedia,
	ItemTitle,
} from "@/components/ui/item";
import type { Project } from "./project.type";

export function ProjectItem({ data }: { data: Project }): React.JSX.Element {
	const rel = data.external ? "noopener noreferrer" : undefined;
	const target = data.external ? "_blank" : undefined;

	return (
		<Item className="flex flex-col gap-4 p-4 w-full h-full" variant="outline">
			<ItemHeader className="flex flex-col items-start">
				<ItemMedia className="w-full">
					<img
						src={data.image}
						alt={data.imageAlt ?? data.title}
						className="w-full rounded-md"
					/>
				</ItemMedia>
				<div className="flex flex-col gap-2 mt-2">
					<Badge variant="secondary">{data.topic}</Badge>

					<ItemTitle className="text-xl">
						<h4>{data.title}</h4>
					</ItemTitle>
				</div>
				<ItemContent className="text-muted-foreground flex-1">
					{data.description}
				</ItemContent>
				{data.url && data.linkLabel ? (
					<Button asChild variant="secondary" className="mt-2">
						<a href={data.url} target={target} rel={rel}>
							{data.linkLabel}
						</a>
					</Button>
				) : null}
			</ItemHeader>
		</Item>
	);
}
