import { createClient } from "@/lib/supabaseClient";
import { Player as PlayerType } from "@/types/Player";

export async function getPlayers(): Promise<PlayerType[]> {
	const supabase = createClient();

	const { data, error } = await supabase.from("players").select("*");

	if (error) {
		console.error("Error fetching players:", error.message);
		return [];
	}

	return (data ?? []) as PlayerType[];
}
