import { VercelContext } from "@/contexts/VercelContext";
import Link from "next/link";
import { useContext } from "react";

const About = () => {
	return (
		<div className="flex flex-col h-screen flex-1 md:overflow-scroll p-4 md:p-8 gap-4">
			<p className="text-xl p-2">About 👋</p>
			<p className="p-2">
				I've recently finished my Master's of Informatics at Technical
				University of Munich. I'm working full-time as a software engineer at
				Brainlab. If you want to know more about me, head over to my page.
			</p>
			<TechnicalDetails />
		</div>
	);
};

export default About;

const TimeLine = () => {
	return (
		<div className="flex flex-col gap-4 bg-black text-green-500 rounded-xl border border-green-100/[0.1] p-4">
			<p className="text-xl">Timeline</p>
			<p>2013 - Started my Bachelor's in Computer Science at University of</p>
		</div>
	);
};

const TechnicalDetails = () => {
	const { deploymentInfo } = useContext(VercelContext);

	return (
		<div className="flex flex-col gap-4 bg-black text-green-600 rounded-xl border border-green-100/[0.1] p-4">
			<p className="text-xl">Technical Details</p>
			<p>
				Framework: Next.js
				<br />
				Language: TypeScript
				<br />
				Styling: Tailwind CSS
				<br />
				Hosting: Vercel
				<br />
				Last Deployed:{" "}
				{deploymentInfo &&
					new Date(deploymentInfo.created).toLocaleDateString("en-DE")}
				<br />
				Source Code:{" "}
				<Link href="" className="underline" target="_blank">
					Github
				</Link>
				<br />
				You can access the previos version of this website at{" "}
				<Link className="underline" href="https://faisalbinahmed.github.io">
					Github Pages
				</Link>
			</p>
		</div>
	);
};
