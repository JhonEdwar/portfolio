import { useEffect, useRef } from 'react'
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
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const images = gsap.utils.toArray<HTMLImageElement>("#container-img img");
    
    ScrollTrigger.getAll().forEach(st => st.kill());

    
    images.forEach((img, i) => {
      gsap.set(img, { 
        x: i === 0 ? '0%' : '100%',
        zIndex: i 
      });
    });

    // Crear el timeline principal con todas las transiciones
    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#container-img",
        start: "top top",
        end: `+=${images.length * 100}%`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        snap: {
          snapTo: 1 / (images.length - 1), 
          duration: { min: 0.2, max: 0.5 }, 
          delay: 0.5, 
          ease: "power2.inOut"
        }
      }
    });
    console.log(images);

    // Añadir cada transición al timeline
    images.forEach((img, index) => {
      if (index === 0) return;
      
      mainTimeline
        .to(images[index - 1], { x: '-100%', ease: "none", duration: 1 }, index - 1)
        .to(img, { x: '0%', ease: "none", duration: 1 }, index - 1);
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
        <h2 className='text-zinc-50 uppercase text-[6vw] leading-[.75] font-[FoundersGrotesk]'>
          {item?.label}
        </h2>
        <p className='text-lg font-[NeueMontreal] text-zinc-400 font-light tracking-wide'>
          {item?.description}
        </p>
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

      <div className='w-full py-14 px-20 bg-zinc-800 rounded-3xl'>
        <h2 className='text-4xl pb-8 font-[NeueMontreal] text-zinc-400'>Tools</h2>
        <div className='flex gap-3 flex-wrap justify-center'>
          {item?.tools?.map((tool, index) => (
            <div key={index} className='py-1 px-3 border-2 border-zinc-400 rounded-full'>
              <h3 className='text-xl font-[NeueMontreal] text-zinc-400'>{tool}</h3>
            </div>
          ))}
        </div>
      </div>

      <div 
        ref={containerRef} 
        id='container-img' 
        className='min-h-[50vh] sm:min-h-[60vh] lg:min-h-screen w-full  relative overflow-hidden flex items-center justify-center'
      >
        {item?.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${item.label} screenshot ${index + 1}`}
            className='max-h-[50vh] sm:max-h-[60vh] lg:max-h-[900px] w-auto absolute object-contain pt-10'
          />
        ))}
      </div>
    </div>
  );
};

export default DevProject;