"use client";

import SidebarLayout from "@/Layouts/Sidebar/Layout";
import PlayerCard from "./PlayerCard";
import { Player as PlayerType } from "@/types/Player";
import { getPlayers } from "@/lib/getPlayers";
import { useEffect, useState } from "react";

export default function Players() {
	const [players, setPlayers] = useState<PlayerType[] | null>(null);

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
				<div className="flex flex-row flex-wrap gap-4">
					{players === null ? (
						<p>Loading players...</p>
					) : (
						players.map((player) => {
							return (
								<PlayerCard
									key={player.id}
									id={player.id}
									name={player.name}
									category={player.category}
									ratings="13.2"
								></PlayerCard>
							);
						})
					)}
				</div>
			</div>
		</SidebarLayout>
	);
}
