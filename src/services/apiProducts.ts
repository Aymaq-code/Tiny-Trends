import { supabase } from "./supabase";
import type { Product } from "@/src/types/types";

// All products
export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []) as Product[];
}

// New arrivals items
export async function getNewProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("new", true);

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []) as Product[];
}
