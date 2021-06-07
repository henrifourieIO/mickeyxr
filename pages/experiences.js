import ReactDOM from 'react-dom'
import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { createGlobalStyle } from 'styled-components';
import Link from 'next/link'

import Styles from '../styles/Experiences.module.css'

import BoxMesh from '../components/Three/BoxMesh'
import Nav from '../components/Nav'


export default function Experiences() {

const [theme, setTheme] = useState(false)
const [logo, setLogo] = useState("/image/logo.png")

  const listenScrollEvent = (event) => {
    const scrollSnap = document.getElementById('themeSwap');
    const snapPostion = scrollSnap.offsetTop + 100;
    if (window.scrollY < snapPostion) {
      setTheme(false)
      setLogo("/image/logo.png")
    } else if (window.scrollY > snapPostion) {
      setTheme(true)
      setLogo("/image/logo-dark.png")
    }
  }
  const GlobalStyle = createGlobalStyle`
    html {
    --primary: ${theme ? "#160121" : "#fff"};
    --secondary: ${theme ? "#fff" : "#160121"};
    transition: 0.3s;
    }

    #icon {
        filter: invert(${theme ? "0" : "1"});
      }
    `;

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

    return (
        <>
            <GlobalStyle />
            <Nav logo={logo} />

            <Canvas className="canvas" id="themeSwap">
                    <ambientLight />
                    <pointLight position={[10,10,10]} />
                    <BoxMesh position={[0, 0, 0]} theme={theme} setTheme={setTheme} />
            </Canvas>
            <main>
                <div className={Styles.scrollContent}>
                    <Link href="#">
                        <div className={Styles.sideBtn}>
                            <div>
                                <h4>Branding</h4>
                                <h4>Branding <br/> Expression</h4>
                            </div>
                            
                            <span className={Styles.sideLine}></span>
                        </div>
                        
                    </Link>
                    <Link href="#">
                        <div className={Styles.sideBtn}>
                            <span className={Styles.sideLine}></span>
                            <div className="sideLabel">
                                <h4>Experience</h4>
                                <h4>interactive <br/> Experience</h4>
                            </div>
                        </div>
                    </Link>
                </div>
            </main>
            
        </>
    )
}