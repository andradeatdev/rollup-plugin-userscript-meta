import type { Plugin } from "rollup";
import { createMetablock } from "./helpers";
import type { Metablock } from "./types";

export function metablock(meta: Metablock): Plugin {
	if (!meta.name) {
		throw new Error("Metablock must have a name");
	}

	const header = createMetablock(meta);

	return {
		name: "metablock",

		renderChunk(code) {
			return {
				code: `${header}\n\n${code}`,
				map: null,
			};
		},
	};
}
