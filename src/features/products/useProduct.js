import { useQuery } from "react-query";
import { getProduct } from "../../services/apiProducts";
import { useParams } from "react-router-dom";

export function useProduct() {
  const id = useParams().id.toString();

  const { isLoading, data, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
  });

  return { isLoading, data, error };
}
