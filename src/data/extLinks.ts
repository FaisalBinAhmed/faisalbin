export type ExtLink = {
	name: string;
	icon: string;
	link: string;
	color: string;
};

export const extLinks: Array<ExtLink> = [
	{
		name: "Twitter",
		icon: "/assets/twitter.png",
		link: "https://twitter.com",
		color: "#1DA1F2"
	},
	{
		name: "GitHub",
		icon: "/assets/github.png",
		link: "https://github.com",
		color: "#333"
	},
	{
		name: "LinkedIn",
		icon: "/assets/linkedin.png",
		link: "https://linkedin.com",
		color: "#0077B5"
	},
	{
		name: "Blog",
		icon: "/assets/medium.png",
		link: "https://medium.com/faisalbin",
		color: "#E1306C"
	}
];
