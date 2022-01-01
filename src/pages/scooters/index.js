import * as React from 'react';
import { graphql } from "gatsby";
import Scooter from '../../components/scooter';
import Layout from '../../components/layout';
import { container, filter, filterContainer } from '../../page.module.css';

const ScooterPage = ({
  data: {
    allWpScooter: { edges: scooterInfo, distinct: unique }
  }
}) => {
  const [makes, setMakes] = React.useState('')
  console.log(makes)
  return (
    <Layout>
      <div className={filterContainer}>
        <label>Filter by make:</label>
        <select className={filter} onChange={(make) => { setMakes(make.target.value) }} value={makes} name='makes' id='makes'>
          <option defaultValue={true} value="">All</option>
          {unique.map((make) => {
            return <option key={make} value={make}>{make}</option>
          })}
        </select>
      </div>
      <div className={container}>
        {
          makes ?
            scooterInfo.filter(({ node: scooter }) => scooter.scooterMeta.make === makes).map(({ node: scooter }) => (
              <Scooter key={scooter.id} slug={scooter.slug} scooter={scooter} />
            )) :
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
      distinct(field: scooterMeta___make)
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