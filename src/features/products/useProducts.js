/* eslint-disable no-unused-vars */
import { useQuery } from "react-query";
import { getProducts } from "../../services/apiProducts";
import { useSelector } from "react-redux";

export function useProducts() {
  const catFilter = useSelector((state) => state.filter.categories);
  const colorFilter = useSelector((state) => state.filter.colors);

  // Categories
  const category = !catFilter || catFilter.length < 1 ? null : catFilter;

  // Colors
  const color = !colorFilter || colorFilter.length < 1 ? null : colorFilter;

  const { isLoading, data, error } = useQuery({
    queryKey: ["products", category, color],
    queryFn: () => getProducts({ category, color }),
  });

  return { isLoading, data, error };
}
