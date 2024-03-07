/* eslint-disable react/jsx-key */
import React, { useState } from "react"
import Logo from "../assets/images/logo.svg"
import MenuIcon from "../assets/images/icon-hamburger.svg"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleToggler = () => {
        setMenuOpen(!menuOpen)
    }
    const navItems = ["About", "Services", "Projects"]
    return (
        <div className="container py-12 flex items-center justify-between z-10">
            <div className="flex items-center justify-center">
                <img src={Logo} alt="sunnyside logo" className="w-[100%]" />
            </div>

            <div className="hidden sm:block w-[400px]">
                {/* navitems for large screen  */}
                <ul className="flex gap-4 justify-between items-center text-neutral-white font-medium text-lg">
                    {navItems.map((item, index) => (
                        <li key={index} className="font-barlow">
                            <a href="#">{item}</a>
                        </li>
                    ))}
                    <a
                        href="#"
                        className="px-5 py-3 bg-neutral-white text-neutral-very-dark-desturated-blue rounded-3xl font-fraunces font-bold uppercase text-sm tracking-[.25px] hover:bg-opacity-30 hover:text-neutral-white transition-all ease-in-out duration-300"
                    >
                        Contact
                    </a>
                </ul>
            </div>
            {/* navitems for small screen  */}
            <button
                className="inline-block sm:hidden z-10"
                onClick={handleToggler}
            >
                <img src={MenuIcon} />
            </button>
            <div
                className={`z-[1] transitial-all duration-[300ms] ease-in-out flex items-center justify-center absolute sm:hidden right-0 container 
                ${
                    menuOpen
                        ? `top-[120px] opacity-100`
                        : `top-[80px] opacity-0`
                }`}
            >
                <ul className=" flex flex-col gap-6 justify-between items-center py-6 text-neutral-very-dark-grayish-blue font-semibold text-lg bg-neutral-white w-full">
                    {navItems.map((item, index) => (
                        <li key={index} className="font-barlow">
                            <a href="#">{item}</a>
                        </li>
                    ))}
                    <a
                        href="#"
                        className="px-5 py-3 bg-primary-yellow text-neutral-very-dark-desturated-blue rounded-3xl font-fraunces font-bold uppercase text-sm tracking-[.25px] hover:bg-opacity-30 hover:text-neutral-white transition-all ease-in-out duration-300"
                    >
                        Contact
                    </a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
