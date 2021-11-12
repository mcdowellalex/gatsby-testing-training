// testing css in js

import React from "react"
import styled from "@emotion/styled" //docs had react-emotion but this is the new package
import renderer from "react-test-renderer"

const Button = styled.div`
  color: hotpink;
`

test("Button renders correctly", () => {
  expect(
    renderer.create(<Button>This is hotpink.</Button>).toJSON()
  ).toMatchSnapshot()
})