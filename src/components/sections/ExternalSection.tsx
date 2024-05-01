import ExternalCard from "@/components/ExternalCard";

const ExternalSection = () => {
	return (
		<div className="flex flex-col md:flex-row p-4 md:p-8 gap-8">
			{/* <div className="min-w-[340px] text-right"></div> */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				<ExternalCard
					title="Failab"
					desc="Portfolio site for all my production apps"
					icon="/assets/failab_angled.svg"
					link="https://failab.eu"
				/>
				<ExternalCard
					title="GNS"
					desc="Cofounded the most popular Web3 name service on Gnosis blockchain"
					icon="/assets/gns_logo_green_512.png"
					link="https://app.gns.exchange"
				/>
			</div>
		</div>
	);
};

export default ExternalSection;
