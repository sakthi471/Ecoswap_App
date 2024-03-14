import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function Home() {
  return (
    <div className="w-full min-h-full px-4 py-8 flex gap-5 flex-col  mt-16 ">
         <div className=' flex flex-col gap-2'>
         <h1 className=" text-4xl font-black  "> Want free stuff?</h1>
      <h1 className=" text-4xl font-semibold ">Got stuff to give away?</h1>

      <p className=" font-medium my-4 ">
        
        This is site you can giving and getting free stuff in their local
        communities
      </p>
         </div>
    
      <div className=" flex items-center gap-4 font-bold">
    <Link href={'/give'}> 
    <div className=" cursor-pointer px-6 py-2 bg-primary flex gap-2 items-center rounded-md hover:bg-accent duration-200  ">
          <FaPlus  className='  text-white' size={20} /> <p className=' capitalize text-white '>give</p>
        </div>
    </Link>
        <p>or</p>
         <Link href={'/browse'}>
         
        <div className=" cursor-pointer px-6 py-2 bg-secondary flex gap-2 items-center rounded-md hover:bg-primary duration-200">
          <p className=' capitalize '>browse</p> <MdKeyboardDoubleArrowRight  className=' text-text' size={25}/>
        </div>
         </Link>
        <p>items</p>
      </div>
    </div>
  );
}
