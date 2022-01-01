import { graphql } from "gatsby";
import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Layout from "../../components/layout";
import { CarouselProvider, Slide, Slider, Dot } from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css';
import { thumbContainer, thumb, carousel, slider, content, pageTitle, colors } from '../../page.module.css';

const ScooterPage = ({
  data: {
    wpScooter: {
      scooterMeta: scooter,
      title: title,
      colors: color
    }
  }
}) => {
  const picture1 = getImage(scooter.pictures.picture1.localFile)
  const picture2 = getImage(scooter.pictures.picture2.localFile)
  const picture3 = getImage(scooter.pictures.picture3.localFile)
  const picture4 = getImage(scooter.pictures.picture4.localFile)

  return (
    <Layout>
      <h1 className={pageTitle}>{title}</h1>
      <div className={content}>
        <CarouselProvider
          totalSlides={4}
          naturalSlideHeight={125}
          naturalSlideWidth={100}
          className={carousel}
        >
          <div className={thumbContainer}>
            <Dot className={thumb} slide={0}><GatsbyImage alt={scooter.pictures.picture1.altText} image={picture1} /></Dot>
            <Dot className={thumb} slide={1}><GatsbyImage alt={scooter.pictures.picture2.altText} image={picture2} /></Dot>
            <Dot className={thumb} slide={2}><GatsbyImage alt={scooter.pictures.picture3.altText} image={picture3} /></Dot>
            <Dot className={thumb} slide={3}><GatsbyImage alt={scooter.pictures.picture4.altText} image={picture4} /></Dot>
          </div>
          <Slider className={slider}>
            <Slide index={0}><GatsbyImage alt={scooter.pictures.picture1.altText} image={picture1} /></Slide>
            <Slide index={1}><GatsbyImage alt={scooter.pictures.picture2.altText} image={picture2} /></Slide>
            <Slide index={2}><GatsbyImage alt={scooter.pictures.picture3.altText} image={picture3} /></Slide>
            <Slide index={3}><GatsbyImage alt={scooter.pictures.picture4.altText} image={picture4} /></Slide>
          </Slider>
        </CarouselProvider>
        <table>
          <tr>
            <th>{title}</th>
            <th>Specs</th>
          </tr>
          <tr>
            <td>Make</td>
            <td>{scooter.make}</td>
          </tr>
          <tr>
            <td>Model</td>
            <td>{scooter.model}</td>
          </tr>
          <tr>
            <td>Top speed</td>
            <td>{scooter.topSpeed} km/h</td>
          </tr>
          <tr>
            <td>Range</td>
            <td>{scooter.maxRange} km</td>
          </tr>
          <tr>
            <td>Max. driver weight</td>
            <td>{scooter.maxDriverWeight} kg</td>
          </tr>
          <tr>
            <td>Charge time</td>
            <td>{scooter.chargeTime} hours</td>
          </tr>
          <tr style={{height: 40}}>
            <td>Available colors</td>
            <td className={colors}>{color.nodes.map((color) => {
              return <p>{color.name}</p>
            })}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>€{scooter.price}</td>
          </tr>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
    wpScooter(id: {eq: $id}) {
      scooterMeta {
        pictures {
          picture1 {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            altText
          }
          picture2 {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            altText
          }
          picture3 {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            altText
          }
          picture4 {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            altText
          }
        }
        chargeTime
        make
        maxDriverWeight
        maxRange
        model
        topSpeed
        price
      }
      title
      colors {
        nodes {
          name
        }
      }
    }
  }
`

export default ScooterPage
