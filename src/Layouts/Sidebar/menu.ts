// Menu icons
import {
	Users,
	CircleDollarSign,
	FileChartColumn,
	TrendingUp,
	ShieldHalf,
	Bot,
} from "lucide-react";

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
		title: "Team",
		url: "user/team",
		icon: ShieldHalf,
	},
	{
		title: "Budget",
		url: "user/budget",
		icon: CircleDollarSign,
	},
	{
		title: "Leaderboard",
		url: "user/leaderboard",
		icon: TrendingUp,
	},
	{
		title: "Spiriter",
		url: "user/spiriter",
		icon: Bot,
	},
];
