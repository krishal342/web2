import { Link } from "react-router-dom"
import React, { useState } from "react";
import './NavBar.css'
function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(pre => !pre);
    }


    return (
        <div className=" text-white w-full">
            <div className="flex justify-between items-center w-[70%] mx-auto h-[60px] navbar ">

                <div>
                    <h1 className="text-3xl font-bold">LOGO</h1>
                </div>

                <div className="flex gap-5 text-lg left" >

                    <Link to="/" className="button">Home</Link>
                    <Link to="/contact" className="button">Contact</Link>
                </div>
                <div id="menu-icon">

                    <p onClick={toggleMenu} >☰</p>

                    { isOpen && (<div className="menu-list" >

                        <Link to="/" className="button">Home</Link>
                        <Link to="/contact" className="button">Contact</Link>
                    </div>)}
                </div>
            </div>
        </div>
    );
}

export default NavBar