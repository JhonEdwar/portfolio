const About = () => {
  return (
    <div  className='w-full h-[auto] py-14 px-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <div className='w-full flex justify-center items-center relative'>
        <img className='w-[170px] absolute -top-[140px]' src="https://res.cloudinary.com/kannon229/image/upload/f_auto,q_auto/v1/portfolio/images%20portfolio/soa1ezut14v0frjxsuxk" alt="" />
      </div>
       <div className='w-full  '>
            <h2 className='text-5xl pb-8'>Design skills</h2>
            <div className='flex gap-3 flex-wrap justify-center'>
              {
                ["Product Design",
              "User Experience (UX)",
              "User Interface (UI)",
              "User Research",
              "Usability Testing",
              "Research Artifacts",
              "Human-Centered Design",
              "Experience Metrics",
              "Prototyping (lo-fi / hi-fi)",
              "Figma",
              "Design Systems",
              "Accessibility (WCAG)"].map((item, index) => (

                  <div key={index} className=' py-[4px] px-[12px] border-2 border-zinc-900 rounded-full w-'>
                    <h3 className=' text-xl font-[NeueMontreal] tracking-normal'>{item}</h3>
                  </div>            
                
              ))
              }
            </div>
       </div>
       <div className='w-full  mt-8 '>
            <h2 className='text-5xl pb-5'>Dev skills</h2>
            <div className='flex gap-3 flex-wrap justify-center'>
              {
                [  "TypeScript",
                  "JavaScript",
                  "React / Next.js",
                  "Node / Express",
                  "HTML5 / CSS / Js",
                  "API REST",
                  "PostgreSQL / MongoDB",
                  "Autenticación (JWT, OAuth)",
                  "Testing (Jest / Vitest)",].map((item, index) => (
                
                  <div key={index} className=' py-[4px] px-[12px] border-2 border-zinc-900 rounded-full w-'>
                    <h3 className=' text-xl font-[NeueMontreal] tracking-normal'>{item}</h3>
                  </div>            
                
              ))
              }
            </div>
       </div>

    </div>
  )
}

export default About





