import { createClient } from "@/lib/supabaseClient";
import { Player } from "./columns";

export async function getPlayers(): Promise<Player[]> {
	const supabase = createClient();

	const { data, error } = await supabase.from("players").select("*");

	if (error) {
		console.error("Error fetching players:", error.message);
		return [];
	}

	return (data ?? []) as Player[];
}
