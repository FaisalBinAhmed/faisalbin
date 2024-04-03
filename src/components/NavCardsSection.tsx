import navItems from "@/data/navItems";

const NavCardsSection = () => {
	return (
		<div className="flex flex-col md:flex-row p-8 gap-8">
			<div className="min-w-[340px] text-right">Section title</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{navItems.map((item, index) => (
					<Card
						key={index}
						title={item.title}
						desc={item.desc}
						color={item.color}
					/>
				))}
			</div>
		</div>
	);
};

export default NavCardsSection;

type CardProps = {
	title: string;
	desc: string;
	color: string;
};

const Card = ({ title, desc, color }: CardProps) => {
	return (
		<div
			style={{ backgroundColor: color }}
			className="flex flex-col gap-2 min-h-32 bg-blue-200 p-2 rounded text-black">
			<div className="flex justify-between">
				<h1 className="text-xl font-bold">{title}</h1>
				<img src="/assets/twitter.png" className="w-10" />
			</div>

			<p className="card-description">{desc}</p>
		</div>
	);
};
