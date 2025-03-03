"use client"
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

export default function Header() {
    const [open, setOpen]=useState(false)
    const menu = [
        {path:"#", label:"Home"},
        {path:"#", label:"Projects"},
        {path:"#", label:"About"},
        {path:"#", label:"Contact"}
    ]
    return (
        <header className="flex w-full justify-center ">
            <nav className="wrapper w-full flex justify-between items-center py-3 md:py-5 px-3 max-w-[1200px]">
                <section>
                    <h1 className="font-[400] md:text-2xl">Higaurav</h1>
                </section>
                <section>
                   
                  <div className=" gap-5 hidden font-[300] md:flex md:text-xl">
                    {menu && menu.map((nav , index)=><Link href={nav.path} key={index}>{nav.label}</Link>)}
                  </div>

                </section>
                <section className="md:hidden flex justify-center items-center gap-4">
                    {open ? <FaBarsStaggered size={25} onClick={()=> setOpen((prev)=> !prev)} className="transition-all ease-in-out duration-300"  /> :   <FaBars className="transition-all ease-in-out duration-300" size={25} onClick={()=> setOpen((prev)=> !prev)}/>  }  
                   
                </section>
                
            </nav>

            <div className={`md:hidden transition-all ease-in-out duration-200 mob-menu flex flex-col absolute bg-gray-200 w-full gap-6 items-end px-4 py-10 top-14  ${open ? "right-0 " :"top-14 right-full"}`}>
                {menu && menu.map((nav , index)=><Link href={nav.path} key={index}>{nav.label}</Link>)}
                </div>
        </header>
    )
}