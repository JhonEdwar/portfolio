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
    <div className={`${isSticky ? "bg-white fixed shadow-lg py-3 top-2 right-10 left-10 rounded-xl backdrop-blur-md bg-zinc-700/60 " : "bg-zinc-900 py-5 w-full border-b border-stone-700"} z-[1000]  font-[NeueMontreal] px-10  flex justify-between items-center transition-all duration-200 `}>
        <Link to={"https://portfolio-jhoned.vercel.app/"} className='logo text-stone-100 flex items-center gap-2  '>
        <span className='text-xl text-stone-400'><RiHomeSmileLine /></span> Jhon_E
        </Link>
        <nav className="links flex gap-10 text-stone-100 align-center items-center">
            {items.map((link,index) =>
             <a href={link.link} key={index} className={`text-[16px] capitalize font-light hover:text-[#CDEA68] transition-all duration-200`}>{link.label}</a>
             )}
             <Button className="ml-32" variant='outlined' size='S' onClick={() => window.open("https://drive.google.com/file/d/11_Bb9eA1qfFp3NXFxOTrCkC62ghySgjV/view?usp=sharing", '_blank')}>
               Download CV
             </Button>
        </nav>
    </div>
  )
}

export default Navbar





