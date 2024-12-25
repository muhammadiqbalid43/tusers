import BreadcrumbGeneral from "@/components/breadcrumb-general";
import { columns } from "@/components/order/column-order";
import OrdersDataTable from "@/components/order/orders-data-table";
import { MOCK_ORDERS } from "@/constants/orders";

export default function OrderList() {
  return (
    <div className="p-8">
      <BreadcrumbGeneral itemOne="Dashboard" itemTwo="Orders" />
      <h1 className="text-3xl font-bold mb-4">Orders</h1>
      <OrdersDataTable columns={columns} data={MOCK_ORDERS} />
    </div>
  );
}
