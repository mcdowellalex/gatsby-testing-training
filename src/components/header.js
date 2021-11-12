import React from "react"
import { StaticQuery, graphql } from "gatsby"

// testable component
// takes in data prop instead of using a static query
export const PureHeader = ({ data }) => (
  <header>
    <h1>{data.site.siteMetadata.title}</h1>
  </header>
)

// defualt export component used in the application
export const Header = props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <PureHeader {...props} data={data} />}
  />
)

export default Header

// Now you have two components exported from the file: the component that 
// includes the StaticQuery data which is still the default export, and another 
// component that you can test. This means you can test the component independently of 
// the GraphQL. In addition, whether you utilize StaticQuery or useStaticQuery, your test 
// should still function properly.
