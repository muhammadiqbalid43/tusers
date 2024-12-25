import RecentActivity from "@/components/home/recent-activity";
import RecentOrders from "@/components/home/recent-orders";
import RecentReviews from "@/components/home/recent-reviews";
import SalesChart from "@/components/home/sales-chart";
import StatCard from "@/components/home/stat-card";
import TrafficSourceChart from "@/components/home/traffice-source-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, DollarSign, ShoppingCart, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Sales"
          value="$12,345"
          icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
        />
        <StatCard
          title="Average Order Value"
          value="$85"
          icon={<CreditCard className="h-4 w-4 text-muted-foreground" />}
        />
        <StatCard
          title="Total Orders"
          value="145"
          icon={<ShoppingCart className="h-4 w-4 text-muted-foreground" />}
        />
        <StatCard
          title="Active Users"
          value="1,234"
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
        />
      </div>

      <div className="grid gap-8 mt-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Income Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <SalesChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sales by Traffic Source</CardTitle>
          </CardHeader>
          <CardContent>
            <TrafficSourceChart />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 mt-8 md:grid-cols-2">
        <RecentOrders />
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentActivity />
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardContent>
            <RecentReviews />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
