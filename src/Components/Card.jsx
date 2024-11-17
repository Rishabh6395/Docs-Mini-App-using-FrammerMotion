/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import {motion} from 'framer-motion';

const Card = ({data, reference}) => {

    const colorMap = {
        red: 'bg-red-600',
        blue: 'bg-blue-600',
        green: 'bg-green-600',
        // Add more colors as needed
    };

  return (

    

      <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={0.2} className='relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[30px] overflow-hidden text-white py-10 px-5'>
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0 '>
            <div className='flex items-center justify-between px-8 py-3 mb-3'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-600 flex rounded-full items-center justify-center'>
                    {data.close ? <IoClose /> : <LuDownload size=".7em" color='#fff' />}
                </span>
            </div>
            {
                data.tag.isOpen && (
                    <div className={`tag w-full flex items-center justify-center py-4 ${colorMap[data.tag.tagColor]}`}>
                        <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                    </div>
                )
            }
            
        </div>
      </motion.div>
  )
}

export default Card
