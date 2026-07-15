export type Metablock = {
	name: string | LocalizedMeta;
	namespace?: string;
	author?: string;
	match?: [string, ...string[]];
	excludeMatch?: [string, ...string[]];
	include?: IncludeExcludeMeta;
	exclude?: IncludeExcludeMeta;
	version?: string;
	description?: string | LocalizedMeta;
	icon?: string;
	require?: [string, ...string[]];
	resource?: [ResourceMeta, ...ResourceMeta[]];
	runAt?: "document-start" | "document-body" | "document-end" | "document-idle";
	noframes?: boolean;
	grant?: [GrantMeta, ...GrantMeta[]];
	injectInto?: "page" | "content" | "auto";
	downloadURL?: string;
	supportURL?: string;
	homepageURL?: string;
	unwrap?: boolean;
	tag?: [string, ...string[]];
};

export type I18n = {
	[locale: string]: string;
};

export type IncludeExcludeMeta = [
	pattern: RegExp | string,
	...patterns: RegExp[] | string[],
];

export type LocalizedMeta = string | [defaultValue: string, translations: I18n];

export type ResourceMeta = [name: string, url: string];

export type GrantMeta =
	| "none"

	// Sync
	| "GM_info"
	| "GM_getValue"
	| "GM_getValues"
	| "GM_setValue"
	| "GM_setValues"
	| "GM_deleteValue"
	| "GM_deleteValues"
	| "GM_listValues"
	| "GM_addValueChangeListener"
	| "GM_removeValueChangeListener"
	| "GM_getResourceText"
	| "GM_getResourceURL"
	| "GM_addElement"
	| "GM_addStyle"
	| "GM_openInTab"
	| "GM_registerMenuCommand"
	| "GM_unregisterMenuCommand"
	| "GM_notification"
	| "GM_setClipboard"
	| "GM_xmlhttpRequest"
	| "GM_download"

	// Async
	| "GM.info"
	| "GM.getValue"
	| "GM.getValues"
	| "GM.setValue"
	| "GM.setValues"
	| "GM.deleteValue"
	| "GM.deleteValues"
	| "GM.listValues"
	| "GM.getResourceUrl"
	| "GM.addElement"
	| "GM.addStyle"
	| "GM.registerMenuCommand"
	| "GM.notification"
	| "GM.openInTab"
	| "GM.setClipboard"
	| "GM.xmlHttpRequest"
	| "GM.download";

export type Entry =
	| { type: "line"; key: string; value: string; bare?: boolean }
	| { type: "break" };
