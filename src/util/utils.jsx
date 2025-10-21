import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function nan(...inputs) {
  return twMerge(clsx(inputs));
}