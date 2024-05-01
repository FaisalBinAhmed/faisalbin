import { Design } from "@/data/designs";
import Image from "next/image";

const DesignTools = ({ tools }: { tools: Design["tools"] }) => {
	return (
		<div className="flex gap-2 flex-wrap mt-2">
			{tools.map((tool) => (
				<div
					key={tool}
					className="bg-neutral-800 text-neutral-400 text-xs rounded px-2 py-1 text-nowrap">
					{tool}
				</div>
			))}
		</div>
	);
};

const DesignCard = ({ design }: { design: Design }) => {
	return (
		<div className="flex flex-col items-center gap-4 bg-black hover:bg-[#252525] rounded-xl border border-white/[0.1] p-4">
			<Image src={design.link} alt={design.title} width={256} height={256} />
			<div className="flex flex-col self-start">
				<div className="">{design.title}</div>
				<DesignTools tools={design.tools} />
			</div>
		</div>
	);
};

export default DesignCard;
