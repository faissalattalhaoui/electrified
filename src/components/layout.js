import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { nav, navLinks } from './layout.module.css'

const Layout = ({children}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return(
    <div>
      <title>{data.site.siteMetadata.title}</title>
      <nav className={nav}>
        <header><StaticImage alt="Logo" src="../images/logo.png"/></header>
        <ul className={navLinks}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/scooters">Scooters</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <main>{children}</main>

    </div>
  )
}


export default Layout
