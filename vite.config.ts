import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import { resolve } from "node:path";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
	envPrefix: ["VITE_", "NEXT_PUBLIC_"],
	plugins: [
		TanStackRouterVite({ autoCodeSplitting: true }),
		viteReact(),
		tailwindcss(),
	],
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
});
