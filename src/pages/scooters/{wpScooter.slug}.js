import { graphql } from "gatsby";
import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Layout from "../../components/layout";
import { CarouselProvider, Slide, Slider, Dot } from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css';
import { thumbContainer, thumb, carousel, slider } from '../../page.module.css';

const ScooterPage = ({
    data: {
        wpScooter: {
            scooterMeta: scooter
        }
    }
}) => {
    const picture1 = getImage(scooter.pictures.picture1.localFile)
    const picture2 = getImage(scooter.pictures.picture2.localFile)
    const picture3 = getImage(scooter.pictures.picture3.localFile)
    const picture4 = getImage(scooter.pictures.picture4.localFile)
    return (
        <Layout>
            <CarouselProvider
                totalSlides={4}
                naturalSlideHeight={125}
                naturalSlideWidth={100}
                className={carousel}
            >
                <div className={thumbContainer}>
                    <Dot className={thumb} slide={0}><GatsbyImage image={picture1} /></Dot>
                    <Dot className={thumb} slide={1}><GatsbyImage image={picture2} /></Dot>
                    <Dot className={thumb} slide={2}><GatsbyImage image={picture3} /></Dot>
                    <Dot className={thumb} slide={3}><GatsbyImage image={picture4} /></Dot>
                </div>
                <Slider className={slider}>
                    <Slide index={0}><GatsbyImage image={picture1} /></Slide>
                    <Slide index={1}><GatsbyImage image={picture2} /></Slide>
                    <Slide index={2}><GatsbyImage image={picture3} /></Slide>
                    <Slide index={3}><GatsbyImage image={picture4} /></Slide>
                </Slider>
            </CarouselProvider>
        </Layout>
    )
}

/*<div>
                        <GatsbyImage image={picture1} />
                    </div>
                    <div>
                        <GatsbyImage image={picture2} />
                    </div>
                    <div>
                        <GatsbyImage image={picture3} />
                    </div>
                    <div>
                        <GatsbyImage image={picture4} />
                    </div> */

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
          }
          picture2 {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
          picture3 {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
          picture4 {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`

export default ScooterPage
