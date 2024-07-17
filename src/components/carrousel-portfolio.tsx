// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
// @ts-ignore
import "@splidejs/react-splide/css";
import Image from "next/image";

export function ClientsCarrousel() {
  return (
    <>
      <Splide
        className="h-full "
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
          { src: "/image/jobs/2.jpeg"},
          { src: "/image/jobs/1.jpeg"},
          { src: "/image/jobs/3.jpeg"},
          { src: "/image/jobs/4.jpeg"},
          { src: "/image/jobs/5.jpeg"},
          { src: "/image/jobs/6.jpeg"},
          { src: "/image/jobs/7.jpeg"},
          { src: "/image/jobs/8.jpeg"},
          { src: "/image/jobs/9.jpeg"},
          { src: "/image/jobs/10.jpeg"},
          { src: "/image/jobs/11.jpeg"},
          { src: "/image/jobs/12.jpeg"},
          { src: "/image/jobs/13.jpeg"},
          { src: "/image/jobs/14.jpeg"},
          { src: "/image/jobs/15.jpeg"},
          { src: "/image/jobs/16.jpeg"},
     

        ].map((project, index) => (
          <SplideSlide key={index} className="flex justify-center items-center py-5 md:w-[650px] md:h-[450px] max-h-[650px]">

            <div className="w-full max-w-[544px] h-[100%] rounded-xl overflow-hidden">
              <Image src={project.src} width={900} height={900} quality={100} priority={true} alt={`Project ${index + 1}`} className="w-full  h-full object-fill" />
            </div>

          </SplideSlide>
        ))}
      </Splide>
    </>
  );
}
