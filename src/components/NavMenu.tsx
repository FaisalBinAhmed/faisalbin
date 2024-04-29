import Link from "next/link";
import Footer from "./Footer";

const NavMenu = () => {
	return (
		<div className="flex flex-col h-full justify-between">
			<div className="flex flex-col gap-4 my-8 mx-8 text-right">
				<Link href="/">
					<div className="text-neutral-400 ">Home</div>
				</Link>
				<Link href="/projects">
					<div className="text-neutral-400 ">Projects</div>
				</Link>
				<Link href="/contact">
					<div className="text-neutral-400 ">Contact</div>
				</Link>
			</div>
			<div className="w-full">
				<Footer />
			</div>
		</div>
	);
};

export default NavMenu;
