import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { romanize as roman } from "romans";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const romanize = (num: number): string => {
  return roman(num);
};
