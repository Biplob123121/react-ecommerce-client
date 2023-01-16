import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ImMenu, ImCross } from "react-icons/im";

function Sidebar() {
    const links = [
        { name: "All", link: "/" },
        { name: "Food", link: "/food" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
    ]

    let [open, setOpen] = useState(false);

    let activeStyle = {
        color: "orange",
    };

    return (
        <section className='container mx-auto flex'>
            <nav className='text-gray-600 bg-gray-50'>
                <div onClick={() => setOpen(!open)} className=' text-red-500'>
                    <h3 className='p-2 text-2xl font-bold'>{open ? <ImCross /> : <ImMenu />}</h3>
                </div>
                <div className={`flex flex-col left-0 w-full md:w-auto  absolute md:static ${open ? 'top-18' : 'top-[-490px]'}`}>
                    {
                        links.map((item, index) => {
                            return <NavLink to={item.link} key={index} style={({ isActive }) =>
                                isActive ? activeStyle : undefined} className={`py-2 md:py-0 px-6 pl-12 md:pl-0 text-md font-bold uppercase hover:text-orange-400`}>
                                {item.name}
                            </NavLink>
                        })
                    }
                </div>
            </nav>
            <div>
                <Outlet />
            </div>
        </section>
    )
}

export default Sidebar