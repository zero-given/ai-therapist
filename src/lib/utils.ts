import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function calculateSessionCost(tokens: number): number {
  const baseRate = 0.01; // Cost per 1000 tokens
  const markup = 5; // 500% markup
  return (tokens / 1000) * baseRate * markup;
}