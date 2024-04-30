type NavItem = {
	title: string;
	desc: string;
	color: string;
	icon: string;
	route: string;
};

const navItems: Array<NavItem> = [
	{
		title: "About Me",
		desc: "Short bio, skills, interests",
		color: "#a2de96",
		icon: "/assets/icons/identification.svg",

		route: "/about"
	},
	{
		title: "Projects",
		desc: "Open-source projects, apps, websites",
		color: "#FF8A80",
		icon: "/assets/icons/code-bracket.svg",

		route: "/projects"
	},
	{
		title: "Publications",
		desc: "Published papers, academic articles",
		color: "#fbd46d",
		icon: "/assets/icons/academic.svg",

		route: "/publications"
	},
	{
		title: "Designs",
		desc: "Graphics, UI/UX works",
		color: "#64c4ed",
		icon: "/assets/icons/swatch.svg",

		route: "/designs"
	},
	{
		title: "Resume",
		color: "#e1ccec",
		desc: "Download my current resume",
		icon: "/assets/icons/document-text.svg",

		route: "/resume"
	}
];
export default navItems;
