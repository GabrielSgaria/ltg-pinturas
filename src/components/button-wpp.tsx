'use client'
import { sendMessage } from "@/lib/actions";
import { WhatsappLogo } from "@phosphor-icons/react";

export function ButtonWpp(){
    return(
        <>
         <button
              onClick={() =>
                sendMessage(
                  5541996525929,
                  "Olá! Vim através do site LTG Pinturas e Drywall!."
                )
              }
              className="cursor-pointer w-full hover:bg-green-600 hover:text-zinc-50 flex items-center justify-center gap-2 font-semibold text-sm sm:text-base bg-green-500 text-zinc-50 py-2 rounded-full transition-all"
            >
              <WhatsappLogo className="size-6" />
              <p className="h-6 text-base items-center justify-center font-semibold  uppercase">
                Entrar em contato
              </p>
            </button>
        </>
    )
}