import {
	Sidebar,
	SidebarMenu,
	// SidebarContent,
	// SidebarFooter,
	// SidebarGroup,
	// SidebarHeader,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarGroupLabel,
} from "@/components/ui/sidebar";

import { adminMenu, userMenu } from "./menu";

export default function AppSidebar() {
	return (
		<Sidebar>
			<SidebarGroupLabel>Admin</SidebarGroupLabel>
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
			<SidebarGroupLabel>User</SidebarGroupLabel>
			<SidebarMenu className="py-4 px-2">
				{userMenu.map((item) => (
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
