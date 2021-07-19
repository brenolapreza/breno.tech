import React from 'react'

import Image from 'next/image'
import Head from 'next/head'
import GlobalStyle from '../styles/globals'

import Header from '../components/Header'
import { ThemeProvider } from 'styled-components'
import { light, dark } from '../styles/themes/theme'
import Main from '../styles/HomeStyle'

import BrenoImage from '../images/breno.svg'

export default function Home() {
  const [theme, setTheme] = React.useState("light")
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }
  return (
    <div>
      <Head>
        <title>Breno Lapreza - Desenvolvedor Web</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500;800&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <Header />
        <ThemeProvider theme={theme === "light" ? light : dark}>
          <GlobalStyle />
          <button onClick={() => themeToggler()}>Change</button>
          <Main className="container" >
            <div>
              <h1>BRENO<br/>LAPREZA</h1>
              <h2>DESENVOLVEDOR WEB</h2>
            </div>
            <div>
              <Image alt="breno" src={BrenoImage} />
            </div>
          </Main>
        </ThemeProvider>
      </main>
    </div>
  )
}