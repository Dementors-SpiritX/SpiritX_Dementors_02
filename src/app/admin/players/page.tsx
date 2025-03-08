import SidebarLayout from "@/Layouts/Sidebar/Layout";
import { Player, columns } from "./columns";
import { DataTable } from "./dataTable";

async function getData(): Promise<Player[]> {
	// Fetch data
	return [
		{
			name: "Chamika Chandimal",
			university: "University of the Visual & Performing Artsing",
			category: "Batsman",
			totalRuns: 530,
			ballsFaced: 588,
			inningsPlayed: 10,
			wickets: 0,
			oversBalled: 3,
			runsConceded: 21,
		},
	];
}

export default async function Players() {
	const data = await getData();

	return (
		<SidebarLayout>
			<div className="container mx-auto">
				<DataTable columns={columns} data={data} />
			</div>
		</SidebarLayout>
	);
}
