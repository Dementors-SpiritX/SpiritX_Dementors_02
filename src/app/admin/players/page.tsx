"use client";

import SidebarLayout from "@/Layouts/Sidebar/Layout";
import { Player, columns } from "./columns";
import { DataTable } from "./dataTable";
import { getPlayers } from "./getPlayers";
import { useEffect, useState } from "react";

export default function Players() {
	const [players, setPlayers] = useState<Player[] | null>(null);

	useEffect(() => {
		async function fetchPlayers() {
			const data = await getPlayers();
			setPlayers(data);
		}

		fetchPlayers();
	}, []);

	return (
		<SidebarLayout>
			<div className="container mx-auto">
				<h1 className="text-2xl font-bold mb-4">Players List</h1>

				{players === null ? (
					<p>Loading players...</p>
				) : (
					<DataTable columns={columns} data={players} />
				)}
			</div>
		</SidebarLayout>
	);
}
