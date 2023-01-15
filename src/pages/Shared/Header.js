import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    const links =[
        { name: "Home", link : "/" },
        { name: "Products", link : "/products" },
        { name: "About", link : "/about" },
        { name: "Contact", link : "/contact" },
    ]

    return (
        <header className='bg-gray-700'>
            <nav className='container mx-auto flex py-4 justify-between text-white'>
                <NavLink to="/">
                    <h1>React Ecoomerce</h1>
                </NavLink>
                <div className='flex'>
                    {
                        links.map((item, index) =>{
                            return <NavLink to={item.link} key={index} className="p-2">
                                {item.name}
                            </NavLink>
                        })
                    }
                </div>
            </nav>
        </header>
    )
}

export default Header