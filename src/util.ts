import type { MDXInstance, Project } from "./types";

export function sortMDByDate(projects: MDXInstance<Project>[] = []) {
	return projects.sort(
		(a, b) =>
			new Date(b.frontmatter.publishDate).valueOf() -
			new Date(a.frontmatter.publishDate).valueOf()
	);
}

// This function expects the @arg projects to be sorted by sortMDByDate()
export function getPreviousAndNextProjects(
	currentSlug: string,
	projects: MDXInstance<Project>[] = []
) {
	const index = projects.findIndex(({ url }) => url === currentSlug);
	return {
		prev: projects[index + 1] ?? null,
		next: projects[index - 1] ?? null,
	};
}

export function getAllTags(projects: MDXInstance<Project>[] = []) {
	const allTags = new Set<string>();
	projects.forEach((project) => {
		project.frontmatter.tags?.map((tag) => allTags.add(tag.toLowerCase()));
	});
	return [...allTags];
}

export function getAllTagsWithCount(projects: MDXInstance<Project>[] = []): {
	[key: string]: number;
} {
	return projects.reduce((prev, project) => {
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
