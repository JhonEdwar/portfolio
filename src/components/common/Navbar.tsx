import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [isSticky, setIsSticky] = useState(false);
  
  useEffect(() => {
    const handlescroll=()=>{
      if(window.scrollY > 10){
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
        <div className='logo text-stone-100'>Jhon_E</div>
        <nav className="links flex gap-10 text-stone-100">
            {["Projects","linkedIn","Github","contact","Download CV"].map((link,index) =>
             <a href="#" key={index} className={`text-lg capitalize font-light ${index == 4 && "ml-32" }`}>{link}</a>
             )}
        </nav>
    </div>
  )
}

export default Navbar





