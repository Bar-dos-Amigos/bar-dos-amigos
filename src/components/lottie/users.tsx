import Lottie from "lottie-react";
import animationData from "./Users.json";

export function Users() {
	return <Lottie animationData={animationData} className="w-44 h-44" />;
}
