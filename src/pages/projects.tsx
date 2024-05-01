import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
	return (
		<div className="flex flex-col h-screen flex-1 md:overflow-scroll p-4 md:p-8 gap-4">
			<div className="text-2xl font-bold">Projects</div>
			<div className="text-neutral-400">
				A list of projects that I have worked on. This includes open source
				projects, and production apps I have published. As of April 2024, I have
				30000+ users across all my apps.
			</div>

			{projects.map((project) => (
				<ProjectCard key={project.id} project={project} />
			))}
		</div>
	);
};

export default Projects;
