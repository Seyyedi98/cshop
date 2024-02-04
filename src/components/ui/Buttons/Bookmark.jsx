/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { RiHeartFill, RiHeartLine } from "react-icons/ri";
import { useUser } from "../../../features/authentication/useUser";
import { useAddBookmarks } from "../../../features/authentication/useAddBookmarks";

function Bookmark(id) {
  const { user } = useUser();
  const [bookmark, setBookmark] = useState(false);
  const { updateBookmark, isLoading } = useAddBookmarks();
  const userBookmarks = user?.user_metadata.bookmarks;

  useEffect(() => {
    if (user) {
      const isBookmarked = user?.user_metadata.bookmarks.includes(id.id);
      setBookmark(isBookmarked);
    }
  }, [id.id, user]);

  if (user && !isLoading)
    return (
      <button
        className={`z-10 rounded-full bg-white p-1.5 text-2xl shadow-sm ${
          bookmark ? "text-red-500" : ""
        }`}
        onClick={() => {
          setBookmark(!bookmark);
          updateBookmark({
            oldBookmarks: userBookmarks,
            newBookmark: id,
            isBookmarked: bookmark,
          });
        }}
      >
        {bookmark ? <RiHeartFill /> : <RiHeartLine />}
      </button>
    );
}

export default Bookmark;
