const About = () => {
  return (
    <div className='w-full h-[auto] py-10 px-5 md:py-12 md:px-12 lg:py-14 lg:px-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <div className='w-full flex justify-center items-center relative'>
        <img className='w-[120px] md:w-[145px] lg:w-[170px] absolute -top-[100px] md:-top-[120px] lg:-top-[140px]' src="https://res.cloudinary.com/kannon229/image/upload/f_auto,q_auto/v1/portfolio/images%20portfolio/soa1ezut14v0frjxsuxk" alt="" />
      </div>
       <div className='w-full'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl pb-6 md:pb-7 lg:pb-8'>Design skills</h2>
            <div className='flex gap-2 md:gap-3 flex-wrap justify-center'>
              {
                ["Product Design",
              "User Experience (UX)",
              "User Interface (UI)",
              "User Research",
              "Usability Testing",
              "Human-Centered Design",
              "Experience Metrics",
              "Prototyping (lo-fi / hi-fi)",
              "Figma",
              "Design Systems",
              "Accessibility (WCAG)"].map((item, index) => (

                  <div key={index} className='py-[4px] px-[12px] border-2 border-zinc-900 rounded-full'>
                    <h3 className='text-sm md:text-base lg:text-xl font-[NeueMontreal] tracking-normal'>{item}</h3>
                  </div>

              ))
              }
            </div>
       </div>
       <div className='w-full mt-6 md:mt-7 lg:mt-8'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl pb-4 md:pb-5'>Dev skills</h2>
            <div className='flex gap-2 md:gap-3 flex-wrap justify-center'>
              {
                [  
                  "JavaScript",
                  "TypeScript",
                  "React / Next.js",
                  "Node / Express",
                  "HTML5 / CSS",
                  "API",
                  "PostgreSQL / MongoDB",
                  "Autenticación (JWT)",
                  "Testing (Jest)",].map((item, index) => (

                  <div key={index} className='py-[4px] px-[12px] border-2 border-zinc-900 rounded-full'>
                    <h3 className='text-sm md:text-base lg:text-xl font-[NeueMontreal] tracking-normal'>{item}</h3>
                  </div>

              ))
              }
            </div>
       </div>

    </div>
  )
}

export default About





