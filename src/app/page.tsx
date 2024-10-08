
'use client'
import { ButtonWpp } from "@/components/button-wpp";
import { CardServices } from "@/components/card-services";
import { ClientsCarrousel } from "@/components/carrousel-portfolio";
import { Footer } from "@/components/footer";
import { sendMessage } from "@/lib/actions";
import { DoorOpen, PaintBrushBroad, PaintBrushHousehold, PaintBucket, PaintRoller, Screwdriver, WhatsappLogo } from "@phosphor-icons/react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <body className="bg-zinc-50 text-gray-900">
        <section className="w-full h-full bg-[url('/image/joanna-kosinska-mjC9apK53a8-unsplash.jpg')] bg-center bg-cover bg-no-repeat py-32">
          <div className="flex flex-col lg:flex-row items-center justify-between p-8 md:p-16 text-center mx-auto container text-gray-900 lg:h-[550px] ">
            <div className="w-full md:w-[500px]">
              <Image width={900} height={900} src='/image/logo/logo.png' alt="Logo" quality={100} priority={true} />
            </div>
            <div className="mt-10 md:mt-0 flex flex-col gap-10 items-center  lg:max-w-[500px] xl:max-w-[600px] relative">
              <p className="text-3xl md:text-5xl mt-4 font-bold text-gray-800">Somos Especialistas em Pinturas, Drywall e Reformas.</p>
              <span className="text-lg text-gray-800">
                Serviços de alta qualidade.
                Garantindo satisfação e superando expectativas.
              </span>
              <div className="w-[330px]">
                <ButtonWpp />
              </div>
            </div>
          </div>
        </section>

        <section className="p-8 md:p-16" id="services">
          <h2 className="text-3xl md:text-4xl font-bold ">Nossos Serviços</h2>
          <p className="text-base md:text-lg mt-2 max-w-[790px]" >Nosso compromisso é com a satisfação do cliente, buscando sempre superar expectativas. Conheça alguns dos serviços prestados pela <span className="font-bold">LTG PINTURAS E DRYWALL.</span></p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <CardServices
              icon={<PaintRoller className="text-blue-900" size={30} weight="bold" />}
              title="Pinturas"
              description="Oferecemos serviços de pintura interna e externa. Nossos pintores são especializados em diversas técnicas, garantindo um acabamento perfeito."
            />
            <CardServices
              icon={<PaintBrushBroad className="text-blue-900" size={30} weight="bold" />}
              title="Drywall"
              description="Instalamos e reformamos sistemas de drywall, proporcionando praticidade e modernidade aos ambientes. Nossos serviços incluem divisórias, forros e detalhes decorativos."
            />
            <CardServices
              icon={<PaintBrushHousehold className="text-blue-900" size={30} weight="bold" />}
              title="Grafiato"
              description="Realizamos reformas completas, desde a demolição até os acabamentos finais. Nossa equipe coordena todas as etapas do projeto, garantindo cumprimento de prazos e qualide"
            />
            <CardServices
              icon={<PaintBucket className="text-blue-900" size={30} weight="bold" />}
              title="Pintura Decorativa"
              description="Nossa equipe é especializada em técnicas de pintura decorativa, trazendo criatividade e sofisticação para transformar ambientes."
            />
            <CardServices
              icon={<DoorOpen className="text-blue-900" size={30} weight="bold" />}
              title="Colocação de Portas"
              description="Instalamos portas com precisão, assegurando perfeito encaixe e funcionamento, além de opções personalizadas conforme o projeto do cliente."
            />
            <CardServices
              icon={<Screwdriver className="text-blue-900" size={30} weight="bold" />}
              title="Reformas"
              description="Realizamos reformas completas, desde a demolição até os acabamentos finais. Nossa equipe coordena todas as etapas do projeto, garantindo cumprimento de prazos e qualidade nos resultados."
            />
          </div>
        </section>
        <section className="px-8 md:px-16 py-28 bg-slate-900 text-zinc-50" >
          <h2 className="text-3xl md:text-4xl font-bold " id="projects">Portfólio</h2>
          <p className="text-base md:text-lg my-3">Aqui estão alguns projetos feitos com excelencia pela empresa LTG.</p>
          <ClientsCarrousel />
          <div className="w-full px-8 md:px-16 flex flex-col items-center justify-center space-y-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold mt-10 ">ANTES E DEPOIS</h1>
              <p className="text-base md:text-lg my-3">Veja como ficou a mudança neste trabalho com um antes e depois</p>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 md:space-x-8">
              <div className="text-center">
                <h1 className="text-xl font-semibold mb-4">ANTES</h1>
                <div className="w-full max-w-md rounded-md min-h-[599px] max-h-[600px] ">

                  <iframe src="https://fast.wistia.net/embed/iframe/d3y4tnwfgv?seo=false&videoFoam=false" title="antes Video" allow="autoplay; fullscreen" name="wistia_embed" className="w-full min-h-[599px]"></iframe>
                  <script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-xl font-semibold mb-4">DEPOIS</h1>
                <div className="w-full max-w-md rounded-md min-h-[599px] max-h-[600px] ">
                  <iframe src="https://fast.wistia.net/embed/iframe/y77iplrxb1?seo=false&videoFoam=false" title="Depois Video" allow="autoplay; fullscreen" name="wistia_embed" className="w-full min-h-[599px]"></iframe>
                  <script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>
                </div>

              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center mt-16">
            <button
              onClick={() =>
                sendMessage(
                  5541996525929,
                  "Olá! Vim através do site LTG Pinturas e Drywall!."
                )
              }
              className="mt-5 cursor-pointer w-[290px] lg:w-[350px] hover:bg-green-600 hover:text-zinc-50 flex items-center justify-center gap-2 font-semibold text-sm sm:text-base bg-green-500 text-zinc-50 py-2 rounded-full transition-all"
            >
              <WhatsappLogo className="size-6" />
              <p className="h-6 text-base lg:text-lg items-center justify-center font-semibold  uppercase">
                Entrar em contato
              </p>
            </button>

          </div>
        </section>

        <Footer />
      </body>
    </>
  );
}
