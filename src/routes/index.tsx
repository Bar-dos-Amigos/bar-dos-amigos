import { createFileRoute } from "@tanstack/react-router";
import type React from "react";

export const Route = createFileRoute("/")({
	component: App,
});

function App(): React.JSX.Element {
	return <div>oi</div>;
}
