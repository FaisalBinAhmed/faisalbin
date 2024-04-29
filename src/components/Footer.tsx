import { fetchDeploymentInfo } from "@/api/vercel";
import quotes from "@/data/quotes";
import { useEffect, useState } from "react";

const Footer = () => {
	const date = new Date().getFullYear();

	const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

	const [lastDeployedTime, setLastDeployedTime] = useState<number>();

	useEffect(() => {
		async function fetchAndSetLastDeployedTime() {
			const deploymentInfo = await fetchDeploymentInfo();
			deploymentInfo && setLastDeployedTime(deploymentInfo.created);
		}
		fetchAndSetLastDeployedTime();
	}, []);

	return (
		<div className="flex flex-col m-4 md:m-8 bg-[#252525]/[0.3] rounded-xl border border-white/[0.1]">
			<div className="text-neutral-400 p-4">{randomQuote}</div>
			<p className="text-neutral-400 p-4 text-xs">
				© {date}
				{lastDeployedTime && (
					<> | Deployed on {new Date(lastDeployedTime).toLocaleDateString()}</>
				)}
			</p>
		</div>
	);
};

export default Footer;
