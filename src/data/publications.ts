export type Publication = {
	id: number;
	title: string;
	abstract: string;
	publisher: string;
	year: string;
	type: string;
	link: string;
};

export const publications: Array<Publication> = [
	{
		id: 1,
		title:
			"The Issues and the Possible Solutions for Implementing Self-Driving Cars in Bangladesh",
		type: "Conference",
		abstract:
			"The main purpose of this study is to find the issues and suggest possible solutions regarding the implementation of Self-driving cars on Bangladeshi roads. A Self-driving car is fairly in its infancy today, but once implemented this can revolutionize our traffic management and transport system. This paper addresses some of the hurdles the technology might face in the country and offers a few measures that can be taken to overcome the downsides. ",
		publisher: "IEEE",
		year: "2018",
		link: "https://ieeexplore.ieee.org/document/8288950"
	},
	{
		id: 2,
		title:
			"Website Design and Trust Elements: A/B Testing on a Start-up's Website Authors",
		type: "Conference",
		abstract:
			"Start-ups are young companies that are hardly known, especially during their early stages, by the relevant stakeholders. A start-up's website is, therefore, often the first point of contact for potential customers, investors, or partners. Such a website usually explains the new product or service and presents the founding team with its competencies. The user's perception of the website and its design can be crucial in determining whether the user is interested in getting in touch with the start-up or even considering the purchase of the respective product or service. User’s trust in the website and its operator is essential for this. The so-called trust elements, such as logos, testimonials, or seals, are intended to create trust on websites. So far, the influence of these elements on user behaviour has hardly been empirically proven in a real-life context. Therefore, we have applied the method of A/B testing to the website of a fictive start-up. Trust elements were placed on one variant of the website (A), whereas on the other variant, there were none (B). The experiment shows that the duration of the user sessions does not differ between the two variants. However, more requests were made on the website variant with trust elements.",
		publisher: "Entrenova",
		year: "2022",
		link: "https://hrcak.srce.hr/ojs/index.php/entrenova/article/view/20246"
	},
	{
		id: 3,
		title: "Awareness to Deepfake: A resistance mechanism to Deepfake",
		type: "Journal",
		abstract:
			"The goal of this study is to find whether exposure to Deepfake videos makes people better at detecting Deepfake videos and whether it is a better strategy against fighting Deepfake. For this study a group of people from Bangladesh has volunteered. This group were exposed to a number of Deepfake videos and asked subsequent questions to verify improvement on their level of awareness and detection in context of Deepfake videos. This study has been performed in two phases, where second phase was performed to validate any generalization. The fake videos are tailored for the specific audience and where suited, are created from scratch. Finally, the results are analyzed, and the study’s goals are inferred from the obtained data.",
		publisher: "IEEE",
		year: "2021",
		link: "https://ieeexplore.ieee.org/abstract/document/9493549"
	}
];
