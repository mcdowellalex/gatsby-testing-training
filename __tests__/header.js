// // using jest to do snapshot tests 

// import React from "react"
// import renderer from "react-test-renderer"

// import Header from "../header"

// describe("Header", () => {
//   it("renders correctly", () => {
//     const tree = renderer
//       .create(<Header siteTitle="Default Starter" />)
//       .toJSON()
//     expect(tree).toMatchSnapshot()
//   })
// })


//testing graphQL stuff
import React from "react"
import renderer from "react-test-renderer"

import { PureHeader as Header } from "../src/components/header"

describe("Header", () => {
  it("renders correctly", () => {
    // Created using the query from Header.js
    const data = {
      site: {
        siteMetadata: {
          title: "Gatsby Starter Blog",
        },
      },
    }
    const tree = renderer.create(<Header data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})