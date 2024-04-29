import { JetBrains_Mono } from "next/font/google";
import HeroSection from "@/components/sections/HeroSection";
import NavCardsSection from "@/components/sections/NavCardsSection";
import ExternalSection from "@/components/sections/ExternalSection";
import Sidebar from "@/components/Sidebar";

const jbm = JetBrains_Mono({
	subsets: ["latin"]
});

export default function Home() {
	return (
		<main
			className={`flex h-screen flex-col md:flex-row items-center ${jbm.className}`}>
			<Sidebar />
			<div className="flex h-screen md:overflow-scroll flex-col">
				<HeroSection />
				<ExternalSection />
				<NavCardsSection />
			</div>
		</main>
	);
}
