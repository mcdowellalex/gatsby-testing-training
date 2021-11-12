// testing css in js through a theme provider

import React from "react"
import { ThemeProvider, withTheme } from "@emotion/react"
import renderer from "react-test-renderer"
import styled from 'styled-components';

const theme = {
  maxWidth: "1450px",
}

const Wrapper = styled.section`
  max-width: ${props => props.theme.maxWidth};
`

test("Wrapper renders correctly", () => {
  expect(
    renderer
      .create(
        <ThemeProvider theme={theme}>
          <Wrapper>Content.</Wrapper>
        </ThemeProvider>
      )
      .toJSON()
  ).toMatchSnapshot()
})