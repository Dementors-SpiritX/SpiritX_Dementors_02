"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Player = {
	name: string;
	university: string;
	category: string;
	totalRuns: number;
	ballsFaced: number;
	inningsPlayed: number;
	wickets: number;
	oversBalled: number;
	runsConceded: number;
};

export const columns: ColumnDef<Player>[] = [
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		accessorKey: "university",
		header: "University",
	},
	{
		accessorKey: "category",
		header: "Category",
	},
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
		accessorKey: "oversBalled",
		header: "Overs Balled",
	},
	{
		accessorKey: "runsConceded",
		header: "Runs Conceded",
	},
];
