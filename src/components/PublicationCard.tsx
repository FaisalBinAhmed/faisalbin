import { Publication } from "@/data/publications";
import Link from "next/link";

const PublicationCard = ({ paper }: { paper: Publication }) => {
	return (
		<div className="flex flex-col bg-black hover:bg-[#252525] text-white rounded-xl border border-white/[0.1] p-4">
			<div className="flex flex-col gap-2">
				<div className="text-xl">{paper.title}</div>
				<div className="text-neutral-400">{paper.abstract}</div>
			</div>

			<div className="flex flex-col md:flex-row justify-between gap-2 mt-4">
				<div className="text-neutral-400 bg-neutral-800 py-1 px-2 rounded font-bold">
					{paper.type} / {paper.publisher} / {paper.year}
				</div>

				<Link
					target="_blank"
					className="flex-1 text-right self-end text-nowrap mt-2"
					href={paper.link}>
					<div className="text-neutral-400">Learn More</div>
				</Link>
			</div>
		</div>
	);
};

export default PublicationCard;
