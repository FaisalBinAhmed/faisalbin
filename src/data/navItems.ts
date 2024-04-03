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
		desc: "I'm a 26 years old engineer from Munich I'd like to... ",
		color: "#a2de96",
		icon: "/assets/twitter.png",

		route: "/about"
	},
	{
		title: "Projects",
		desc: "Dev works ",
		color: "#FF8A80",
		icon: "/assets/twitter.png",

		route: "/projects"
	},
	{
		title: "Research",
		desc: "Published papers, academic articles",
		color: "#fbd46d",
		icon: "/assets/twitter.png",

		route: "/papers"
	},
	{
		title: "Designs",
		desc: "Graphics, UI/UX works ",
		color: "#64c4ed",
		icon: "/assets/twitter.png",

		route: "/designs"
	},
	{
		title: "Resume",
		color: "#e1ccec",
		desc: "TBA ",
		icon: "/assets/twitter.png",

		route: "/"
	}
];
export default navItems;
