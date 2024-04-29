import HeroSection from "@/components/sections/HeroSection";
import NavCardsSection from "@/components/sections/NavCardsSection";
import ExternalSection from "@/components/sections/ExternalSection";

export default function Home() {
	return (
		<>
			<div className="flex h-screen md:overflow-scroll flex-col">
				<HeroSection />
				<ExternalSection />
				<NavCardsSection />
			</div>
		</>
	);
}
