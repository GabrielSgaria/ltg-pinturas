// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
// @ts-ignore
import "@splidejs/react-splide/css";
import Image from "next/image";

export function ClientsCarrousel() {
  return (
    <div>
      <Splide
        className="h-full"
        options={{
          type: "loop",
          focus: "center",
          pagination: false,
          perPage: 4,
          breakpoints: {
            640: {
              perPage: 1,
              gap: "0.5rem",
              padding: "0.5rem",
            },
            1024: {
              perPage: 3,
              gap: "10px",
              padding: "10px",
            },
          },
        }}
      >
        {[
          { src: "/image/jobs/1.jpeg", description: "Breve descrição do projeto 1." },
          { src: "/image/jobs/2.jpeg", description: "Breve descrição do projeto 2." },
          { src: "/image/jobs/3.jpeg", description: "Breve descrição do projeto 3." },
          { src: "/image/jobs/4.jpeg", description: "Breve descrição do projeto 4." },
          { src: "/image/jobs/5.jpeg", description: "Breve descrição do projeto 5." },
          
        ].map((project, index) => (
          <SplideSlide key={index} className="flex justify-center items-center py-3">
            <div className="bg-zinc-100 rounded-lg overflow-hidden shadow-md w-96 h-96 ">
              <Image src={project.src} width={320} height={384} alt={`Project ${index + 1}`} className="w-full h-2/3 object-cover" />
              <p className="p-4 h-1/3 flex items-center justify-center">{project.description}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
