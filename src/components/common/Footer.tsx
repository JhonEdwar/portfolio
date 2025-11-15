import { MdOutlinePhoneAndroid } from "react-icons/md"
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";



const Footer = () => {
  return (
    <div id='contact' className='w-full rounded-tl-3xl border-t-[1px] border-zinc-700 bg-zinc-900 overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0'>

        <div className='w-full text-stone-300 px-5 py-6 md:px-12 md:py-8 lg:px-20 text-sm md:text-md font-[NeueMontreal] tracking-normal flex flex-col md:flex-row gap-3 md:gap-5 justify-start items-start'>
            <p className='flex justify-start items-center gap-2'>
                 <MdOutlinePhoneAndroid className='text-[#CDEA68] text-lg md:text-xl' /> +57 333 732 9363
            </p>
            <span className='hidden md:inline text-stone-400 text-xs px-2'>|</span>
            <p className='flex justify-start items-center gap-2'>
                 <MdEmail className='text-[#CDEA68] text-lg md:text-xl' /> jhonEdwar192@gmail.com
            </p>
            <span className='hidden md:inline text-stone-400 text-xs px-2'>|</span>
            <p className='flex justify-start items-center gap-2'>
                <MdLocationPin className='text-[#CDEA68] text-lg md:text-xl' /> Bogotá, Colombia
            </p>
        </div>

    <div className='w-full md:w-auto text-stone-400 text-xs md:text-sm font-[NeueMontreal] px-5 pb-6 md:px-12 md:py-8 lg:px-20 whitespace-nowrap flex justify-start md:justify-end items-center'>
      Página hecha por Jhon Edwar
    </div>

    </div>
  )
}

export default Footer



