import Link from "next/link";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

export const getActiveClass = (pathname: string, path: string) => {
	return pathname === path ? "text-white" : "text-neutral-400";
};

export const paths = [
	{ path: "/", name: "Home" },
	{ path: "/projects", name: "Projects" },
	{ path: "/publications", name: "Publications" },
	{ path: "/designs", name: "Designs" },
	{ path: "/about", name: "About" },
	{ path: "/contact", name: "Contact" }
];

const NavMenu = () => {
	const { pathname } = useRouter();

	return (
		<div className="flex flex-col h-full justify-between">
			<div className="flex flex-col gap-4 my-8 mx-8 text-right">
				{paths.map(({ path, name }) => (
					<Link key={path} href={path}>
						<div className={getActiveClass(pathname, path)}>{name}</div>
					</Link>
				))}
			</div>
			<div className="w-full">
				<Footer />
			</div>
		</div>
	);
};

export default NavMenu;
