import React from "react"
import { Link } from "gatsby"
import "../../static/index.css"
import { rhythm, scale } from "../utils/typography"
import ThemeToggl from "./ThemeToggler"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            color: "var(--textNormal)",
            // transition: 'color 0.2s ease-out, background 0.2s ease-out',
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `DM Serif Text, sans-serif`,
            marginTop: 0,
            color: "var(--textNormal)",
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(30),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>
          <ThemeToggl />
          {header}
        </header>
        <main>{children}</main>
        <footer style={{ color: "var(--textNormal)" }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org" target={`_blank`}>
            Gatsby
          </a>
        </footer>
      </div>
    )
  }
}

export default Layout
