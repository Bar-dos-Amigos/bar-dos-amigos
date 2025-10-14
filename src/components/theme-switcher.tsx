import { SunMoon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export function ThemeSwitcher({
	withIcon = true,
	label,
}: {
	withIcon?: boolean;
	label?: string;
}) {
	const [theme, setTheme] = useState<"light" | "dark">("light");

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
		if (savedTheme) {
			setTheme(savedTheme);
			document.documentElement.classList.toggle("dark", savedTheme === "dark");
		} else {
			const prefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)",
			).matches;
			setTheme(prefersDark ? "dark" : "light");
			document.documentElement.classList.toggle("dark", prefersDark);
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
		document.documentElement.classList.toggle("dark", newTheme === "dark");
	};

	return (
		<Button onClick={toggleTheme} variant="ghost" title="Trocar tema">
			{withIcon && <SunMoon size={20} />}
			{label}
		</Button>
	);
}
