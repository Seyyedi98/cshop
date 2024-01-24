/* eslint-disable no-unused-vars */
import supabase from "./supabase";

export async function getProducts() {
  let query = supabase.from("products").select("*");

  const { data, error } = await query;
  if (error) {
    console.error(error);
    throw new Error("Products could not be loaded.");
  }
  return data;
}

export async function getProduct(id) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Product could not be loaded.");
  }
  return data;
}

export async function getRangedProducts(from, to) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("id", { ascending: false })
    .range(from, to);

  if (error) {
    console.error(error);
    throw new Error("Product could not be loaded.");
  }
  return data;
}

export async function getTopProducts(from, to) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("rating", { ascending: false })
    .range(from, to);

  if (error) {
    console.error(error);
    throw new Error("Product could not be loaded.");
  }
  return data;
}
