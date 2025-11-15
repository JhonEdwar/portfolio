import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { devProjectsMock } from '../../../mock/devProjectsMock';
import Button from '../../ui/Button';
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../../common/Footer';

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
    <>
    <div className='w-full min-h-[calc(100vh-68.8px)] bg-zinc-900 px-5 py-10 md:px-12 md:py-16 lg:px-20 lg:py-20 flex flex-col gap-10 md:gap-16 lg:gap-20'>
      <div className='w-full md:w-3/4 lg:w-1/2 flex flex-col gap-4 md:gap-5'>
        <h2 className='text-zinc-50 uppercase text-[10vw] md:text-[8vw] lg:text-[6vw] leading-[.75] font-[FoundersGrotesk]'>
          {item?.label}
        </h2>
        <p className='text-base md:text-lg font-[NeueMontreal] text-zinc-400 font-light tracking-wide'>
          {item?.description}
        </p>
        <Button
          variant='filled'
          size='L'
          startIcon={<FaGithub />}
          endIcon={<FaExternalLinkAlt />}
          onClick={() => window.open(item?.githubLink, '_blank')}
        >
          <span className='hidden md:inline'>View Project github</span>
          <span className='md:hidden'>View on Github</span>
        </Button>
      </div>

      <div className='w-full py-8 px-5 md:py-12 md:px-12 lg:py-14 lg:px-20 bg-zinc-800 rounded-2xl md:rounded-3xl'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl pb-6 md:pb-7 lg:pb-8 font-[NeueMontreal] text-zinc-400'>Tools</h2>
        <div className='flex gap-2 md:gap-3 flex-wrap justify-center'>
          {item?.tools?.map((tool, index) => (
            <div key={index} className='py-1 px-3 border-2 border-zinc-400 rounded-full'>
              <h3 className='text-sm md:text-base lg:text-xl font-[NeueMontreal] text-zinc-400'>{tool}</h3>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={containerRef}
        id='container-img'
        className='min-h-[40vh] md:min-h-[60vh] lg:min-h-screen w-full relative overflow-hidden flex items-center justify-center'
      >
        {item?.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${item.label} screenshot ${index + 1}`}
            className='max-h-[40vh] md:max-h-[60vh] lg:max-h-[900px] w-auto absolute object-contain pt-6 md:pt-8 lg:pt-10'
          />
        ))}
      </div>



    </div>
    <Footer />
    </>
  );
};

export default DevProject;