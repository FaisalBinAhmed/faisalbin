import Image from "next/image";
import Link from "next/link";

type ExternalCardProps = {
	title: string;
	desc: string;
	icon: string;
	link: string;
};

const ExternalCard = ({ title, desc, icon, link }: ExternalCardProps) => {
	return (
		<Link
			href={link}
			target="_blank"
			className="flex flex-col gap-2 min-h-32 bg-black hover:bg-[#252525] p-2 rounded-xl border border-white/[0.1] ">
			<div className="flex justify-between items-center">
				<h1 className="text-xl p-2">{title}</h1>
				<Image
					src={icon}
					className="w-12"
					alt={title}
					width={128}
					height={128}
				/>
			</div>

			<p className="text-neutral-400 p-2">{desc}</p>
		</Link>
	);
};

export default ExternalCard;
