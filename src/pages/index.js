import * as React from "react"
import { graphql, Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Scooter from "../components/scooter"
import { featured, featuredContainer, featuredText, headerImage, headerContainer } from "../page.module.css"

const IndexPage = ({
  data: {
    wpPage: { homePage },
  },
}) => {
  const image = getImage(homePage.homeInfo.image.localFile)
  return (
    <Layout>
      <div className={headerContainer}>
        <h1>{homePage.homeInfo.title.toUpperCase()}</h1>
        <Link to="/scooters">
          <GatsbyImage alt={homePage.homeInfo.image.altText} className={headerImage} image={image} />
        </Link>
        <p>{homePage.homeInfo.description}</p>
      </div>
      <div className={featuredContainer}>
        <div className={featuredText}>
          <h2>{homePage.featuredScooters.title.toUpperCase()}</h2>
          <p>{homePage.featuredScooters.description}</p>
        </div>
        <div className={featured}>
          {
            homePage.featuredScooters.scooters.map(scooter => (
              <Scooter key={scooter.id} scooter={scooter} slug={`scooters/${scooter.slug}`} />
            ))
          }
        </div>
      </div>

    </Layout>
  )
}

export const query = graphql`
query {
  wpPage(slug: {eq: "home"}) {
    homePage {
      featuredScooters {
        scooters {
          ... on WpScooter {
            id
            scooterMeta {
              pictures {
                picture1 {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED)
                    }
                  }
                }
              }
            }
            title
            slug
          }
        }
        description
        title
      }
      homeInfo {
        description
        title
        image {
          altText
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

export default IndexPage
