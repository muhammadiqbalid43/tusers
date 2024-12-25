import BreadcrumbGeneral from "@/components/breadcrumb-general";
import CategoriesDataTable from "@/components/catalog/category/categories-data-table";
import { columns } from "@/components/catalog/category/column-category";
import { MOCK_CATEGORIES } from "@/constants/categories";

export default function CategoryList() {
  return (
    <div className="p-8">
      <BreadcrumbGeneral itemOne="Dashboard" itemTwo="Categories" />
      <h1 className="text-3xl font-bold mb-4">Categories</h1>
      <CategoriesDataTable columns={columns} data={MOCK_CATEGORIES} />
    </div>
  );
}
