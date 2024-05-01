import PublicationCard from "@/components/PublicationCard";
import { publications } from "@/data/publications";
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
