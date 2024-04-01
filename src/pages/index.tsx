import { JetBrains_Mono } from "next/font/google";
import HeroSection from "@/components/HeroSection";

const jbm = JetBrains_Mono({
	subsets: ["latin"]
});

export default function Home() {
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between ${jbm.className}`}>
			<HeroSection />
		</main>
	);
}
