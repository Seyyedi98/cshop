/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "react-query";
import { updateUserBookmarks } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useBookmarks() {
  const queryClient = useQueryClient();

  const { mutate: updateBookmark, isLoading } = useMutation({
    mutationFn: updateUserBookmarks,

    onSuccess: ({ bookmark }) => {
      toast.success("Product added to your favourites list");

      queryClient.setQueryData(["bookmark"], bookmark);
    },
  });

  return { updateBookmark, isLoading };
}
