import Link from "next/link";
import { useState } from "react";

const Contact = () => {
	const [emailVisible, setEmailVisible] = useState(false);

	return (
		<div className="flex flex-col h-screen flex-1 md:overflow-scroll p-4 md:p-8 gap-4">
			<p className="text-xl p-2">Contact</p>
			<p className="p-2">
				You can reach me at{" "}
				{!emailVisible && (
					<button
						onClick={() => setEmailVisible(!emailVisible)}
						className="text-blue-400">
						{"Show Email"}
					</button>
				)}
				{emailVisible && (
					<Link href="mailto: dev@faisalbin.com"> dev@faisalbin.com </Link>
				)}
			</p>
			<p className="p-2">
				Feel free to DM me on Twitter @FaisalBAhmed or LinkedIn @FaisalBin.
			</p>
		</div>
	);
};

export default Contact;
