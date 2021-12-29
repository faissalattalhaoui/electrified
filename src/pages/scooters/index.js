import * as React from 'react';
import { graphql } from "gatsby";
import Scooter from '../../components/scooter';
import Layout from '../../components/layout';
import { container } from '../../page.module.css';

const ScooterPage = ({
  data: {
    allWpScooter: { edges: scooterInfo }
  }
}) => {
  return (
    <Layout>
      <div className={container}>
        {
          scooterInfo.map(({ node: scooter }) => (
            <Scooter key={scooter.id} slug={scooter.slug} scooter={scooter} />
          ))
        }
      </div>
    </Layout>
  )
}

export const query = graphql`
query {
    allWpScooter {
      edges {
        node {
          scooterMeta {
            make
            model
            pictures {
              picture1 {
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
              }
            }
          }
          slug
          id
          title
        }
      }
    }
  }
`

export default ScooterPage