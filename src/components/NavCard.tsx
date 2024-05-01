import Image from "next/image";
import Link from "next/link";

type NavCardProps = {
	title: string;
	desc: string;
	icon: string;
	link: string;
};

const NavCard = ({ title, desc, icon, link }: NavCardProps) => {
	return (
		<div className="flex flex-col gap-2 p-2 min-h-32 bg-black hover:bg-[#252525] text-white rounded-xl border border-white/[0.1]">
			<Link href={link}>
				<div className="flex justify-between items-center">
					<h1 className="text-xl p-2">{title}</h1>
					<Image
						src={icon}
						className="w-10"
						alt={title}
						width={128}
						height={128}
					/>
				</div>

				<p className="text-neutral-400 p-2">{desc}</p>
			</Link>
		</div>
	);
};

export default NavCard;
