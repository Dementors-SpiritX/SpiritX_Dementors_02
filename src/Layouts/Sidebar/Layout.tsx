import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/Layouts/Sidebar/AppSidebar";
import { Toaster } from "@/components/ui/sonner";
// import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className="w-full">
				{/* <SidebarTrigger /> */}
				<div className="p-4 flex flex-row">
					<SidebarTrigger className="cursor-pointer" />
				</div>

				<div className="p-4">{children}</div>
			</main>
			<Toaster />
		</SidebarProvider>
	);
}
