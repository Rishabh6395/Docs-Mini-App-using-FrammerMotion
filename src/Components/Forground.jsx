/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import Card from "./Card";


const Forground = () => {
    const ref = useRef();
  const data = [
    {
      desc: "This is the backgound color of that dis.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'green'},
    },
    {
        desc: "This is the backgound color of that dis.",
        filesize: ".9mb",
        close: true,
        tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'red'},
    },
    {
        desc: "This is the backgound color of that dis.",
        filesize: ".9mb",
        close: true,
        tag: { isOpen: false, tagTitle: 'Download Now', tagColor: 'green'},
    },
  ];
  useState();
  return (
    <div ref={ref} className="fixed z-[3] p-5 top-0 left-0 w-full flex gap-10 flex-wrap h-full">
      {data.map((item, index)=>(
        <Card data={item} reference={ref}/>
      ))}
    </div>
  );
};

export default Forground;
