import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { nav, navLinks, content, link } from './layout.module.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <title>{data.site.siteMetadata.title}</title>
      <nav className={nav}>
        <Link to="/">
          <header><StaticImage alt="Logo" src="../images/logo.png" /></header>
        </Link>
        <ul className={navLinks}>
          <Link className={link} to="/"><li>Home</li></Link>
          <Link className={link} to="/scooters"><li>Scooters</li></Link>
        </ul>
      </nav>
      <main>{children}</main>

    </div>
  )
}


export default Layout
