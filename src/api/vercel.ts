export type Deployment = {
	created: number;
	ready: number;
};
// https://vercel.com/docs/rest-api/endpoints/deployments#list-deployments

type Response = {
	deployments: Array<Deployment>;
};

export async function fetchDeploymentInfo() {
	try {
		// const token = process.env.VERCEL_TOKEN;
		// const projectId = process.env.PROJECT_ID;
		// const response = await fetch(
		// 	`https://api.vercel.com/v5/now/deployments?projectId=${projectId}&limit=1&state=READY`,
		// 	{
		// 		headers: {
		// 			Authorization: `Bearer ${token}`
		// 		}
		// 	}
		// );
		// const data = (await response.json()) as Response;
		// if (data?.deployments?.length > 0) {
		// 	return data.deployments[0];
		// }
		return null;
	} catch (error) {
		console.error("Error fetching deployment info:", error);
		return null;
	}
}
