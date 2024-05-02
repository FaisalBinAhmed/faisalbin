import Link from "next/link";

const Resume = () => {
	return (
		<div className="flex flex-col h-screen flex-1 md:overflow-scroll p-4 md:p-8 gap-4">
			<div className="text-2xl font-bold p-2">Resume</div>
			<div className="text-neutral-400 p-2">
				Please contact me on{" "}
				<Link
					target="_blank"
					className="text-blue-400"
					href="https://linkedin.com/in/faisalbin">
					LinkedIn
				</Link>{" "}
				for my current resume.
			</div>
		</div>
	);
};

export default Resume;
