import { Publication, publications } from "@/data/publications";
import Link from "next/link";

const Publications = () => {
	return (
		<div className="flex flex-col h-screen flex-1 md:overflow-scroll p-4 md:p-8 gap-4">
			<div className="text-2xl font-bold">Publications</div>
			<div className="text-neutral-400">
				A list of academic papers that I have written and published. I also
				write technical articles about Rust, TypeScript, and Swift on{" "}
				<Link
					target="_blank"
					className="text-blue-400"
					href="https://medium.com/@faisalbin">
					{" "}
					Medium{". "}
				</Link>
				I will be glad if you check them out.
			</div>

			{publications.map((paper) => (
				<PublicationCard key={paper.id} paper={paper} />
			))}
		</div>
	);
};

export default Publications;

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
