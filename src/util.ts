import type { MDXInstance, ContentItem } from "./types";

export function sortMDByDate(contentItems: MDXInstance<ContentItem>[] = []) {
	return contentItems.sort(
		(a, b) =>
			new Date(b.frontmatter.publishDate).valueOf() -
			new Date(a.frontmatter.publishDate).valueOf()
	);
}

// This function expects the @arg contentItems to be sorted by sortMDByDate()
export function getPreviousAndNextProjects(
	currentSlug: string,
	contentItems: MDXInstance<ContentItem>[] = []
) {
	const index = contentItems.findIndex(({ url }) => url === currentSlug);
	return {
		prev: contentItems[index + 1] ?? null,
		next: contentItems[index - 1] ?? null,
	};
}

export function getAllTags(contentItems: MDXInstance<ContentItem>[] = []) {
	const allTags = new Set<string>();
	contentItems.forEach((project) => {
		project.frontmatter.tags?.map((tag) => allTags.add(tag.toLowerCase()));
	});
	return [...allTags];
}

export function getAllTagsWithCount(
	contentItems: MDXInstance<ContentItem>[] = []
): {
	[key: string]: number;
} {
	return contentItems.reduce((prev, project) => {
		const currTags = { ...prev };
		project.frontmatter.tags?.forEach(function (tag) {
			currTags[tag] = (currTags[tag] || 0) + 1;
		});
		return currTags;
	}, {});
}

export function toggleClass(element: HTMLElement, className: string) {
	element.classList.toggle(className);
}

export function elementHasClass(element: HTMLElement, className: string) {
	return element.classList.contains(className);
}

export function getLocaleTime(
	date: number | Date,
	options: Intl.DateTimeFormatOptions = {},
	locale: string | string[] = "en-GB"
) {
	const formatOptions: Intl.DateTimeFormatOptions = {
		day: "numeric",
		month: "long",
		year: "numeric",
		...options,
	};
	return new Intl.DateTimeFormat(locale, formatOptions).format(date);
}
