import { useQuery } from "react-query";
import { getRangedProducts } from "../../services/apiProducts";

export function useLastestProducts() {
  const numLastestProducts = 7;

  const { isLoading, data, error } = useQuery({
    queryKey: ["lastestProducts"],
    queryFn: () => getRangedProducts(0, numLastestProducts - 1),
  });

  return { isLoading, data, error };
}
