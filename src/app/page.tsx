
'use client'
import { ButtonWpp } from "@/components/button-wpp";
import { CardServices } from "@/components/card-services";
import { ClientsCarrousel } from "@/components/carrousel-portfolio";
import { Footer } from "@/components/footer";
import { DoorOpen, PaintBrushBroad, PaintBrushHousehold, PaintBucket, PaintRoller, Screwdriver } from "@phosphor-icons/react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <body className="bg-zinc-50 text-gray-900 mt-32 relative">
        <div className="absolute top-0 right-0 -z-20 w-[1100px] h-[890px] rounded-bl-full  bg-blue-300 shadow-md" />
        <section className="flex items-center justify-around p-8 md:p-16 text-center mx-auto container text-gray-900 h-[690px] ">
          <div className="w-[500px]">
            <Image width={900} height={900} src='/image/logo/logo.png' alt="Logo" quality={100} priority={true} />
          </div>
          <div className="flex flex-col gap-10 items-center max-w-[600px]">
            <p className="text-lg md:text-5xl mt-4 font-bold">Somos Especialista em Pinturas, Drywall e Reformas.</p>
            <span className="text-lg">
              Serviços de alta qualidade.
              Garantindo satisfação e superando expectativas.
            </span>
            <div className="w-[330px]">
              <ButtonWpp />
            </div>
          </div>
        </section>

        <section className="p-8 md:p-16">
          <h2 className="text-2xl md:text-4xl font-bold">Nossos Serviços</h2>
          <p className="text-lg md:text-xl mt-4">Nosso compromisso é com a satisfação do cliente, buscando sempre superar expectativas.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <CardServices
              icon={<PaintRoller className="" />}
              title="Pinturas"
              description="Oferecemos serviços de pintura interna e externa. Nossos pintores são especializados em diversas técnicas, garantindo um acabamento perfeito."
            />
            <CardServices
              icon={<PaintBrushBroad className="" />}
              title="Drywall"
              description="Instalamos e reformamos sistemas de drywall, proporcionando praticidade e modernidade aos ambientes. Nossos serviços incluem divisórias, forros e detalhes decorativos."
            />
            <CardServices
              icon={<PaintBrushHousehold className="" />}
              title="Grafiato"
              description="Realizamos reformas completas, desde a demolição até os acabamentos finais. Nossa equipe coordena todas as etapas do projeto, garantindo cumprimento de prazos e qualide"
            />
            <CardServices
              icon={<PaintBucket className="" />}
              title="Pintura Decorativa"
              description="Nossa equipe é especializada em técnicas de pintura decorativa, trazendo criatividade e sofisticação para transformar ambientes."
            />
            <CardServices
              icon={<DoorOpen className="" />}
              title="Colocação de Portas"
              description="Instalamos portas com precisão, assegurando perfeito encaixe e funcionamento, além de opções personalizadas conforme o projeto do cliente."
            />
            <CardServices
              icon={<Screwdriver className="" />}
              title="Reformas"
              description="Realizamos reformas completas, desde a demolição até os acabamentos finais. Nossa equipe coordena todas as etapas do projeto, garantindo cumprimento de prazos e qualidade nos resultados."
            />
          </div>
        </section>
        <section className="p-8 md:p-16">
          <h2 className="text-2xl md:text-4xl font-bold">Portfólio</h2>

          <ClientsCarrousel />
        </section>
        <section className="p-8 md:p-16 bg-card text-card-foreground rounded-lg shadow-md">
          <h2 className="text-2xl md:text-4xl font-bold">Sobre Nós</h2>
          <p className="mt-4">
            Na LTG Pinturas, somos especialistas em pinturas, drywall e reformas. Com uma equipe altamente qualificada, oferecemos serviços de alta qualidade, sempre visando a satisfação dos nossos clientes
            e superando suas expectativas.
          </p>
        </section>
        <Footer />
      </body>
    </>
  );
}
