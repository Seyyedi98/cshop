import { useQuery } from "react-query";
import { getTopProducts } from "../../services/apiProducts";

export function useTopProducts() {
  const numTopProducts = 7;

  const { isLoading, data, error } = useQuery({
    queryKey: ["topProducts"],
    queryFn: () => getTopProducts(0, numTopProducts - 1),
  });

  return { isLoading, data, error };
}
