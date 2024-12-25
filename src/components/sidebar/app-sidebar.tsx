import {
  Frame,
  GalleryVerticalEnd,
  Inbox,
  ShoppingCart,
  SquareTerminal,
  TicketSlash,
  User,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import TeamSwitcher from "./team-switcher";
import NavMain from "./nav-main";
import NavProjects from "./nav-projects";
// This is sample data.
const data = {
  teams: [
    {
      name: "Tusers",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Catalog",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Product List",
          url: "/product-list",
        },

        {
          title: "Category List",
          url: "/category-list",
        },
      ],
    },
    {
      title: "Customers",
      url: "#",
      icon: User,
      items: [
        {
          title: "Customers List",
          url: "/customer-list",
        },
      ],
    },
    {
      title: "Orders",
      url: "#",
      icon: ShoppingCart,
      items: [
        {
          title: "Order List",
          url: "/order-list",
        },
      ],
    },
    {
      title: "Marketing",
      url: "#",
      icon: TicketSlash,
      items: [
        {
          title: "Coupon List",
          url: "/coupon-list",
        },
      ],
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
      items: [
        {
          title: "List",
          url: "/inbox-list",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Dashboard",
      url: "/",
      icon: Frame,
    },
  ],
};

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
