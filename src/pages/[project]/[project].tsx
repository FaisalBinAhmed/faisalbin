import { useRouter } from "next/router";

const ProjectDetails = () => {
	const router = useRouter();
	const { project } = router.query;

	return (
		<div>
			<h1>Project Details</h1>
			<p>Project: {project}</p>
		</div>
	);
};

export default ProjectDetails;
