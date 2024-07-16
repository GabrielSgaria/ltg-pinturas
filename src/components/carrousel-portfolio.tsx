// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
// @ts-ignore
import "@splidejs/react-splide/css";
import Image from "next/image";

export function ClientsCarrousel() {
  return (
    <>
      <Splide
        className="h-full"
        options={{
          type: "loop",
          focus: "center",
          pagination: false,
          perPage: 2,
          gap: 20,
          breakpoints: {
            640: {
              perPage: 1,
            },
            1024: {
              perPage: 3,
            },
          },
        }}
      >
        {[
          { src: "/image/jobs/1.jpeg", description: "Descrição do projeto 1." },
          { src: "/image/jobs/2.jpeg", description: "Descrição do projeto 2." },
          { src: "/image/jobs/3.jpeg", description: "Descrição do projeto 3." },
          { src: "/image/jobs/4.jpeg", description: "Descrição do projeto 4." },
          { src: "/image/jobs/5.jpeg", description: "Descrição do projeto 5." },

        ].map((project, index) => (
          <SplideSlide key={index} className="flex justify-center items-center py-5">
            <div className="flex flex-col bg-zinc-50 rounded-2xl shadow-md md:w-[650px] md:h-[450px] overflow-hidden">
              <div className="w-full h-[90%]">
                <Image src={project.src} width={700} height={700} quality={100} priority={true} alt={`Project ${index + 1}`} className="w-full h-full object-fill" />
              </div>
              <p className="p-4 min-h-[10%] flex items-center justify-center text-zinc-950">{project.description}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
}
