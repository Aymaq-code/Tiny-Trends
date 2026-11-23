import { useQuery } from "@tanstack/react-query";
import { getNewProducts } from "../services/apiProducts";

export function useNewProducts() {
  const {
    isLoading,
    data: newProducts = [],
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getNewProducts,
  });

  return { isLoading, error, newProducts };
}
