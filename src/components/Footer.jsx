import React from "react"
import Logo from "../assets/images/logo 2.svg"
import Icon1 from "../assets/images/icon-facebook.svg"
import Icon2 from "../assets/images/icon-instagram.svg"
import Icon3 from "../assets/images/icon-twitter.svg"
import Icon4 from "../assets/images/icon-pinterest.svg"

const Footer = () => {
    return (
        <div className="w-full flex flex-col gap-10  items-center bg-[#94d6c8] px-6 py-12 md:py-20">
            <img src={Logo} alt="" className="max-w-[120px]" />
            <div className="flex gap-12 font-barlow font-semibold text-primary-dark-moderate-cyan">
                <a
                    href="#"
                    className="hover:text-neutral-white transition-all ease-in-out duration-300"
                >
                    About
                </a>
                <a
                    href="#"
                    className="hover:text-neutral-white transition-all ease-in-out duration-300"
                >
                    Services
                </a>
                <a
                    href="#"
                    className="hover:text-neutral-white transition-all ease-in-out duration-300"
                >
                    Projects
                </a>
            </div>
            <div className="flex items-center justify-center gap-6">
                <a href="#">
                    <img
                        src={Icon1}
                        alt=""
                        className="hover:fill-neutral-white transition-all ease-in-out duration-300"
                    />
                </a>
                <a href="#">
                    <img
                        src={Icon2}
                        alt=""
                        className="hover:fill-neutral-white transition-all ease-in-out duration-300"
                    />
                </a>
                <a href="#">
                    <img
                        src={Icon3}
                        alt=""
                        className="hover:fill-neutral-white transition-all ease-in-out duration-300"
                    />
                </a>
                <a href="#">
                    <img
                        src={Icon4}
                        alt=""
                        className="hover:fill-neutral-white transition-all ease-in-out duration-300"
                    />
                </a>
            </div>
        </div>
    )
}

export default Footer
