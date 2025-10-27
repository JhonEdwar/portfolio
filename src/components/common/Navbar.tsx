import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FaArrowUpLong } from "react-icons/fa6";


const Navbar = () => {

  const items = [
    { id: 1, label: "Projects", link: "http://localhost:5173/#projects" }, 
    { id: 2, label: "LinkedIn", link: "https://www.linkedin.com/in/jhon-edwar/" },
    { id: 3, label: "Github", link: "https://github.com/JhonEdwar" },
    { id: 4, label: "Contact", link: "http://localhost:5173/#contact" },
    { id: 5, label: "Download CV", link: "#" },
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
        <Link to={"http://localhost:5173/"} className='logo text-stone-100'>Jhon_E</Link>
        <nav className="links flex gap-10 text-stone-100">
            {items.map((link,index) =>
             <a href={link.link} key={index} className={`text-lg capitalize font-light ${index == 4 && "ml-32" }`}>{link.label}</a>
             )}
        </nav>
    </div>
  )
}

export default Navbar





