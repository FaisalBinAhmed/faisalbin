import { Project, Tag } from "@/data/projects";

type TagsProps = {
	tags: Project["tags"];
};

const getTagColor = (tag: Tag) => {
	switch (tag) {
		case "Chrome":
			return "text-emerald-300 bg-emerald-900";
		case "Open Source":
			return "bg-neutral-800 text-neutral-400";
		case "Rust":
			return "text-orange-400 bg-orange-900";
		case "TypeScript":
			return "text-blue-300 bg-blue-800";
		case "React":
			return "text-blue-400 bg-blue-900";
		case "React Native":
			return "text-blue-200 bg-blue-900";
		case "Swift":
			return "text-orange-200 bg-orange-800";
		case "SwiftUI":
			return "text-indigo-300 bg-indigo-900";
		default:
			return "bg-neutral-400";
	}
};

const Tags = ({ tags }: TagsProps) => {
	return (
		<div className="flex flex-row flex-wrap items-center gap-2 mr-4">
			{tags.map((tag) => (
				<div
					key={tag}
					className={` ${getTagColor(tag)} px-2 rounded py-1 text-sm`}>
					{tag}
				</div>
			))}
		</div>
	);
};

export default Tags;
