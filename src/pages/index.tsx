import { JetBrains_Mono } from "next/font/google";
import HeroSection from "@/components/sections/HeroSection";
import NavCardsSection from "@/components/sections/NavCardsSection";
import ExternalSection from "@/components/sections/ExternalSection";

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
		</main>
	);
}
