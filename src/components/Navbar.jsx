"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
const pathname = usePathname()
   const navLinks = [
  { name: "Home", href: "/" },
  { name: "Timeline", href: "/timeline" },
  { name: "Stats", href: "/stats" },
];


    const links =(
        <>
        {navLinks.map((link)=>(
            <li key={link.href}>
                 <Link
          href={link.href}
          className={pathname === link.href ? "text-green-500" : ""}
        >
          {link.name}
        </Link>
            </li>
        ))}
        </>
    )

    return (
       <div className="navbar">
  <div className="flex-1">
    <Link href='/' className='text-xl font-bold cursor-pointer'>
        KeenKeeper
</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 text-base font-semibold">
     {links}
    </ul>
  </div>
</div>
    );
};

export default Navbar;