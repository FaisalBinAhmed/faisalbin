import { useRouter } from "next/router";
import CreditCard from "./CreditCard";
import NavMenu, { getActiveClass, paths } from "./NavMenu";
import Link from "next/link";

const Sidebar = () => {
	const { pathname } = useRouter();

	// const isHome = pathname === "/";

	return (
		<>
			<div className="hidden md:flex h-full">
				<LandscapeSidebar />
			</div>
			<div className="md:hidden">
				<MobileNaveMenu />
			</div>
		</>
	);
};

export default Sidebar;

const LandscapeSidebar = () => {
	// const { pathname } = useRouter();

	// const isHome = pathname === "/";

	return (
		<div className="w-[340px] bg-black">
			<div className="flex h-full flex-col justify-between">
				<CreditCard />
				<NavMenu />
			</div>
		</div>
	);
};

const MobileNaveMenu = () => {
	const { pathname } = useRouter();

	// const isHome = pathname === "/";

	return (
		<div className="w-screen bg-black ">
			<div
				style={{ scrollbarWidth: "none" }}
				className="flex flex-row overflow-scroll justify-between p-4 px-6 py-8 gap-4">
				{paths.map(({ path, name }) => (
					<Link key={path} href={path}>
						<div className={getActiveClass(pathname, path)}>{name}</div>
					</Link>
				))}
			</div>
		</div>
	);
};
