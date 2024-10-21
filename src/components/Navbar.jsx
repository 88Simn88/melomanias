import React, { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        {
            path: "/quienessomos",
            name: "Quienes Somos",
        },
        {
            path: "/proyecto",
            name: "Proyecto"
        },
       /*  {
            path: "/galeria",
            name: "Galería",
        }, */
        {
            path: "/contacto",
            name: "Contacto",
        },
    ]

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const handleScrollToTop = () => {
        window.scrollTo(0,0)
    }

    return (
        <nav className="bg-primary w-screen h-20 text-white md:px-4  py-3 fixed z-10 ">
            <div
                className="flex justify-between items-center h-full"
            >
                <div className="text-xl font-bold flex">
                    <Link to={"/"}
                    onClick={handleScrollToTop}
                    >
                        <h2 className="md:text-5xl text-2xl ml-5 mt-3 md:mt-0 font-serif"
                        >MeloManías</h2>

                    </Link>
                    <img src="./img/logo3.jpeg"
                    className="h-12 w-12 ml-5 rounded-full"
                    alt="" />
                </div>

                {/* Menu Toggle for mobile */}
                <div
                    className="md:hidden mr-10"
                >
                    <button onClick={toggleMenu}
                        className="text-white"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
                {/* Links for larger screens */}

                <ul className="hidden md:flex space-x-4 mr-20">
                    {navLinks.map((navlink, index) => (
                        <Link
                            to={navlink.path}
                            className="text-white text-xl hover:text-yellow-400"
                            key={index}
                            onClick={handleScrollToTop}
                        >{navlink.name}</Link>
                    ))}
                </ul>
            </div>

            {/* Dropdown Menu for mobile*/}
            {isOpen && (
                <ul className="flex flex-col z-10 bg-primary">
                {navLinks.map((navlink, index) => (
                    <Link
                        to={navlink.path}
                        className=" py-5 ml-5 text-white hover:text-yellow-400"
                        key={index}
                        onClick={() => { handleScrollToTop(); toggleMenu();}}
                    >{navlink.name}</Link>
                ))}
            </ul>
            ) }
        </nav>
    )
}

export default Navbar