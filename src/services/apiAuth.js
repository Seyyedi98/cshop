/* eslint-disable no-unused-vars */
import supabase from "./supabase";

export async function signup({ email, password, fullName }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        bookmarks: [],
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  // console.log(data);
  return data;
}

export async function getCurrentUser() {
  // Check data in local storage to see if user is still logged in
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function addUserBookmarks({
  oldBookmarks,
  newBookmark,
  isBookmarked,
}) {
  let newBookmrks;

  if (!isBookmarked) {
    const updatedBookmarks = oldBookmarks.push(newBookmark.id);

    // Convert array to Set to remove duplicate values
    let bookmarksSet = [...new Set(oldBookmarks)];

    // Convert Set to array to prevent supabase database error
    newBookmrks = Array.from(bookmarksSet);
  }

  if (isBookmarked) {
    const updatedBookmarks = oldBookmarks.filter(
      (bookmark) => bookmark !== newBookmark.id,
    );

    // Convert array to Set to remove duplicate values
    let bookmarksSet = [...new Set(updatedBookmarks)];

    // Convert Set to array to prevent supabase database error
    newBookmrks = Array.from(bookmarksSet);
  }

  const { data: bookmark, error } = await supabase.auth.updateUser({
    data: { bookmarks: newBookmrks },
  });

  if (error) throw new Error(error.message);

  return bookmark;
}
