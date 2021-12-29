import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { image, imageContainer, overlay, overlayBlur } from './scooter.module.css'

const Scooter = ({ slug, scooter }) => {
    const picture = getImage(scooter.scooterMeta.pictures.picture1.localFile)
    return (
        <Link to={slug}>
            <div className={imageContainer}>
                <GatsbyImage
                    className={image}
                    image={picture}
                    alt="test"
                />
                <div className={`${overlay} ${overlayBlur}`}>
                    <h3>{scooter.title}</h3>
                </div>
            </div>
        </Link>

    )
}
export default Scooter