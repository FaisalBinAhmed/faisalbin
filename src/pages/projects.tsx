import Tags from "@/components/Tags";
import { Project, projects } from "@/data/projects";
import Link from "next/link";

const Projects = () => {
	return (
		<div className="flex flex-col h-screen flex-1 md:overflow-scroll p-4 md:p-8 gap-4">
			<div className="text-2xl font-bold">Projects</div>

			{projects.map((project) => (
				<ProjectCard key={project.id} project={project} />
			))}
		</div>
	);
};

export default Projects;

const ProjectCard = ({ project }: { project: Project }) => {
	return (
		<div className="flex flex-col bg-black hover:bg-[#252525] text-white rounded-xl border border-white/[0.1] p-4">
			<div className="flex flex-row justify-between gap-2 mb-2">
				<div className="flex flex-col gap-2">
					<div className="text-xl">{project.title}</div>
					<div className="text-neutral-400">{project.desc}</div>
				</div>
				{project.logo && (
					<img src={project.logo || ""} className="w-20 h-20 ml-4" />
				)}
			</div>
			<div className="flex flex-row justify-between items-center mt-2">
				<Tags tags={project.tags} />
				<Link
					target="_blank"
					className="flex-1 text-right self-end text-nowrap"
					href={project.link}>
					<div className="text-neutral-400">Learn More</div>
				</Link>
			</div>
		</div>
	);
};
