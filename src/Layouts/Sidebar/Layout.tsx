import {
	SidebarProvider,
	//  SidebarTrigger
} from "@/components/ui/sidebar";
import AppSidebar from "@/Layouts/Sidebar/AppSidebar";
import { Toaster } from "@/components/ui/sonner";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className="p-4">
				{/* <SidebarTrigger /> */}
				{children}
			</main>
			<Toaster />
		</SidebarProvider>
	);
}
