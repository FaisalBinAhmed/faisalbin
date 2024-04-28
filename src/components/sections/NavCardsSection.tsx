import navItems from "@/data/navItems";
import Link from "next/link";

const NavCardsSection = () => {
	return (
		<div className="flex flex-col md:flex-row p-8 gap-8">
			<div className="min-w-[340px] text-right"></div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{navItems.map((item, index) => (
					<Card
						key={index}
						title={item.title}
						desc={item.desc}
						color={item.color}
						icon={item.icon}
						link={item.route}
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
	icon: string;
	link: string;
};

const Card = ({ title, desc, color, icon, link }: CardProps) => {
	return (
		<div
			// style={{ outlineColor: color }}
			className="flex flex-col gap-2 p-2 min-h-32 bg-black hover:bg-[#252525] text-white rounded border border-white/[0.1]">
			<Link href={link}>
				<div className="flex justify-between">
					<h1 className="text-xl p-2">{title}</h1>
					<img src={icon} className="w-10" />
				</div>

				<p className="text-neutral-400 p-2">{desc}</p>
			</Link>
		</div>
	);
};
