import { useQuery } from "react-query";
import { getProducts } from "../../services/apiProducts";

export function useProducts() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { isLoading, data, error };
}
