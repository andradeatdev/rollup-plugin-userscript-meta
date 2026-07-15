import { endBlock, startBlock } from "./constants";
import type {
	Entry,
	IncludeExcludeMeta,
	LocalizedMeta,
	Metablock,
	ResourceMeta,
} from "./types";

export function createMetablock(meta: Metablock) {
	const entries: Entry[] = [];

	const add = (key: string, value?: unknown) => {
		if (value === undefined) return;

		if (value === "linebreak") {
			entries.push({ type: "break" });
			return;
		}

		if (Array.isArray(value)) {
			for (const item of value) {
				entries.push({ type: "line", key, value: String(item) });
			}
			return;
		}

		if (typeof value === "boolean") {
			if (!value) return;
			entries.push({ type: "line", key, value: "", bare: true });
			return;
		}

		entries.push({ type: "line", key, value: String(value) });
	};

	const addResource = (resources?: [ResourceMeta, ...ResourceMeta[]]) => {
		if (!resources) return;
		const maxNameLength = Math.max(...resources.map(([name]) => name.length));
		for (const [name, url] of resources) {
			entries.push({
				type: "line",
				key: "resource",
				value: `${name.padEnd(maxNameLength + 1)} ${url}`,
			});
		}
	};

	const addLocalizedString = (key: string, value?: LocalizedMeta) => {
		if (!value) return;

		if (typeof value === "string") {
			entries.push({ type: "line", key, value });
			return;
		}

		const [defaultValue, translations] = value;
		entries.push({ type: "line", key, value: defaultValue });

		for (const [locale, text] of Object.entries(translations)) {
			entries.push({ type: "line", key: `${key}:${locale}`, value: text });
		}
	};

	const addIncludeExclude = (key: string, value?: IncludeExcludeMeta) => {
		if (!value) return;
		for (const pattern of value) {
			entries.push({ type: "line", key, value: pattern.toString() });
		}
	};

	addLocalizedString("name", meta.name);
	add("namespace", meta.namespace);
	add("version", meta.version);
	addLocalizedString("description", meta.description);
	add("author", meta.author);
	add("icon", meta.icon);

	add("linebreak");

	add("match", meta.match);
	add("exclude-match", meta.excludeMatch);
	addIncludeExclude("include", meta.include);
	addIncludeExclude("exclude", meta.exclude);

	add("require", meta.require);
	addResource(meta.resource);

	add("run-at", meta.runAt);

	add("grant", meta.grant);

	add("inject-into", meta.injectInto);

	add("downloadURL", meta.downloadURL);
	add("supportURL", meta.supportURL);
	add("homepageURL", meta.homepageURL);

	add("unwrap", meta.unwrap);
	add("noframes", meta.noframes);

	add("tag", meta.tag);

	const maxKeyLength = Math.max(
		0,
		...entries
			.filter((e): e is Extract<Entry, { type: "line" }> => e.type === "line")
			.map((e) => e.key.length),
	);

	const lines: string[] = [startBlock];

	for (const entry of entries) {
		if (entry.type === "break") {
			lines.push("//");
			continue;
		}

		if (entry.bare) {
			lines.push(`// @${entry.key}`);
			continue;
		}

		lines.push(`// @${entry.key.padEnd(maxKeyLength + 4)} ${entry.value}`);
	}

	lines.push(endBlock);

	return lines.join("\n");
}
