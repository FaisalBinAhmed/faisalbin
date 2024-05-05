import { Item } from "@/pages/api/blogposts";
import Link from "next/link";

const BlogCard = ({ item }: { item: Item }) => {
	return (
		<div className="flex flex-col bg-black hover:bg-[#252525] text-white rounded-xl border border-white/[0.1] p-4">
			<Link href={item.link} target="_blank">
				<div className="text-xl">{item.title}</div>
				<div className="text-neutral-400 text-sm mt-2 mb-4">
					{new Date(item.pubDate).toLocaleDateString("en-DE")}
				</div>
				<div className="flex gap-2 flex-wrap mt-2">
					{item.category.map((category) => (
						<span
							key={category}
							className="bg-neutral-800 text-neutral-400 text-xs rounded px-2 py-1 text-nowrap">
							{category}
						</span>
					))}
				</div>
			</Link>
		</div>
	);
};

export default BlogCard;
