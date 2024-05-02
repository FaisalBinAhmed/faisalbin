import { VercelContext } from "@/contexts/VercelContext";
import { getApproximateAge } from "@/helpers";
import Link from "next/link";
import { useContext } from "react";

const About = () => {
	return (
		<div className="flex flex-col h-screen flex-1 md:overflow-scroll p-4 md:p-8 gap-4">
			<p className="text-xl p-2">About 👋</p>
			<p className="p-2">
				I'm a {getApproximateAge()} years old software engineer based in Munich.
				I was born and raised in Dhaka, Bangladesh.
			</p>
			<p className="p-2">
				I studied Informatics Master at{" "}
				<Link className="text-blue-400" href="https://tum.de" target="_blank">
					Technical University of Munich{" "}
				</Link>
				from 2018 to 2021. My major subject areas were Software Engineering and
				Distributed Systems. I did my Bachelor's in Computer Science &
				Engineering at{" "}
				<Link href="www.aiub.edu" className="text-blue-400" target="_blank">
					American International University - Bangladesh
				</Link>
				. Since my childhood, I'd dreamt to study Computer Science - and I was
				fortunate enough to achieve this dream.
			</p>
			<p className="p-2">
				I am currently working as a full stack software engineer at{" "}
				<Link href="https://tacto.ai" className="text-blue-400" target="_blank">
					Tacto
				</Link>
				. I am more focused on our frontend which is built with React/NextJS.
				The backend stack is made of Python/FastAPI.
			</p>
			<p className="p-2">
				I previosly worked at{" "}
				<Link
					href="https://brainlab.com"
					className="text-blue-400"
					target="_blank">
					Brainlab
				</Link>{" "}
				as a Software Engineer. I was part of the team that developed Brainlab's
				React component library used in all Brainlab products.
			</p>
			<p className="p-2">
				Before that I worked at{" "}
				<Link
					href="https://www.robosoftin.com/"
					className="text-blue-400"
					target="_blank">
					Joyn
				</Link>{" "}
				as a Software Engineer. I belonged to the OTT team responsible for the
				Joyn app on Smart TVs.
			</p>
			<p className="p-2">
				When I'm not working or studying, I prefer to read books or write
				articles. I started writing in 2013 as a freelance tech writer. Soon I
				along with an Indian friend started a Windows application review website
				called 'MetroAppSauce' - focusing mainly on modern Windows Phone and
				WinRT applications. Much Like Windows Phone, our beloved project had to
				face its demise.
				<br />
				In 2017, I continued my writing career with a technology publication
				called Neowin. You can find all my written articles{" "}
				<Link
					href="https://www.neowin.net/news/poster/faisal-ahmed"
					className="text-blue-400"
					target="_blank">
					here
				</Link>
				.
				<br />
				And if you want to read my current articles, head over to my{" "}
				<Link
					href="https://medium.com/@faisalbin"
					className="text-blue-400"
					target="_blank">
					Medium
				</Link>{" "}
				blog.
			</p>
			<p className="p-2">
				I love reading - especially science related non-fiction books. Some of
				my favorites are: The Code Book by Simon Singh, The Gene by Siddhartha
				Mukherjee, Sapiens by Yuval Noah Harari, and 1984 by George Orwell. More
				information can be found on my
				<Link
					href="https://www.goodreads.com/faisalbin"
					className="text-blue-400"
					target="_blank">
					{" "}
					goodreads{" "}
				</Link>
				profile.
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
