import { MdOutlinePhoneAndroid } from "react-icons/md"
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";



const Footer = () => {
  return (
    <div id='contact'  className='w-full rounded-tl-3xl border-t-[1px] border-zinc-700 bg-zinc-900 overflow-hidden flex justify-between items-center ' >
      
        <div className='w-full text-stone-300 px-20  py-15  text-md font-[NeueMontreal] tracking-normal flex gap-5 justify-start items-start'>
            <p className='flex justify-start items-center gap-2' >
                 <MdOutlinePhoneAndroid className='text-[#CDEA68]' /> +57 333 732 9363
            </p>
            <span className='text-stone-400 text-xs px-2'>|</span>
            <p className='flex justify-start items-center gap-2'>
                 <MdEmail className='text-[#CDEA68]' /> jhonEdwar192@gmail.com 
            </p>
            <span className='text-stone-400 text-xs px-2'>|</span>
            <p className='flex justify-start items-center gap-2' >
                <MdLocationPin className='text-[#CDEA68]' /> Bogotá, Colombia
            </p>
        </div>

    <div className='w-auto text-stone-400 text-sm font-[NeueMontreal] px-20  whitespace-nowrap flexjustify-end items-center'>
      Página hecha por Jhon Edwar
    </div>

    </div>
  )
}

export default Footer



