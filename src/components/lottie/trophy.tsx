import Lottie from "lottie-react";
import animationData from "./Trophy.json";

export function Trophy() {
	return (
		<Lottie animationData={animationData} className="w-36 h-36" loop={false} />
	);
}
