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
					<Link className=" text-emerald-500" href="/about">
						About Me
					</Link>{" "}
					page.
				</p>
				<p className="py-4">Don't forget to follow me on social sites:</p>
				<div className="flex flex-row gap-4 flex-wrap">
					<a href="https://twitter.com/FaisalBAhmed" target="_blank">
						<img
							className="w-10 grayscale hover:grayscale-0"
							src="/assets/twitter.png"
							title="Twitter"
						/>
					</a>
					<a href="https://medium.com/@Faisalbin" target="_blank">
						<img
							className="w-10 grayscale hover:grayscale-0"
							src="/assets/medium.png"
							title="Medium"
						/>
					</a>
					<a href="https://github.com/FaisalBinAhmed" target="_blank">
						<img
							className="w-10 grayscale hover:grayscale-0"
							src="/assets/github.png"
							title="Github"
						/>
					</a>
					<a href="https://linkedin.com/in/faisalbin/" target="_blank">
						<img
							className="w-10 grayscale hover:grayscale-0"
							src="/assets/linkedin.png"
							title="LinkedIn"
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
