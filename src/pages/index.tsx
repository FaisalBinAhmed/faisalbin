import { JetBrains_Mono } from "next/font/google";
import HeroSection from "@/components/HeroSection";
import NavCardsSection from "@/components/NavCardsSection";
import LinksSection from "@/components/LinksSection";
import ExternalSection from "@/components/ExternalSection";

const jbm = JetBrains_Mono({
	subsets: ["latin"]
});

export default function Home() {
	return (
		<main
			className={`flex min-h-screen flex-col items-center ${jbm.className}`}>
			<HeroSection />
			<ExternalSection />
			<NavCardsSection />
			{/* <LinksSection /> */}
		</main>
	);
}
