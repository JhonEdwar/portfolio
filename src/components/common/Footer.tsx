import { MdOutlinePhoneAndroid } from "react-icons/md"
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";



const Footer = () => {
  return (
    <div id='contact'  className='w-full rounded-tl-3xl  bg-zinc-900 overflow-hidden ' >
      
        <div className='w-full text-stone-300 px-20 border-t-[1px] border-zinc-700 py-15  text-md font-[NeueMontreal] tracking-normal flex flex-col gap-5 justify-center items-start'>
            <p className='flex justify-start items-center gap-2' >
                 <MdOutlinePhoneAndroid className='text-[#CDEA68]' /> +57 333 *******
            </p>
            <p className='flex justify-start items-center gap-2'>
                 <MdEmail className='text-[#CDEA68]' /> jhonEdwar192@gmail.com
            </p>
            <p className='flex justify-start items-center gap-2' >
                <MdLocationPin className='text-[#CDEA68]' /> Bogotá, Colombia
            </p>
        </div>
       
    </div>
  )
}

export default Footer



