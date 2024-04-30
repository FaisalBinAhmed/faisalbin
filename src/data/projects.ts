export type Tag =
	| "Chrome"
	| "Edge"
	| "Android"
	| "Mac"
	| "iOS"
	| "Open Source"
	| "Rust"
	| "TypeScript"
	| "React"
	| "React Native"
	| "Swift"
	| "SwiftUI";

export type Project = {
	id: string; // used as the route
	title: string;
	desc: string;
	tags: Tag[];
	logo?: string;
	link: string;
};

export const projects: Array<Project> = [
	{
		id: "mvgfahrinfo",
		title: "MVGFahrinfo",
		desc: "Get up-to-date departure times for Munich public transport in your terminal. MVGFahrinfo is a CLI tool to keep up-to-date with latest departure times of Munich public transport. The app is a native binary and uses official (albeit unpublished) MVG API.",
		tags: ["Rust", "Open Source"],
		link: "https://github.com/FaisalBinAhmed/MVGFahrinfo"
	},
	{
		id: "meilifinder",
		title: "MeiliFinder",
		desc: "The ultimate Meilisearch client for your terminal",
		tags: ["Rust", "Open Source"],
		link: "https://github.com/FaisalBinAhmed/MeiliFinder"
	},

	{
		id: "tabius",
		title: "Tabius - Automatic Tab Grouping Assistant",
		desc: "An Automatic Tab Grouping Extension for Your Browser. Tabius is a customizable and easy to use Tab Grouping assistant for Chrome. It is also open source!",
		tags: ["TypeScript", "Open Source"],
		logo: "/assets/logos/tabius_logo.png",
		link: "https://chrome.google.com/webstore/detail/tabius-tab-grouping-assis/enceimdjnaccoeikjobaeicfodlfnijp?hl=en"
	},
	{
		id: "trilby",
		title: "Trilby for Hacker News",
		desc: "Trilby is a beautiful, and thoughtfully created Hacker News client for your device. The app lets you browse and interact with Hacker News the way you want.",
		tags: ["React Native", "TypeScript"],
		logo: "/assets/logos/trilby-logo.webp",
		link: "https://play.google.com/store/apps/details?id=com.failab.trilby"
	},
	{
		id: "scaler",
		title: "Scaler Bandwidth Monitor",
		desc: "Realtime bandwidth monitor application for macOS devices. Scaler Bandwidth Monitor lives inside the Menubar. It lets you track the current, combined incoming and outgoing network traffic of your device.",
		tags: ["Swift", "SwiftUI"],
		logo: "/assets/logos/scaler-logo.webp",
		link: "https://apps.apple.com/app/scaler-bandwidth-monitor/id1612708557?mt=12"
	},
	{
		id: "keytrails",
		title: "KeyTrails - Keyboard Visualizer",
		desc: "KeyTrails helps you present your Mac keyboard input on your screen. Whether you are making a tutorial video, streaming your gaming session, or giving a business presentation, KeyTrails makes your content just a bit catchier.",
		tags: ["Swift", "SwiftUI"],
		logo: "/assets/logos/keytrails-logo.png",
		link: "https://apps.apple.com/us/app/keytrails/id1632266803"
	},
	{
		id: "cliptonite",
		title: "Cliptonite - Clipboard Manager",
		desc: "Cliptonite is a beautifully crafted, customizable, and performant clipboard manager for MacOS. Cliptonite lives inside the menubar and lets you quickly copy and paste items from your clipboard history.",
		tags: ["Swift", "SwiftUI"],
		logo: "/assets/logos/cliptonite.png",
		link: "https://apps.apple.com/app/id6446803122"
	},
	{
		id: "listcalculation",
		title: "List Calculation",
		desc: "Create personal budget sheet or invoice without complex formula. List Calculation is a two column list calculator app with many use cases. Be that keeping track of your monthly expenses or creating an invoice for your orders.",
		tags: ["Swift", "SwiftUI"],
		logo: "/assets/logos/lc-logo.png",
		link: "https://apps.apple.com/app/id6476781364"
	}
];
