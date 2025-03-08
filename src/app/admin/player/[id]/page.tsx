"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabaseClient";

type Player = {
	id: string;
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

export default function PlayerPage() {
	const { id } = useParams();

	const [player, setPlayer] = useState<Player | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		if (!id) return;

		const fetchPlayerData = async () => {
			try {
				const supabase = createClient();

				const { data, error } = await supabase
					.from("players")
					.select("*")
					.eq("id", id)
					.single();

				if (error) throw new Error(error.message);

				setPlayer(data);
			} catch (error) {
				console.error("Error fetching player data:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchPlayerData();
	}, [id]);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (!player) {
		return <p>Player not found</p>;
	}

	return (
		<div>
			<h1>Player: {player.name}</h1>
			<p>University: {player.university}</p>
			<p>Category: {player.category}</p>
			<p>Total Runs: {player.totalRuns}</p>
			<p>Balls Faced: {player.ballsFaced}</p>
			<p>Innings Played: {player.inningsPlayed}</p>
			<p>Wickets: {player.wickets}</p>
			<p>Overs Balled: {player.oversBalled}</p>
			<p>Runs Conceded: {player.runsConceded}</p>
		</div>
	);
}
