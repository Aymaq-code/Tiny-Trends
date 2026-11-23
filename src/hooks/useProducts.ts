import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/apiProducts";

export function useProducts() {
  const {
    data: allProducts = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return {
    allProducts,
    isLoading,
    error,
  };
}
