import {
	Sidebar,
	SidebarMenu,
	// SidebarContent,
	// SidebarFooter,
	// SidebarGroup,
	// SidebarHeader,
	SidebarMenuItem,
	SidebarMenuButton,
} from "@/components/ui/sidebar";

import { adminMenu } from "./Menu";

export default function AppSidebar() {
	return (
		<Sidebar>
			<SidebarMenu className="py-4 px-2">
				{adminMenu.map((item) => (
					<SidebarMenuItem key={item.title}>
						<SidebarMenuButton asChild>
							<a href={item.url}>
								<item.icon />
								<span>{item.title}</span>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</Sidebar>
	);
}
