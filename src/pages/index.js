import * as React from "react"
import { graphql, Link } from "gatsby"
import { getImage, StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Scooter from "../components/scooter"
import { featured, featuredContainer, featuredText } from "../page.module.css"

const IndexPage = ({
  data: {
    wpPage: { homePage },
  },
}) => {
  //const image = getImage(homePage.featuredScooters.)
  return (
    <Layout>
      <div className={featuredContainer}>
        <div className={featuredText}>
          <h2>{homePage.featuredScooters.title.toUpperCase()}</h2>
          {homePage.featuredScooters.description}
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
    }
  }
}
`

export default IndexPage
