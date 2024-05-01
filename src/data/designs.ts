export type DesignTool = "Shapr3D" | "Blender" | "Affinity Designer";

export type Design = {
	id: number;
	title: string;
	tools: Array<DesignTool>;
	link: string;
};

export const designs: Array<Design> = [
	{
		id: 1,
		title: "KeyTrails logo",
		tools: ["Shapr3D"],
		link: "https://raw.githubusercontent.com/FaisalBinAhmed/designs/main/icons/keytrails.png"
	},
	{
		id: 2,
		title: "Scaler logo",
		tools: ["Blender", "Affinity Designer"],
		link: "https://raw.githubusercontent.com/FaisalBinAhmed/designs/main/icons/scaler.png"
	},
	{
		id: 3,
		title: "Cliptonite logo",
		tools: ["Shapr3D"],
		link: "https://raw.githubusercontent.com/FaisalBinAhmed/designs/main/icons/cliptonite.png"
	},
	{
		id: 4,
		title: "MetroAppSauce logo",
		tools: ["Blender", "Affinity Designer"],
		link: "https://raw.githubusercontent.com/FaisalBinAhmed/designs/main/icons/metroappsauce.svg"
	},
	{
		id: 5,
		title: "List Calculation logo",
		tools: ["Affinity Designer"],
		link: "https://raw.githubusercontent.com/FaisalBinAhmed/designs/main/icons/List%20Calculation.svg"
	},
	{
		id: 6,
		title: "Trilby logo",
		tools: ["Affinity Designer"],
		link: "https://raw.githubusercontent.com/FaisalBinAhmed/designs/main/icons/trilby.png"
	}
];
