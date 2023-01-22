import React, { useState } from 'react';
import { BiMenuAltRight, BiBorderAll, BiFoodTag } from 'react-icons/bi';
import { MdCategory } from 'react-icons/md';
import { CgShoppingCart } from 'react-icons/cg';
import { GiLargeDress } from 'react-icons/gi';
import { NavLink, Outlet } from 'react-router-dom';

function Sidebar() {

    const sidebarItems = [
        { name: "Category", link: "/", icon: MdCategory },
        { name: "All", link: "/all-product", icon: BiBorderAll },
        { name: "Food", link: "/food", icon: BiFoodTag },
        { name: "Fashion", link: "/fashion", icon: GiLargeDress },
    ];

    const [open, setOpen] = useState(false);

    return (
        <section className='flex'>
            <div className={`${open ? 'w-52' : 'w-[70px]'} min-h-screen duration-500 bg-gray-500 px-6 text-gray-100 relative`}>
                <div onClick={() => setOpen(!open)} className="absolute cursor-pointer right-2 top-2">
                    <BiMenuAltRight size={26} className="sticky top-20"/>
                </div>
                <div className='mt-12'>
                    {
                        sidebarItems.map((item, i) =>
                        <NavLink to={item.link} key={i} className={`flex gap-4 py-2 hover:bg-gray-400 rounded-md hover:text-orange-500 ${!open}`}>
                            <div className=''>{React.createElement(item.icon, {size: '20'})}</div>
                            <div className='overflow-hidden'>
                                {item.name}
                            </div>
                        </NavLink>)
                    }
                </div>
                <div className='mt-36 flex gap-4 overflow-hidden hover:bg-gray-400 rounded-md py-2 cursor-pointer relative'>
                    <h2><CgShoppingCart  size={22}/></h2>
                    <h2>Cart</h2>
                    <div className='absolute left-2 top-1 rounded-full text-sm text-orange-400 font-bold'>
                        <span>0</span>
                    </div>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </section>
    )
}

export default Sidebar