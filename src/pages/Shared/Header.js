import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ImMenu, ImCross } from "react-icons/im";

function Header() {
    const links = [
        { name: "Home", link: "/" },
        { name: "Products", link: "/products" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
    ]

    let [open, setOpen] = useState(false);

    let activeStyle = {
        color: "orange",
      };

    return (
        <header className='bg-gray-700 w-full'>
            <nav className='container mx-auto md:flex py-4 md:justify-between text-white bg-gray-700'>
                <NavLink to="/">
                    <h1 className='pb-6 md:pb-0 pl-2 md:pl-0 text-3xl font-bold'>React Ecommerce</h1>
                </NavLink>
                <div className={`flex flex-col md:flex-row md:items-center left-0 w-full md:w-auto bg-gray-700 z-30 absolute md:static ${open? 'top-18':'top-[-490px]'}`}>
                    {
                        links.map((item, index) => {
                            return <NavLink to={item.link} key={index}  style={({ isActive }) =>
                            isActive ? activeStyle : undefined } className={`py-2 md:py-0 px-6 pl-12 md:pl-0 text-md font-bold uppercase hover:text-orange-400`}>
                                {item.name}
                            </NavLink>
                        })
                    }
                </div>
                <div onClick={()=>setOpen(!open)} className='md:hidden absolute top-4 right-4'>
                    <h3 className='p-2 text-2xl font-bold'>{open? <ImCross />: <ImMenu />}</h3>
                </div>
            </nav>
        </header>
    )
}

export default Header