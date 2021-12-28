import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import {image} from './scooter.module.css'

const Scooter = ({ slug, scooter }) => {
    const picture = getImage(scooter.scooterMeta.pictures.picture1.localFile)
    return (
        <Link to={slug}>
            <GatsbyImage
            className={image}
            image={picture}
            alt="test"
            />
            <h1>{scooter.scooterMeta.make}</h1>
            <h1>{slug}</h1>
        </Link>

    )
}

/*
<GatsbyImage
            className={image}
            image={picture}
            alt="test"
            />
 */
export default Scooter