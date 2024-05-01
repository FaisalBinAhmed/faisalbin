import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
	return (
		<div className="flex w-full flex-col md:flex-row items-center gap-8 p-4 md:p-8">
			{/* <CreditCard /> */}
			<div className="p-2">
				<p className="text-xl">Hello, there! 👋</p>
				<p className="py-4">Welcome to my personal website.</p>
				<p>
					I've recently finished my Master's of Informatics at Technical
					University of Munich. I'm working full-time as a software engineer at
					Brainlab. If you want to know more about me, head over to my{" "}
					<Link className=" text-blue-400" href="/about">
						About Me
					</Link>{" "}
					page.
				</p>
				<p className="py-4">You can follow me on the web:</p>
				<div className="flex flex-row gap-4 flex-wrap">
					<Link href="https://twitter.com/FaisalBAhmed" target="_blank">
						<Image
							className="w-10 grayscale hover:grayscale-0"
							src="/assets/twitter.png"
							alt="Twitter"
							width={128}
							height={128}
						/>
					</Link>
					<Link href="https://github.com/FaisalBinAhmed" target="_blank">
						<Image
							className="w-10 grayscale hover:grayscale-0"
							src="/assets/github.png"
							alt="Github"
							width={128}
							height={128}
						/>
					</Link>
					<Link href="https://linkedin.com/in/faisalbin/" target="_blank">
						<Image
							className="w-10 grayscale hover:grayscale-0"
							src="/assets/linkedin.png"
							alt="LinkedIn"
							width={128}
							height={128}
						/>
					</Link>
					<Link href="https://medium.com/@Faisalbin" target="_blank">
						<Image
							className="w-10 grayscale hover:grayscale-0"
							src="/assets/medium.png"
							alt="Medium"
							width={128}
							height={128}
						/>
					</Link>
					<Link
						href="https://scholar.google.com/citations?user=4pRyR60AAAAJ&hl=en"
						target="_blank">
						<Image
							className="w-10 grayscale hover:grayscale-0"
							src="/assets/scholar.svg"
							alt="Scholar"
							width={128}
							height={128}
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
