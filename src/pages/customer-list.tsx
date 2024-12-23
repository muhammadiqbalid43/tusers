import BreadcrumbGeneral from "@/components/breadcrumb-general";
import { columns } from "@/components/catalog/customers/column-customer";
import CustomersDataTable from "@/components/catalog/customers/customers-data-table";
import { MOCK_CUSTOMERS } from "@/constants/customers";

export default function CustomerList() {
  return (
    <div className="p-8">
      <BreadcrumbGeneral itemOne="Dashboard" itemTwo="Customers" />
      <h1 className="text-3xl font-bold mb-4">Customers</h1>
      <CustomersDataTable columns={columns} data={MOCK_CUSTOMERS} />
    </div>
  );
}
