import { useEffect, useState } from "react";
import { Channel } from "@/pages/api/blogposts";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";

const Blogs = () => {
	const [blogFeed, setBlogFeed] = useState<Channel>();
    const [message, setMessage] = useState<string>("Loading blog posts...");

		useEffect(() => {
			fetchBlogFeed();
		}, []);

		async function fetchBlogFeed() {
			try {
				const response = await fetch("/api/blogposts");
				const json = await response.json();
				setBlogFeed(json);
			} catch (error) {
				setMessage("Error fetching blog posts. This is embarrassing :D ");
				console.error("Error fetching blog posts", error);
			}
		}

		return (
			<div className="flex flex-col h-screen flex-1 md:overflow-scroll p-4 md:p-8 gap-4">
				<p className="text-xl p-2">Blogs</p>
				<p className="p-2">
					A feed of my blog posts. You can also access them directly on{" "}
					<Link
						href="https://medium.com/@faisalbin"
						className="text-blue-400"
						target="_blank">
						Medium
					</Link>
				</p>
				{blogFeed ? (
					blogFeed.item.map((item) => <BlogCard key={item.guid} item={item} />)
				) : (
					<p className="p-2">{message}</p>
				)}
			</div>
		);
};

export default Blogs;
