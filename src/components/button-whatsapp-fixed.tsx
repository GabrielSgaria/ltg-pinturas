'use client'
import { sendMessage } from "@/lib/actions";
import { WhatsappLogo } from "@phosphor-icons/react";

export function ButtonWhatsAppFixed() {
   
    return (
        <div className="flex fixed bottom-6 right-6 z-50 rounded-full shadow-xl">
            <button
                onClick={() =>
                    sendMessage(
                        5541996525929,
                        "Olá, Vim através do site LTG Pinturas e Drywall!"
                    )
                }
                className="cursor-pointer p-2 bg-green-500 hover:bg-green-600 transition-all rounded-full shadow-md hover:shadow-2xl"><WhatsappLogo
                    className="w-9 h-9 text-zinc-50" /></button>
        </div>
    )
}