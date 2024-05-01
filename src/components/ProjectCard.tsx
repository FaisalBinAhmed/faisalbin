import { Project } from "@/data/projects";
import Link from "next/link";
import Tags from "@/components/Tags";

const ProjectCard = ({ project }: { project: Project }) => {
	return (
		<div className="flex flex-col bg-black hover:bg-[#252525] text-white rounded-xl border border-white/[0.1] p-4">
			<div className="flex flex-col-reverse md:flex-row justify-between gap-4 mb-2">
				<div className="flex flex-col gap-2">
					<div className="text-xl">{project.title}</div>
					<div className="text-neutral-400">{project.desc}</div>
				</div>
				{project.logo && <img src={project.logo || ""} className="w-20 h-20" />}
			</div>
			<div className="flex flex-row justify-between items-center mt-2">
				<Tags tags={project.tags} />
				<Link
					target="_blank"
					className="flex-1 text-right self-end text-nowrap"
					href={project.link}>
					<div className="text-neutral-400 ">Learn More</div>
				</Link>
			</div>
		</div>
	);
};

export default ProjectCard;
