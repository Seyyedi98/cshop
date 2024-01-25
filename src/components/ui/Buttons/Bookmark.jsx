import { useState } from "react";
import { RiHeartFill, RiHeartLine } from "react-icons/ri";

function Bookmark() {
  const [bookmark, setBookmark] = useState(false);

  return (
    <button
      className={`z-10 rounded-full bg-white p-1.5 text-2xl shadow-sm ${
        bookmark ? "text-red-500" : ""
      }`}
      onClick={() => setBookmark(!bookmark)}
    >
      {bookmark ? <RiHeartFill /> : <RiHeartLine />}
    </button>
  );
}

export default Bookmark;
