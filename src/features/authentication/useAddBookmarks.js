/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "react-query";
import { addUserBookmarks } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useAddBookmarks() {
  const queryClient = useQueryClient();

  const { mutate: updateBookmark, isLoading } = useMutation({
    mutationFn: addUserBookmarks,

    onSuccess: ({ bookmark }) => {
      toast.success("Your favourites list has been updated");

      queryClient.setQueryData(["bookmark"], bookmark);
    },
  });

  return { updateBookmark, isLoading };
}
