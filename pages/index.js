import Head from 'next/head'
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import ContentCard from '../components/ContentCard';
import ICard from '../components/ICard';
import ContactSection from '../components/ContactSection';
import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import Fade from 'react-reveal/Fade';
import CaseStudy from '../components/CaseStudy';

export async function getStaticProps() {
  const headers = { 'Content-Type': 'application/json', 'Accept': 'application/json, text/plain, */*',
  'User-Agent': '*', }
  
  const res = await fetch(`${process.env.WORDPRESS_API_URL}`, {
      method: "POST",
      headers,
      body: JSON.stringify({
          query: 
          `
              query MyQuery {
                  page(id: "cG9zdDo3") {
                  seo {
                      metaDesc
                      focuskw
                      metaKeywords
                      title
                      twitterTitle
                      twitterDescription
                  }
                  slug
                  }
              }
          `
      })
  })

  const json = await res.json()
  

  return {
      props: {
          metaDesc: json.data.page.seo.metaDesc,
          focuskw: json.data.page.seo.focuskw,
          metaKeywords: json.data.page.seo.metaKeywords,
          title: json.data.page.seo.title,
          twitterTitle: json.data.page.seo.twitterTitle,
          twitterDescription: json.data.page.seo.twitterDescription,
          slug: json.data.page.slug,
      },
  }
}

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
        <title>{data.title}</title>
        <link rel="icon" href="/image/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={data.metaDesc} />
        <meta name="keywords" content={data.focuskw} />
        <meta property="og:title" content={data.twitterTitle} />
        <meta property="og:description" content={data.twitterDescription} />
      </Head>


      <Nav
        logo={logo}
      />
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
                EXPERIENTIAL APPS, CAMPAIGNS & GAMES
              </h1>
              <h3>
                For brave South African companies
              </h3>
              <Link href="/about">
                <button type="button" className="btn btn-outline-light">What the heck?</button>
              </Link>
            </Fade>
          </div>

          <div className={styles.pointerDown}>
            <Fade bottom>
              <Link href="/">
                <i className="fas fa-chevron-down"></i>
              </Link>
            </Fade>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.cardGrid}>
              <Fade bottom>
                <ContentCard
                  image="/image/123Z_2101.w020.n001.946B.p15.946.png"
                  title="Experiential Marketing Campaigns"
                  body="Engage your audience like never before, with experiences that will stay with them for life."
                />
              </Fade>
              <Fade bottom delay={300}>
                <ContentCard
                  image="/image/1994.png"
                  title="Innovative Development Solutions"
                  body="Solve your most complex tech problems & bring your ideas to life with the power of XR."
                />
              </Fade>
            </div>
          </div>
        </section>

        <section className={styles.section} >
          <div className={styles.container}>
            <div className={styles.iCardGrid}>
              <Fade bottom>
                <ICard
                  link="/mobile-games"
                  image="/image/game-development.png"
                  title="Game dev & design"
                />
              </Fade>
              <Fade bottom delay={100}>
                <ICard
                  link="/virtual-reality"
                  image="/image/virtual-reality-2.png"
                  title="Virtual reality"
                />
              </Fade>
              <Fade bottom delay={200}>
                <ICard
                  link="/augmented-reality"
                  image="/image/virtual-reality.png"
                  title="Augmented reality"
                />
              </Fade>
              <Fade bottom delay={300}>
                <ICard
                  link="/mixed-reality"
                  image="/image/Outline.png"
                  title="Mixed reality"
                />
              </Fade>
            </div>
          </div>
        </section>
        <div id="themeSwap"></div>
        <CaseStudy />

        <section className={styles.section} >
          <Fade bottom cascade>
            <div className={styles.titleMain}>
              <h4>Technologies We work with:</h4>
            </div>
            <div>
              <table className={styles.techTable}>
                <tbody>
                  <tr>
                    <td><img src="/image/1_KV3lq1ssjHg4Jf1xSzUXaQ.png" /></td>
                    <td><img src="/image/1_lwof-6-Mi3LjJTuUEibUAg.png" /></td>
                    <td><img src="/image/250106.png" /></td>
                    <td><img src="/image/image-100115--1762514.png" /></td>
                  </tr>
                  <tr>
                    <td><img src="/image/logo-babylonjs-social-twitter.png" /></td>
                    <td><img src="/image/Screenshot 2021-04-01 at 14.20.05.png" /></td>
                    <td><img src="/image/Screenshot 2021-04-01 at 14.36.59.png" /></td>
                    <td><img src="/image/uPL5o2aF_400x400.png" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Fade>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <Fade bottom>
              <ContactSection
                image="/image/wreck-ship-sunken-steamboat-ocean-sandy-bottom_107791-620.png"
                title="Don’t get in touch"
                body="Unless you really want to innovate and leap ahead Of the competition"
                button="You ready?"
              />
            </Fade>
          </div>
        </section>

      </main>
    </>
  )
}
