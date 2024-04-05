import { ExtLink, extLinks } from "@/data/extLinks";
const LinksSection = () => {
	return (
		<div className="flex flex-col md:flex-row p-8 gap-8">
			<div className=" text-right">External Links</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{extLinks.map((item, index) => (
					<LinkCard key={index} {...item} />
				))}
			</div>
		</div>
	);
};

export default LinksSection;

const LinkCard = ({ name, link, icon, color }: ExtLink) => {
	return (
		<div
			// style={{ backgroundColor: color }}
			className=" aspect-video rounded-xl backdrop-blur-sm bg-white/50">
			<div className="w-16 h-16">
				<img src="/assets/twitter.png" className="w-10" />
			</div>
			<h1 className="text-xl font-bold flex-1">{name}</h1>
		</div>
	);
};
