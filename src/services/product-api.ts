import { ProductList } from "@/types";
import apiClient from "./api-client";

export const getProducts = async (): Promise<ProductList[]> => {
  const { data } = await apiClient.get("/products");
  return data.products;
};
