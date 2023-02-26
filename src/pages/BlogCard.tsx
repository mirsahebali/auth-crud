import React from 'react';
import Image from "next/image"
const Card = ({ image, title, content, author, id }:any) => {
  return (

    <div className='shadow-lg w-[33%]  h-[33%] hover:scale-110 duration-500 '>
      
<div className="title text-center font-bold bg-[#9cd1f1] rounded-t p-5">{title}</div>
<div className='bg-[#9cd1f1] rounded-b p-5'>{content}</div>
    </div>
  );
};

export default Card;
