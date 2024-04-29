import { VercelContext } from "@/contexts/VercelContext";
import quotes from "@/data/quotes";
import { useContext, useEffect, useState } from "react";

const date = new Date().getFullYear();
const Footer = () => {
	const { deploymentInfo } = useContext(VercelContext);
	const [quote, setQuote] = useState<string>(quotes[0]);

	function getRandomQuote() {
		const randomIndex = Math.floor(Math.random() * quotes.length);
		setQuote(quotes[randomIndex]); // avoid hydration mismatch
	}

	useEffect(() => {
		getRandomQuote();
	}, []);

	return (
		<div className="flex flex-col m-4 md:m-8 bg-[#252525]/[0.3] rounded-xl border border-white/[0.1]">
			<div className="text-neutral-400 p-4">{quote}</div>
			<p className="text-neutral-400 p-4 text-xs">
				© {date}
				{deploymentInfo && (
					<>
						{" "}
						| Deployed on{" "}
						{new Date(deploymentInfo.created).toLocaleDateString()}
					</>
				)}
			</p>
		</div>
	);
};

export default Footer;
