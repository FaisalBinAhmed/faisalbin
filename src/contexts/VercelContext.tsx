import { Deployment, fetchDeploymentInfo } from "@/api/vercel";
import React, { createContext, useEffect, useState } from "react";

interface VercelContextProps {
	deploymentInfo?: Deployment;
}

export const VercelContext = createContext<VercelContextProps>({
	deploymentInfo: undefined
});

export const VercelProvider: React.FC<{ children: React.ReactNode }> = ({
	children
}) => {
	const [deploymentInfo, setDeploymentInfo] = useState<Deployment>();

	useEffect(() => {
		async function fetchAndSetLastDeployedTime() {
			const deploymentInfo = await fetchDeploymentInfo();
			deploymentInfo && setDeploymentInfo(deploymentInfo);
		}

		fetchAndSetLastDeployedTime();
	}, []);

	return (
		<VercelContext.Provider value={{ deploymentInfo }}>
			{children}
		</VercelContext.Provider>
	);
};
