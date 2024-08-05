'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logoTech from '../../public/image/logo/logo.png'
import { List, WhatsappLogo } from '@phosphor-icons/react';
import { sendMessage } from '@/lib/actions';

export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        setIsVisible(window.scrollY > window.innerHeight);
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <header className={`w-full absolute top-0 h-full mx-auto justify-center items-center `}>
            <div className={` py-2 w-full ${isMenuOpen ? 'bg-zinc-50' : ' bg-transparent'} ` }>
                <div className="container mx-auto flex flex-row items-center justify-between gap-8 py-3 px-4 sm:px-0 text-base lg:justify-between ">
                    <div className="flex items-center justify-between w-full lg:w-36">
                        <Link href="/" className='w-36'>
                            <Image
                                width={9000}
                                height={9000}
                                quality={100}
                                priority={true}
                                src={logoTech}
                                alt='Logo SgariaTech'
                                className='w-full'
                            />
                        </Link>
                        <List
                            onClick={handleMenuToggle}
                            className="size-8 text-gray-950 hover:size-9 focus:outline-none lg:hidden"
                        />
                    </div>

                    <nav className={`lg:flex lg:flex-row lg:items-center lg:gap-8 ${isMenuOpen ? 'z-20 transition-all duration-500 flex-col flex items-center justify-around absolute top-[75px] left-0 bg-zinc-50 w-full mt-[31px] h-[300px] shadow-lg ' : 'hidden'}`}>
                        <Link href="/" onClick={closeMenu} className="cursor-pointer rounded-xl bg-transparent text-gray-900 transition-all duration-200 font-bold hover:underline">
                            Início
                        </Link>
                        <Link href={`/#services`} onClick={closeMenu} className="cursor-pointer rounded-xl bg-transparent text-gray-900 transition-all duration-200 font-bold hover:underline">
                            Serviços
                        </Link>
                        <Link href="/#projects" onClick={closeMenu} className="cursor-pointer rounded-xl bg-transparent text-gray-900 transition-all duration-200 font-bold hover:underline">
                            Portfólio
                        </Link>

                        <Link href="/#contacts" onClick={closeMenu} className="cursor-pointer rounded-xl bg-transparent text-gray-900 transition-all duration-200 font-bold hover:underline">
                            Contatos
                        </Link>
                        <div className={`${isMenuOpen ? 'hidden' : 'h-10 border-l border-zinc-50'}`} />

                        <a
                            onClick={() =>
                                sendMessage(
                                    5541996525929,
                                    "Olá! Vim através do site LTG Pinturas e Drywall!."
                                )
                            }
                            className="cursor-pointer hover:bg-green-600 hover:text-zinc-50 flex w-[230px] items-center justify-center gap-2 font-semibold text-sm sm:text-base bg-green-500 text-zinc-50 py-2 rounded-full transition-all"
                        >
                            <WhatsappLogo className="size-6" />
                            <p className="h-6 text-base items-center justify-center font-semibold  uppercase">
                                Entrar em contato
                            </p>
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
