export type Project = {
	id: number;
	title: string;
	image: string;
	imageAlt?: string;
	topic: string;
	description: string;
	url?: string;
	external?: boolean;
	linkLabel?: string;
};
