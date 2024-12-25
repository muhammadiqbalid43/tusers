import { ScrollArea } from "@/components/ui/scroll-area";

const activities = [
  { id: 1, description: "New order placed by John Doe", time: "2 hours ago" },
  {
    id: 2,
    description: "Product restocked: Blue T-Shirt",
    time: "4 hours ago",
  },
  {
    id: 3,
    description: "Customer support ticket resolved",
    time: "6 hours ago",
  },
  {
    id: 4,
    description: "New user registered: Jane Smith",
    time: "8 hours ago",
  },
  { id: 5, description: "Promotion campaign started", time: "10 hours ago" },
  {
    id: 6,
    description: "Product restocked: Blue T-Shirt",
    time: "43 minutes ago",
  },
  { id: 7, description: "Promotion campaign started", time: "10 hours ago" },
  {
    id: 8,
    description: "New order placed by Fadli Hidayatullah",
    time: "10 hours ago",
  },
  {
    id: 9,
    description: "New order placed by Razi Dharmawan",
    time: "7 hours ago",
  },
  {
    id: 10,
    description: "New order placed by Muhammad Iqbal",
    time: "1 day ago",
  },
];

export default function RecentActivity() {
  return (
    <ScrollArea className="h-[300px]">
      <ul className="space-y-4">
        {activities.map((activity) => (
          <li key={activity.id} className="flex justify-between items-start">
            <span className="text-sm">{activity.description}</span>
            <span className="text-xs text-muted-foreground">
              {activity.time}
            </span>
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
}
