/* eslint-disable react/no-unescaped-entities */
import React from "react"
import Navbar from "../components/Navbar"
import ArrowDown from "../assets/images/icon-arrow-down.svg"
import CustomerReviewCard from "../components/CustomerReviewCard"

const Home = () => {
    return (
        <div>
            <section className="w-full h-[600px] sm:min-h-screen bg-[url('assets/images/mobile/image-header.jpg')] sm:bg-[url('assets/images/desktop/image-header.jpg')] bg-cover md:bg-fixed object-fill sm:bg-cover bg-no-repeat bg-bottom">
                <Navbar />
                <div className="container flex flex-col justify-center items-center gap-[40px] sm:gap-[60px] mt-12 sm:mt-24">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl uppercase text-center font-fraunces font-bold tracking-[4px] lg:tracking-[8px] text-neutral-white">
                        we are creatives
                    </h1>
                    <img src={ArrowDown} className=" sm:w-[50px]" />
                </div>
            </section>
            <section>
                <div className="flex flex-col-reverse md:flex-row item-center justify-between w-full">
                    <div className="w-full md:w-1/2 container h-[450px] md:h-auto py-12 md:p-24 flex items-center justify-center">
                        <div className="max-w-[600px] flex flex-col items-center md:items-start gap-6">
                            <h2 className="font-fraunces font-extrabold text-3xl md:text-4xl text-neutral-very-dark-desturated-blue text-center md:text-left">
                                Transform your brand
                            </h2>
                            <p className="font-barlow md:text-lg lg:text-xl text-neutral-very-dark-grayish-blue text-center md:text-left">
                                We are a full-service creative agency
                                specializing in helping brands grow fast. Engage
                                your clients through compelling visuals that do
                                most of the marketing for you.
                            </p>
                            <button className="font-fraunces font-bold tracking-wider uppercase text-neutral-very-dark-desturated-blue relative z-[1] after:w-full after:absolute after:bottom-0 after:left-0 after:h-2 after:bg-primary-yellow after:opacity-30 after:rounded-full after:z-[-1] hover:after:opacity-80">
                                learn more
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 h-[450px] md:min-h-[700px] bg-[url('assets/images/mobile/image-transform.jpg')] sm:bg-[url('assets/images/desktop/image-transform.jpg')] bg-cover bg-center"></div>
                </div>
                <div className="flex flex-col-reverse md:flex-row-reverse item-center justify-between w-full">
                    <div className="w-full md:w-1/2 container h-[450px] md:h-auto py-12 md:p-24 flex items-center justify-center">
                        <div className="max-w-[600px] flex flex-col items-center md:items-start gap-6">
                            <h2 className="font-fraunces font-extrabold text-3xl md:text-4xl text-neutral-very-dark-desturated-blue text-center md:text-left">
                                Stand out to the right audience
                            </h2>
                            <p className="font-barlow md:text-lg lg:text-xl text-neutral-very-dark-grayish-blue text-center md:text-left">
                                Using a collaboration formula of designers,
                                researchers, photographers, videographers, and
                                copywriters, we'll build and extend your brand
                                in digital places.
                            </p>
                            <button className="font-fraunces font-bold tracking-wider uppercase text-neutral-very-dark-desturated-blue relative z-[1] after:w-full after:absolute after:bottom-0 after:left-0 after:h-2 after:bg-primary-soft-red after:opacity-30 after:rounded-full after:z-[-1] hover:after:opacity-80">
                                learn more
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 h-[450px] md:min-h-[700px] bg-[url('assets/images/mobile/image-stand-out.jpg')] sm:bg-[url('assets/images/desktop/image-stand-out.jpg')] bg-cover bg-center"></div>
                </div>
                <div className="flex flex-col md:flex-row item-center justify-between w-full">
                    <div className="w-full md:w-1/2 h-[700px] md:min-h-[700px] bg-[url('assets/images/mobile/image-graphic-design.jpg')] sm:bg-[url('assets/images/desktop/image-graphic-design.jpg')] bg-cover bg-no-repeat bg-top relative">
                        <div className="container max-w-[600px] flex flex-col items-center gap-6 text-primary-dark-desaturated-cyan absolute top-[70%] left-1/2 -translate-x-1/2">
                            <h2 className="font-fraunces font-extrabold text-3xl md:text-4xl text-center">
                                Graphic Design
                            </h2>
                            <p className="font-barlow md:text-lg lg:text-xl text-center font-semibold text-primary-dark-moderate-cyan">
                                Great design makes you memorable. We deliver
                                artwork that underscores your brand message and
                                captures potential clients' attention.
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 h-[700px] md:min-h-[700px] bg-[url('assets/images/mobile/image-photography.jpg')] sm:bg-[url('assets/images/desktop/image-photography.jpg')] bg-cover bg-no-repeat bg-top relative">
                        <div className="container max-w-[600px] flex flex-col items-center gap-6 text-primary-dark-blue absolute top-[70%] left-1/2 -translate-x-1/2">
                            <h2 className="font-fraunces font-extrabold text-3xl md:text-4xl text-center">
                                Photography
                            </h2>
                            <p className="font-barlow md:text-lg lg:text-xl text-center font-semibold">
                                Increase your creadibility by getting the most
                                stunning, high-quality photos that improve your
                                business image.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container flex flex-col gap-12 md:gap-24 py-16 md:py-36 items-center">
                <h2 className="font-fraunces font-bold md:text-xl text-center uppercase text-neutral-grayish-blue tracking-[4px] md:tracking-[6px]">
                    client testimonials
                </h2>
                <CustomerReviewCard />
            </section>
        </div>
    )
}

export default Home
