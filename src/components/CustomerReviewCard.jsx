/* eslint-disable react/jsx-key */
import React from "react"
import img1 from "../assets/images/image-emily.jpg"
import img2 from "../assets/images/image-thomas.jpg"
import img3 from "../assets/images/image-jennie.jpg"

const CustomerReviewCard = () => {
    const clients = [
        {
            img: img1,
            desc: "We put our trust in Sunnyside and they elivered, making sure our needs were met and deadlines were always hit.",
            name: "Emily R.",
            designation: "Marketing Director"
        },
        {
            img: img2,
            desc: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
            name: "Thomas S.",
            designation: "Chief Operating Officer"
        },
        {
            img: img3,
            desc: "Incredible end result! Our sales increased over 400% when we worked with Sunnynide. Highly recommended!",
            name: "Emily R.",
            designation: "Marketing Director"
        }
    ]
    return (
        <div className="w-full flex flex-col md:flex-row gap-20 md:gap-8 justify-between items-center md:items-start">
            {clients.map((data, index) => {
                return (
                    <div
                        key={index}
                        className="flex flex-col max-w-[400px] gap-6 md:gap-20 items-center text-center"
                    >
                        <img
                            src={data.img}
                            alt=""
                            className="max-w-[80px] rounded-full"
                        />
                        <p className="font-barlow text-lg font-semibold text-neutral-very-dark-grayish-blue">
                            {data.desc}
                        </p>
                        <div className="flex flex-col items-center">
                            <h3 className="font-fraunces text-xl font-bold text-neutral-very-dark-desturated-blue">
                                {data.name}
                            </h3>
                            <p className="font-barlow text-sm font-semibold text-neutral-grayish-blue">
                                {data.designation}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CustomerReviewCard
