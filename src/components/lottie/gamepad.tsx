import Lottie from "lottie-react";
import animationData from "./Game.json";

export function Gamepad() {
	return <Lottie animationData={animationData} className="w-36 h-36" />;
}
