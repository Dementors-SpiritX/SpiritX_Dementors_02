import SidebarLayout from "@/Layouts/Sidebar/Layout";
import PlayerCard from "./PlayerCard";

export default function Players() {
	return (
		<SidebarLayout>
			<PlayerCard
				id="12"
				name="John Doe"
				category="Batsman"
				ratings="13.2"
			></PlayerCard>
		</SidebarLayout>
	);
}
