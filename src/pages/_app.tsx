import { Analytics } from "@vercel/analytics/react";
import Sidebar from "@/components/Sidebar";
import { VercelProvider } from "@/contexts/VercelContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { JetBrains_Mono } from "next/font/google";
import Head from "next/head";

const jbm = JetBrains_Mono({
	subsets: ["latin"]
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main
			className={`flex h-screen flex-col md:flex-row items-center ${jbm.className}`}>
			<Head>
				<title>Faisal Bin Ahmed</title>
			</Head>
			<Analytics />
			<VercelProvider>
				<Sidebar />
				<Component {...pageProps} />
			</VercelProvider>
		</main>
	);
}
