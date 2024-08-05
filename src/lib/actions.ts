import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function sendMessage(numeroTelefone: number, mensagemPadrao: string) {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  const linkWhatsApp = isMobile
    ? `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagemPadrao)}`
    : `https://web.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(mensagemPadrao)}`;

  window.open(linkWhatsApp, "_blank");
}