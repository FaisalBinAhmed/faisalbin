import quotes from "@/data/quotes";

const Footer = () => {
	const date = new Date().getFullYear();
	const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const deployTime = Number(process.env.LAST_DEPLOYED_TIME);
		console.log(process.env.LAST_DEPLOYED_TIME);
		const deployDate = new Date(deployTime * 1000);
	return (
		<div className="flex flex-col m-4 md:m-8 bg-[#252525]/[0.3] rounded-xl border border-white/[0.1]">
			<div className="text-neutral-400 p-4">{randomQuote}</div>
			<p className="text-neutral-400 p-4 text-xs">
				© {date} | deployed on {deployDate.getDate()}
			</p>
		</div>
	);
};

export default Footer;
