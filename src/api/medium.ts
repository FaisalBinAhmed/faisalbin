const MEDIUM_FEED_URL = "https://medium.com/feed/@faisalbin";

export type Post = {
	title: string;
	link: string;
	thumbnail: string;
};

// export const getMediumPosts = async (): Promise<Array<Post>> => {
//     const feed = await parser.parseURL(MEDIUM_FEED_URL);
//     return feed.items.map((item) => ({
//         title: item.title,
//         link: item.link,
//         thumbnail: item.thumbnail
//     }));
// };
