import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ImMenu } from "react-icons/im";

function Category() {
    return (
        <section className='container mx-auto'>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                    <label htmlFor="my-drawer" className="btn btn-primary drawer-button"><ImMenu /><span className='pl-2'>Category</span></label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        
                        <li><Link to={"/"}>All</Link></li>
                        <li><Link to={"/food"}>Food</Link></li>
                        <li><a>Sidebar Item 2</a></li>

                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Category