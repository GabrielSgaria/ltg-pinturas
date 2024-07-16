'use client'
import { sendMensage } from "@/lib/actions";
import { MapPinArea, WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";

import {
    DesktopIcon,
    EnvelopeClosedIcon,
} from '@radix-ui/react-icons';

export function Footer() {
    return (
        <>
            <footer id='contatos' className=" border-t-[1px] border-zinc-200 pb-6">
                <div className="container mx-auto mt-16 flex flex-col gap-16 lg:flex-row lg:justify-between lg:gap-0">
                    <div className="flex flex-col items-center lg:items-start ">
                        <h1 className="text-2xl font-black text-zinc-800 ">
                            Informações <br />
                            para contato
                        </h1>
                        <p className="mt-8 max-w-[300px] text-center text-sm text-zinc-500 lg:text-start lg:text-base">
                            Sinta-se à vontade para entrar em contato conosco a qualquer momento.
                        </p>
                        <div className="mt-8 flex flex-col gap-4 text-center lg:items-start lg:justify-start">
                            <a
                                onClick={() =>
                                    sendMensage(
                                        5541995373052,
                                        "Olá! Vim através do site Sgaria Tech."
                                    )
                                }
                                target="blank"
                                className="flex cursor-pointer items-center justify-center gap-4 text-zinc-800"
                            >
                                <WhatsappLogo className="size-6" />
                                <p className="h-6 items-center  justify-center font-semibold transition-all duration-500 hover:border-b-[1px] hover:border-zinc-800">
                                    (41) 99537-3052
                                </p>
                            </a>



                            <Link
                                target="blank"
                                href="mailto:gabriel_sgaria2@outlook.com"
                                className="flex cursor-pointer  items-center gap-4 text-zinc-800"
                            >
                                <EnvelopeClosedIcon className="size-6" />
                                <p className="h-6 font-semibold transition-all duration-500 hover:border-b-[1px] hover:border-zinc-800">
                                    gabriel_sgaria2@outlook.com
                                </p>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="text-center text-2xl font-black text-zinc-800 lg:text-start ">
                            Atual <br /> disponibilidade
                        </h1>
                        <p className="mt-8 max-w-[300px] text-center text-lg text-zinc-500 lg:text-start lg:text-base">
                            Estamos sempre abertos a novos projetos e colaborações
                        </p>
                    </div>
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="text-center text-2xl font-black text-zinc-800 lg:text-start ">
                            Nosso <br />
                            Endereço
                        </h1>
                        <div className="mt-8 flex flex-col items-center gap-4 lg:items-start">

                            <Link
                                target="blank"
                                href="https://maps.app.goo.gl/ynfgQ5cCTcvSuGGPA"
                                className="flex cursor-pointer flex-row items-center gap-4 text-zinc-800"
                            >
                                <MapPinArea className="size-6" />
                                <p className="h-6 font-semibold transition-all duration-500 hover:border-b-[1px] hover:border-zinc-800">
                                    Rua dos luteranos, 643 - Maria Antonieta, Pinhais - PR, 83331-190
                                </p>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="container mx-auto mt-16 flex h-8 cursor-pointer items-center justify-center space-x-2 text-zinc-500 transition-all  hover:font-semibold hover:text-zinc-950">
                    <h1 className="max-w-[300px] text-sm lg:text-start ">
                        Desenvolvido por Gabriel Sgaria
                    </h1>
                    <div>
                        <DesktopIcon className="size-4 items-center  " />
                    </div>
                </div>
            </footer>
            <div className="bg-slate-900 text-zinc-50 p-4 text-center justify-center">© 2023 LTG Pinturas e Drywall. Todos os direitos reservados.</div>

        </>
    )
}