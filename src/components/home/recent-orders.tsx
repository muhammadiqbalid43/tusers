import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const recentOrders = [
  {
    id: 1,
    status: "Completed",
    customer: "John Doe",
    date: "2023-06-01",
    total: "$120.00",
  },
  {
    id: 2,
    status: "Processing",
    customer: "Jane Smith",
    date: "2023-06-02",
    total: "$85.50",
  },
  {
    id: 3,
    status: "Shipped",
    customer: "Bob Johnson",
    date: "2023-06-03",
    total: "$200.00",
  },
  {
    id: 4,
    status: "Pending",
    customer: "Alice Brown",
    date: "2023-06-04",
    total: "$75.25",
  },
  {
    id: 5,
    status: "Completed",
    customer: "Charlie Davis",
    date: "2023-06-05",
    total: "$150.00",
  },
  {
    id: 6,
    status: "Canceled",
    customer: "Niken Kenanga",
    date: "2023-06-05",
    total: "$150.00",
  },
  {
    id: 7,
    status: "Canceled",
    customer: "Fadli Hidayatullah",
    date: "2023-08-05",
    total: "$120.00",
  },
  {
    id: 8,
    status: "Canceled",
    customer: "Razi Dharmawan",
    date: "2023-06-05",
    total: "$150.00",
  },
];

const statusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "text-green-500";
    case "Pending":
      return "text-blue-500";
    case "Canceled":
      return "text-red-500";
    case "Shipped":
      return "text-yellow-500";
  }
};

export default function RecentOrders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell className={statusColor(order.status)}>
                  {order.status}
                </TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
