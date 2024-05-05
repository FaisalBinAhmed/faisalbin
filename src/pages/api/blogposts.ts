const { XMLParser } = require("fast-xml-parser");
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const MEDIUM_FEED_URL = "https://medium.com/feed/@faisalbin";

// alternative to parsing the feed myself: https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40faisalbin

type Response = Channel | { error: string };

export interface Root {
	"?xml": string;
	rss: Rss;
}

export interface Rss {
	channel: Channel;
}

export interface Channel {
	title: string;
	description: string;
	link: string;
	image: Image;
	generator: string;
	lastBuildDate: string;
	"atom:link": string[];
	webMaster: string;
	item: Item[];
}

export interface Image {
	url: string;
	title: string;
	link: string;
}

export interface Item {
	title: string;
	link: string;
	guid: string;
	category: string[];
	"dc:creator": string;
	pubDate: string;
	"atom:updated": string;
	"content:encoded": string;
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Response>
) {
	try {
		let json = await fetchMediumFeed();
		res.status(200).json(json);
	} catch (error) {
		res.status(500).json({ error: "Error fetching blog post list " + error });
	}
}

async function fetchMediumFeed() {
	try {
		const response = await fetch(MEDIUM_FEED_URL);

		const xmlText = await response.text();

		const parser = new XMLParser();
		let jObj: Root = parser.parse(xmlText);

		return jObj.rss.channel;
	} catch (error) {
		console.error("Error fetching medium feed:", error);
		throw error;
	}
}
