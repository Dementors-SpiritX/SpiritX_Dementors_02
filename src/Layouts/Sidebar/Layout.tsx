import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/Layouts/Sidebar/AppSidebar";
import { Toaster } from "@/components/ui/sonner";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
// import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className="w-full">
				{/* <SidebarTrigger /> */}
				<div className="p-4 flex flex-row justify-between items-center">
					<SidebarTrigger className="cursor-pointer" />

					<div className="flex flex-row items-center gap-6">
						<span className="font-bold">Rs.900,000</span>
						<Button variant="outline" className="cursor-pointer">
							<ShoppingCart className="stroke-2" />
						</Button>
					</div>
				</div>

				<div className="p-4">{children}</div>
			</main>
			<Toaster />
		</SidebarProvider>
	);
}
