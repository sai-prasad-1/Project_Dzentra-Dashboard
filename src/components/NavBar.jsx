import React from 'react'
import{AiOutlineMenu} from  "react-icons/ai";
import{MdAddCircle} from  "react-icons/md";
import{BsTagsFill,BsFillPersonFill} from  "react-icons/bs";
import { IoIosArrowDown } from 'react-icons/io';
import { useContextValues } from '../context/context';

const NavBar = () => {
  const {setOpen,open} = useContextValues();
  return (
    <div className='m-4 flex justify justify-between items-center min-w-[70vw] '>
        <div onClick={()=>{setOpen(!open)}}>
            <AiOutlineMenu className='text-3xl text-white md:block hidden'/>
        </div>
        <div className="flex space-x-2 justify-center items-center">
            <MdAddCircle    className='text-xl text-white'/>
           < BsTagsFill className='text-xl text-white'/>
              < BsFillPersonFill className='text-xl text-white'/>

              <button className='pl-3 pr-3 p-1 bg-white rounded-md  flex justify-center items-center'>English<IoIosArrowDown className='ml-2'/></button>
              <AiOutlineMenu className='text-3xl text-white md:hidden' onClick={()=>{setOpen(!open)}}/>
        </div>

    </div>
  )
}

export default NavBar