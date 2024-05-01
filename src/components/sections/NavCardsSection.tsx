import navItems from "@/data/navItems";
import NavCard from "@/components/NavCard";

const NavCardsSection = () => {
	return (
		<div className="flex flex-col md:flex-row p-4 md:p-8 gap-8">
			{/* <div className="min-w-[340px] text-right"></div> */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{navItems.map((item, index) => (
					<NavCard
						key={index}
						title={item.title}
						desc={item.desc}
						icon={item.icon}
						link={item.route}
					/>
				))}
			</div>
		</div>
	);
};

export default NavCardsSection;