"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

export type Player = {
	id: string;
	name: string;
	university: string;
	category: string;
	totalRuns: number;
	ballsFaced: number;
	inningsPlayed: number;
	wickets: number;
	oversBowled: number;
	runsConceded: number;
};

export const columns: ColumnDef<Player>[] = [
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		accessorKey: "category",
		header: "Category",
	},
	{
		accessorKey: "university",
		header: "University",
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const player = row.original;

			return (
				<div className="flex flex-row gap-4">
					<Button
						variant="ghost"
						onClick={() => alert("Icon Clicked")}
						className="cursor-pointer"
					>
						<Info />
					</Button>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="ghost"
								className="h-8 w-8 p-0 cursor-pointer"
							>
								<span className="sr-only">Open menu</span>
								<MoreHorizontal className="h-4 w-4" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuLabel className="text-gray-500">
								Actions
							</DropdownMenuLabel>
							<DropdownMenuItem
								onClick={() => {
									navigator.clipboard.writeText(player.id);
									toast("Player ID Copied!");
								}}
								className="cursor-pointer"
							>
								Copy Player ID
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem className="text-gray-500">
								View
							</DropdownMenuItem>
							<DropdownMenuItem className="cursor-pointer">
								Player Stats
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			);
		},
	},
	/*
	{
		accessorKey: "totalRuns",
		header: "Total Runs",
	},
	{
		accessorKey: "ballsFaced",
		header: "Balls Faced",
	},
	{
		accessorKey: "inningsPlayed",
		header: "Innings Played",
	},
	{
		accessorKey: "wickets",
		header: "Wickets",
	},
	{
		accessorKey: "oversBowled",
		header: "Overs Bowled",
	},
	{
		accessorKey: "runsConceded",
		header: "Runs Conceded",
	},
	*/
];
