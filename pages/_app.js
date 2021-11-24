import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import '../styles/globals.css'
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = useState(createGlobalStyle`
    html {
    --primary: #fff;
    --secondary: #160121;
    }
  `)
  const GlobalStyle = theme;
    return (
        <>
            <Nav />
            <GlobalStyle />
            <main style={{paddingTop: '70px'}}>
                <Component {...pageProps} id="outer-container" />
            </main>
            <Footer />
        </>
    )
}

export default MyApp
