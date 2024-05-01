import DesignCard from "@/components/DesignCard";
import { designs } from "@/data/designs";
import Link from "next/link";

const Designs = () => {
	return (
		<div className="flex flex-col h-screen flex-1 md:overflow-scroll p-4 md:p-8 gap-4">
			<div className="text-2xl font-bold">Designs</div>
			<div className="text-neutral-400">
				I like to design. All my app UIs and the logos are designed by me. I use
				Affinity Designer for 2D illustration. Blender, Shapr3D, and Fusion 360
				for 3D modeling. I have open sourced many of my designs on my{" "}
				<Link
					href="https://github.com/FaisalBinAhmed/designs"
					target="_blank"
					className="text-blue-400">
					Github
				</Link>
				.
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
				{designs.map((design) => (
					<DesignCard key={design.id} design={design} />
				))}
			</div>
		</div>
	);
};

export default Designs;
