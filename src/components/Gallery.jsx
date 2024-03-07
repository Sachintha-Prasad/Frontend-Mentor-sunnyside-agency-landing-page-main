import React from "react"
import img1Desktop from "../assets/images/desktop/image-gallery-milkbottles.jpg"
import img1Mobile from "../assets/images/mobile/image-gallery-milkbottles.jpg"
import img2Desktop from "../assets/images/desktop/image-gallery-orange.jpg"
import img2Mobile from "../assets/images/mobile/image-gallery-orange.jpg"
import img3Desktop from "../assets/images/desktop/image-gallery-cone.jpg"
import img3Mobile from "../assets/images/mobile/image-gallery-cone.jpg"
import img4Desktop from "../assets/images/desktop/image-gallery-sugarcubes.jpg"
import img4Mobile from "../assets/images/mobile/image-gallery-sugar-cubes.jpg"

const Gallery = () => {
    const images = [
        {
            imgDesktop: img1Desktop,
            imgMobile: img1Mobile
        },
        {
            imgDesktop: img2Desktop,
            imgMobile: img2Mobile
        },
        {
            imgDesktop: img3Desktop,
            imgMobile: img3Mobile
        },
        {
            imgDesktop: img4Desktop,
            imgMobile: img4Mobile
        }
    ]
    return (
        <div className="grid grid-cols-2 md:grid-cols-4">
            {images.map((data, index) => {
                return (
                    <div key={index}>
                        <img
                            src={data.imgDesktop}
                            alt=""
                            className="hidden md:inline-block"
                        />
                        <img
                            src={data.imgMobile}
                            alt=""
                            className="md:hidden"
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Gallery
