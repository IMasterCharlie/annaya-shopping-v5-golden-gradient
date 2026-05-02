import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
}

export function getWhatsAppUrl(
  productName: string,
  size: string,
  color: string,
  price: number
) {
  let message = `Hello Annaya Boutique! 🛍️\nI'd love to order: *${productName}*\nSize: ${size} | Color: ${color}\nPrice: ${formatPrice(price)}\n\nPlease confirm availability!`;
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
