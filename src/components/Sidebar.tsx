import CreditCard from "./CreditCard";

const Sidebar = () => {
	return (
		<div className="min-w-[340px] bg-black md:h-full">
			<div className="flex flex-col m-4 items-center">
				<CreditCard />
			</div>
		</div>
	);
};

export default Sidebar;
