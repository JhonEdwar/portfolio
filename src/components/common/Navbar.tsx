import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import { RiHomeSmileLine } from "react-icons/ri";


const Navbar = () => {

  const items = [
    { id: 1, label: "Projects", link: "https://portfolio-jhoned.vercel.app/#projects" }, 
    { id: 2, label: "LinkedIn", link: "https://www.linkedin.com/in/jhon-edwar/" },
    { id: 3, label: "Github", link: "https://github.com/JhonEdwar" },
    { id: 4, label: "Contact", link: "https://portfolio-jhoned.vercel.app/#contact" },
    ]

  const [isSticky, setIsSticky] = useState(false);
  
  useEffect(() => {
    const handlescroll=()=>{
      if(window.scrollY > 0){
        setIsSticky(true)
      }else{
        setIsSticky(false)
      }
    }
    window.addEventListener("scroll",handlescroll)
    return () => {
      window.removeEventListener("scroll",handlescroll)
    }

  },[])

  return (
    <div className={`${isSticky ? "bg-white fixed shadow-lg py-2 md:py-3 top-2 right-3 left-3 md:right-10 md:left-10 rounded-xl backdrop-blur-md bg-zinc-700/60" : "bg-zinc-900 py-4 md:py-5 w-full border-b border-stone-700"} z-[1000] font-[NeueMontreal] px-4 md:px-8 lg:px-10 flex justify-between items-center transition-all duration-200`}>
        <Link to={"https://portfolio-jhoned.vercel.app/"} className='logo text-stone-100 flex items-center gap-2'>
        <span className='text-lg md:text-xl text-stone-400'><RiHomeSmileLine /></span> <span className='text-sm md:text-base'>Jhon_E</span>
        </Link>
        <nav className="links flex gap-3 md:gap-6 lg:gap-10 text-stone-100 items-center">
            {items.map((link,index) =>
             <a href={link.link} key={index} className={`hidden lg:block text-[14px] md:text-[16px] capitalize font-light hover:text-[#CDEA68] transition-all duration-200`}>{link.label}</a>
             )}
             <Button className="md:ml-8 lg:ml-32" variant='outlined' size='S' onClick={() => window.open("https://drive.google.com/file/d/1TAAFTnHnYUzaLFHPuV7uJeiIuFf_ddU2/view?usp=sharing", '_blank')}>
               <span className='hidden md:inline'>Download CV</span>
               <span className='md:hidden'>CV</span>
             </Button>
        </nav>
    </div>
  )
}

export default Navbar





