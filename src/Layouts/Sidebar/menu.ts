// Menu icons
import { Users, UserSearch, FileChartColumn } from "lucide-react";

// Menu items for admin
export const adminMenu = [
	{
		title: "Players",
		url: "/admin/players",
		icon: Users,
	},
	{
		title: "Tournement Summary",
		url: "/admin/summary",
		icon: FileChartColumn,
	},
];

// Menu items for user
export const userMenu = [
	{
		title: "Players",
		url: "/user/players",
		icon: Users,
	},
	{
		title: "Select your team",
		url: "user/team",
		icon: Users,
	},
	{
		title: "Select your team",
		url: "user/select-team",
		icon: Users,
	},
	{
		title: "Team",
		url: "user/team",
		icon: Users,
	},
	{
		title: "Budget",
		url: "user/budget",
		icon: Users,
	},
	{
		title: "Leaderboard",
		url: "user/leaderboard",
		icon: Users,
	},
	{
		title: "Spiriter",
		url: "user/spiriter",
		icon: Users,
	},
];
