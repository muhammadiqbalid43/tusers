import { getProducts } from "@/services/product-api";
import { ProductList } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
  const { data, isLoading, error } = useQuery<ProductList[], Error>({
    queryKey: ["products-list"],
    queryFn: getProducts,
  });
  return {
    products: data ?? [],
    loading: isLoading,
    error: error,
  };
};
