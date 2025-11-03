import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { devProjectsMock } from '../../../mock/devProjectsMock';
import Button from '../../ui/Button';
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DevProject = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const images = gsap.utils.toArray<HTMLImageElement>("#container-img img");
    
    // Limpiar animaciones previas
    ScrollTrigger.getAll().forEach(st => st.kill());

    // Configurar todas las imágenes como invisibles excepto la primera
    images.forEach((img, index) => {
      if (index > 0) {
        gsap.set(img, { opacity: 0 });
      }
    });

    // Crear animación para cada transición de imagen
    images.forEach((img, index) => {
      if (index === 0) return; // La primera ya es visible

      ScrollTrigger.create({
        trigger: "#container-img",
        start: () => `top+=${(index - 1) * 100}% top`,
        end: () => `top+=${index * 100}% top`,
        scrub: true,
        onEnter: () => {
          gsap.to(images[index - 1], { opacity: 0, duration: 0.5 });
          gsap.to(img, { opacity: 1, duration: 0.5 });
        },
        onLeaveBack: () => {
          gsap.to(img, { opacity: 0, duration: 0.5 });
          gsap.to(images[index - 1], { opacity: 1, duration: 0.5 });
        },
      });
    });

    // Pin del contenedor
    ScrollTrigger.create({
      trigger: "#container-img",
      start: "top top",
      end: () => `+=${images.length * 100}%`,
      pin: true,
      pinSpacing: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const { id } = useParams<{ id: string }>();
  const item = devProjectsMock.find((item) => item.id === id);

  return (
    <div className='w-full min-h-[calc(100vh-68.8px)] bg-zinc-900 px-20 py-20 flex flex-col gap-20'>
      <div className='w-1/2 flex flex-col gap-5'>
        <h2 className='text-stone-50 uppercase text-[6vw] leading-[.75] font-[FoundersGrotesk]'>
          {item?.label}
        </h2>

        <div className='w-full'>
          <p className='text-lg font-[NeueMontreal] text-stone-400 font-light tracking-wide'>
            {item?.description}
          </p>
        </div>

        <div>
          <Button
            variant='filled'
            size='L'
            startIcon={<FaGithub />}
            endIcon={<FaExternalLinkAlt />}
            onClick={() => window.open(item?.githubLink, '_blank')}
          >
            View Project github
          </Button>
        </div>
      </div>

      <div className='w-full h-[auto] py-14 px-20 bg-[#CDEA68] rounded-3xl text-black'>
        <div className='flex gap-3 flex-wrap justify-center'>
          {item?.tools?.map((tool, index) => (
            <div key={index} className='py-[4px] px-[12px] border-2 border-zinc-900 rounded-full'>
              <h3 className='text-xl font-[NeueMontreal] tracking-normal'>{tool}</h3>
            </div>
          ))}
        </div>
      </div>

      <div 
        ref={containerRef} 
        id='container-img' 
        className='h-screen w-full relative flex items-center justify-center'
      >
        {item?.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${item.label} screenshot ${index + 1}`}
            className='w-full h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          />
        ))}
      </div>
    </div>
  );
};

export default DevProject;