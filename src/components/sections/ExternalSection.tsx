import Link from "next/link";

const ExternalSection = () => {
	return (
		<div className="flex flex-col md:flex-row p-8 gap-8">
			<div className="min-w-[340px] text-right"></div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				<ExternalCard
					title="Failab"
					desc="Portfolio site for all my production apps"
					color="red"
					icon="/assets/failab_angled.svg"
					link="https://failab.eu"
				/>
				<ExternalCard
					title="GNS"
					desc="Cofounded the most popular Web3 name service on Gnosis blockchain"
					color="blue"
					icon="/assets/gns_logo_green_512.png"
					link="https://app.gns.exchange"
				/>
			</div>
		</div>
	);
};

type CardProps = {
	title: string;
	desc: string;
	color: string;
	icon: string;
	link: string;
};

const ExternalCard = ({ title, desc, color, icon, link }: CardProps) => {
	return (
		<div className="flex flex-col gap-2 min-h-32 bg-black hover:bg-[#252525] p-2 rounded border border-white/[0.1] ">
			<Link href={link} target="_blank">
				<div className="flex justify-between">
					<h1 className="text-xl p-2">{title}</h1>
					<img src={icon} className="w-12" />
				</div>

				<p className="text-neutral-400 p-2">{desc}</p>
			</Link>
		</div>
	);
};

export default ExternalSection;
