"use client";

import SidebarLayout from "@/Layouts/Sidebar/Layout";
import PlayerCard from "./PlayerCard";
import { Player as PlayerType } from "@/types/Player";
import { getPlayers } from "@/lib/getPlayers";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Players() {
	const [players, setPlayers] = useState<PlayerType[] | null>(null);

	useEffect(() => {
		async function fetchPlayers() {
			const data = await getPlayers();
			setPlayers(data);
		}

		fetchPlayers();
	}, []);

	const [isSelecting, setIsSelecting] = useState(false);
	const [selectedPlayers, setSelectedPlayers] = useState<string[]>([]);

	const toggleSelection = (id: string) => {
		setSelectedPlayers((prev) =>
			prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
		);
	};

	const handleConfirmSelection = () => {
		console.log("Selected Players:", selectedPlayers);
		setIsSelecting(false); // Hide selection mode
		setSelectedPlayers([]); // Reset selection
	};

	return (
		<SidebarLayout>
			<div className="container mx-auto">
				<div className="flex flex-row justify-between mb-6">
					<h1 className="text-2xl font-bold ">Players List</h1>
					{isSelecting ? (
						<div className="flex gap-4">
							<Button
								onClick={() => {
									handleConfirmSelection();
									toast("Players Added to Team!");
								}}
								className="cursor-pointer"
							>
								OK
							</Button>
							<Button
								onClick={() => setIsSelecting(false)}
								className="cursor-pointer"
							>
								Cancel
							</Button>
						</div>
					) : (
						<Button
							onClick={() => setIsSelecting(true)}
							className="cursor-pointer"
						>
							Select Your Team
						</Button>
					)}
				</div>
				<div className="flex flex-row flex-wrap gap-4">
					{players === null ? (
						<p>Loading players...</p>
					) : (
						players.map((player) => {
							const [firstName, lastName] =
								player.name.split(" ");
							return (
								<PlayerCard
									key={player.id}
									id={player.id}
									fname={firstName}
									lname={lastName}
									category={player.category}
									ratings="13.2"
									isSelecting={isSelecting}
									isSelected={selectedPlayers.includes(
										player.id
									)}
									toggleSelection={toggleSelection}
								></PlayerCard>
							);
						})
					)}
				</div>
			</div>
		</SidebarLayout>
	);
}
