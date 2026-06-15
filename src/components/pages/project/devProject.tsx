import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { devProjectsMock } from '../../../mock/devProjectsMock'
import Button from '../../ui/Button'
import { FaGithub } from "react-icons/fa"
import { FaExternalLinkAlt } from "react-icons/fa"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../../common/Footer'

gsap.registerPlugin(ScrollTrigger);

const DevProject = () => {
  const { id } = useParams<{ id: string }>()
  const item = devProjectsMock.find((i) => i.id === id)

  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!item?.images?.length) return;

    const ctx = gsap.context(() => {
      imageRefs.current.forEach((el) => {
        if (!el) return;

        gsap.fromTo(
          el,
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [item]);

  if (!item) return null;

  return (
    <>
      <main
        ref={sectionRef}
        className="w-full min-h-[calc(100vh-68.8px)] bg-zinc-900 px-5 py-10 md:px-12 md:py-16 lg:px-20 lg:py-20 flex flex-col gap-10 md:gap-16 lg:gap-18"
      >

        
        <div className='w-full md:w-3/4 lg:w-1/2 flex flex-col gap-4 md:gap-5'>
          <h2 className='text-zinc-50 uppercase text-[10vw] md:text-[8vw] lg:text-[6vw] leading-[.75] font-[FoundersGrotesk]'>
            {item.label}
          </h2>
          <p className='text-base md:text-lg font-[NeueMontreal] text-zinc-400 font-light tracking-wide'>
            {item.description}
          </p>
            <Button
              variant='filled'
              size='L'
              startIcon={<FaGithub />}
              endIcon={<FaExternalLinkAlt />}
              onClick={() => window.open(item.buttonPrimary.url, '_blank')}
            >
              <span className='md:inline'>{item.buttonPrimary.label}</span>
            </Button>

            {item.buttonSecondary && (
                          <Button
              variant='outlined'
              size='M'
              endIcon={<FaExternalLinkAlt />}
              onClick={() => window.open(item.buttonSecondary.url, '_blank')}
            >
              <span className='md:inline'>{item.buttonSecondary.label}</span>
            </Button>
            )
            }

        </div>

       
        <div className='w-full py-8 px-5 md:py-10 md:px-12 lg:py-12 lg:px-20 bg-zinc-800 rounded-2xl md:rounded-3xl'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl pb-6 md:pb-7 lg:pb-8 font-[NeueMontreal] text-zinc-400'>Tools</h2>
          <div className='flex gap-2 md:gap-3 flex-wrap justify-center'>
            {item.tools?.map((tool, index) => (
              <div key={index} className='py-1 px-3 border-2 border-zinc-400 rounded-full'>
                <h3 className='text-sm md:text-base lg:text-xl font-[NeueMontreal] text-zinc-400'>{tool}</h3>
              </div>
            ))}
          </div>
        </div>

       
        {item.video?.[0] && (
          <div className='w-full flex flex-col justify-center'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl pb-6 md:pb-7 lg:pb-8 font-[NeueMontreal] text-zinc-400'>Live Demo</h2>
            <div className='flex items-center justify-center'>
              <div className="w-full max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] rounded-2xl overflow-hidden bg-zinc-800">
                {item.video.map((videoUrl,index)=>(
                  <video
                    key={index}
                    controls
                    className="w-full h-[540px] object-contain"
                    src={videoUrl}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        
        {item.images?.length > 0 && (
          <div className='w-full flex flex-col gap-10 md:gap-16'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-[NeueMontreal] text-zinc-400'>How it's built</h2>
            {item.images.map((src, i) => (
              <div
                key={i}
                ref={el => { imageRefs.current[i] = el; }}
                className={`flex flex-col gap-4 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } md:items-center md:gap-10`}
              >
                <div className="flex-1 rounded-2xl overflow-hidden bg-zinc-800 border border-zinc-700">
                  <img
                    src={src}
                    alt={`${item.label} screenshot ${i + 1}`}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

      </main>
      <Footer />
    </>
  );
};

export default DevProject;
