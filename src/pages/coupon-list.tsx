import BreadcrumbGeneral from "@/components/breadcrumb-general";
import { columns } from "@/components/marketing/coupon/column-coupon";
import CouponsDataTable from "@/components/marketing/coupon/coupons-data-table";
import { MOCK_COUPONS } from "@/constants/coupons";

export default function CouponList() {
  return (
    <div className="p-8">
      <BreadcrumbGeneral itemOne="Dashboard" itemTwo="Coupons" />
      <h1 className="text-3xl font-bold mb-4">Coupons</h1>
      <CouponsDataTable columns={columns} data={MOCK_COUPONS} />
    </div>
  );
}
