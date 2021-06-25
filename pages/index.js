import Head from 'next/head'
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import ICard from '../components/ICard';
import ContactSection from '../components/ContactSection';
import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import Fade from 'react-reveal/Fade';
import CaseStudy from '../components/CaseStudy';
import Img from 'next/image'

export default function Home( data ) {

  const [logo, setLogo] = useState("/image/logo.png")

  const [theme, setTheme] = useState(createGlobalStyle`
    html {
    --primary: #fff;
    --secondary: #160121;
    }
  `)

  const listenScrollEvent = (event) => {
    const scrollSnap = document.getElementById('themeSwap');
    const snapPostion = scrollSnap.offsetTop - 500;
    if (window.scrollY < snapPostion) {
      setTheme(createGlobalStyle`
        html {
            --primary: #fff;
            --secondary: #160121;
        }
        #icon {
          filter: invert(0);
        }
    `)
      setLogo("/image/logo.png")
    } else if (window.scrollY > snapPostion) {
      setTheme(createGlobalStyle`
        html {
            --primary: #160121;
            --secondary: #fff;
        }
        #icon {
          filter: invert(1);
        }
    `)
      setLogo("/image/logo-dark.png")
    }
  }
  const GlobalStyle = theme;

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

 

  return (
    <>
      <Head>
        <title>Mickey XR</title>
        <link rel="icon" href="/image/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>


      <Nav />
      <GlobalStyle />
      <main id="page-wrap">
        <section className={styles.hero}>
          <div className={styles.art}>
            <Fade left delay={400}><img src="/image/cube.png" /></Fade>
            <Fade right delay={300}><img src="/image/cube.png" /></Fade>
          </div>

          <div className={styles.heroWrapper}>
            <Fade bottom>
              <h1>
                Virtual, Augmented & <br/> Mixed Reality Consultant.
              </h1>
              <Link href="/about">
                <Img src="/images-mic/arrow.png" width={25} height={15} />
              </Link>
            </Fade>
          </div>

          <div className={styles.pointerDown}>
            <Fade bottom>
              <Link href="#">
                <i className="fas fa-chevron-down"></i>
              </Link>
            </Fade>
          </div>
        </section>

        <CaseStudy />

        <section className={styles.section} >
          <div className={styles.container}>
            <div style={{marginBottom: "2em"}}>
              <h4>Area of Expertise</h4>
            </div>
            <div className={styles.iCardGrid}>
              <Fade bottom>
                <ICard
                  link="#"
                  image="/image/game-development.png"
                  title="Social AR"
                />
              </Fade>
              <Fade bottom delay={100}>
                <ICard
                  link="#"
                  image="/image/virtual-reality-2.png"
                  title="Headset VR & MR"
                />
              </Fade>
              <Fade bottom delay={200}>
                <ICard
                  link="#"
                  image="/image/virtual-reality.png"
                  title="Web VR & AR"
                />
              </Fade>
              <Fade bottom delay={300}>
                <ICard
                  link="#"
                  image="/image/Outline.png"
                  title="Mobile VR & AR"
                />
              </Fade>
            </div>
          </div>
        </section>
        <div id="themeSwap"></div>
        
        <section className={styles.section}>
          <div className={styles.container}>
            <Fade bottom>
              <ContactSection
                image="/images-mic/MickeyXR2.jpg"
                title="Ready to Chat?"
                body="Feel free to set up a meeting or give me a shout :)"
                button="Book A Meeting"
              />
            </Fade>
          </div>
        </section>
      </main>
    </>
  )
}
