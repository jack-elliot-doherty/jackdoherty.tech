import type { MDXInstance, Page } from "astro";

type Theme = "light" | "dark";

interface IElement {
	readonly as?: keyof HTMLElementTagNameMap;
}

type SiteMeta = {
	title: string;
	description?: string;
	image?: string;
};

type PaginationLink = {
	url: string;
	text?: string;
	srLabel?: string;
};

interface ContentItem {
	title: string;
	description: string;
	publishDate: Date;
	type: "Post" | "Project";
	tags?: string[];
}

interface Favourite {
	name: string;
	description: string;
	link: string;
}

interface FavouriteList {
	favourites: Favourite[];
}

export type {
	MDXInstance,
	Page,
	Theme,
	IElement,
	SiteMeta,
	PaginationLink,
	ContentItem,
	Favourite,
	FavouriteList,
};
