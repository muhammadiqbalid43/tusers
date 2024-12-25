import BreadcrumbGeneral from "@/components/breadcrumb-general";
import { columns } from "@/components/catalog/products/column-products";
import ProductsDataTable from "@/components/catalog/products/products-data-table";
import { useProducts } from "@/hooks/use-products";

export default function ProductList() {
  const { products, loading, error } = useProducts();

  console.log("Products:", products);

  if (loading)
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="relative right-20">🌀 Loading...</div>
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="p-8">
      <BreadcrumbGeneral itemOne="Dashboard" itemTwo="Products" />
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <ProductsDataTable columns={columns} data={products} />
    </div>
  );
}
