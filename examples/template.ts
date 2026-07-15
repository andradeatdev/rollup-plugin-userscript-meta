import type { Metablock } from "../src";
import { createMetablock } from "../src";

const meta: Metablock = {
	name: [
		"Example Userscript",
		{
			"pt-BR": "Exemplo de script de usuário",
			"en-US": "Example userscript",
		},
	],

	namespace: "https://example.com/userscripts",

	author: "me",

	version: "1.0.0",

	description: [
		"This is an example userscript",
		{
			"pt-BR": "Este é um exemplo de script de usuário",
			"en-US": "This is an example userscript",
		},
	],

	icon: "https://example.com/icon.png",

	match: ["https://example.com/*", "https://*.example.net/*"],

	excludeMatch: ["https://example.com/private/*"],

	include: [/^https:\/\/example\.net\/.*/],

	exclude: [/^https:\/\/example\.org\/admin\/.*/],

	require: [
		"https://cdn.example.com/libs/dom-utils.js",
		"https://cdn.example.com/libs/ui-helpers.js",
	],

	resource: [
		["styles", "https://example.com/assets/styles.css"],
		["config", "https://example.com/assets/config.json"],
		["logo", "https://example.com/assets/logo.png"],
	],

	runAt: "document-end",

	noframes: true,

	grant: [
		"GM_getValue",
		"GM_setValue",
		"GM_addStyle",
		"GM_registerMenuCommand",
		"GM_notification",
		"GM_xmlhttpRequest",

		"GM.getValue",
		"GM.setValue",
		"GM.addStyle",
		"GM.registerMenuCommand",
		"GM.notification",
		"GM.xmlHttpRequest",
	],

	injectInto: "auto",

	downloadURL: "https://example.com/userscripts/example.meta.js",

	supportURL: "https://example.com/support",

	homepageURL: "https://example.com",

	unwrap: false,

	tag: ["utility", "productivity", "automation"],
};

console.log(createMetablock(meta));
