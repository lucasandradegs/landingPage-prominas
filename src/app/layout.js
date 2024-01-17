"use client"

import StyledComponentsRegistry from './registry'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../styles/theme.js'
import GlobalStyles from '../styles/globals.js'
import React, { useState } from 'react'
import { lightTheme, darkTheme } from "../styles/theme"

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};

`;

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("dark")

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  };

  return (
    <html>
      <body>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme }>
        <GlobalStyles />
        <StyledApp> <button onClick={() => themeToggler()}></button>
        <label htmlFor="themeButton" onClick={() => themeToggler()}></label>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </StyledApp>
        </ThemeProvider>
      </body>
    </html>
  )
}