import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';

function Navbar() {
    const navItems = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
        { name: "Sign in", link: "/signin" },
    ];

    const activeStyle = {
        color: "orange",
    };

    const [open, setOpen] = useState(false);

    return (
        <header className='bg-gray-700 w-full sticky top-0'>
            <nav className='flex justify-between items-center px-6 py-4 md:pb-4 pb-8  text-gray-100 relative'>
                <NavLink onClick={() => setOpen(!open)} to={"/"}>
                    <h1 className='text-3xl font-bold'>React Ecommerce</h1>
                </NavLink>
                <div className={`flex flex-col items-center md:flex-row left-0 w-full md:w-auto z-40 bg-gray-700 absolute md:static duration-500 ${open ? 'top-20' : 'top-[-490px]'}`}>
                    {
                        navItems?.map((item, i) =>
                            <NavLink onClick={() => setOpen(!open)} to={item.link} key={i} className="px-4 py-1 hover:bg-slate-500 hover:text-orange-500 rounded-md font-semibold uppercase" style={({ isActive }) => isActive ? activeStyle : undefined}>
                                {item.name}
                            </NavLink>)
                    }
                </div>
                <div onClick={() => setOpen(!open)} className='md:hidden absolute top-6 right-4'>
                    { open? <RxCross2 size={26} /> : <BiMenu size={26} />}
                </div>
            </nav>
        </header>
    )
}

export default Navbar