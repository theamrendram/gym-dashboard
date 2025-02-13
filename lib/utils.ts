import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString();
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount);
}

export function calculateStatus(
  endDate: string
): "active" | "expired" | "pending" {
  const today = new Date();
  const end = new Date(endDate);

  if (end < today) return "expired";
  if (end > today) return "active";
  return "pending";
}
