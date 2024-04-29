import CreditCard from "./CreditCard";
import NavMenu from "./NavMenu";

const Sidebar = () => {
	return (
		<div className="w-[340px] bg-black md:h-full">
			<div className="flex h-full flex-col justify-between">
				<CreditCard />
				<div className="flex-1 hidden md:flex ">
					<NavMenu />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
