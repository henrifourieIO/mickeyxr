import Head from 'next/head'
import Styles from '../styles/ServicePages.module.css';
import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import Nav from '../components/Nav';
import Fade from 'react-reveal/Fade';

export async function getStaticProps(context) {
    const headers = { 'Content-Type': 'application/json', 'Accept': 'application/json, text/plain, */*',
    'User-Agent': '*', }
    
    const fetchAPI = await fetch("https://backend.antireality.co.za/ql", {
        method: "POST",
        headers,
        body: JSON.stringify({
            query: 
            `
                query MyQuery {
                    page(id: "cG9zdDo2MQ==") {
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

    const json = await fetchAPI.json()
    if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }
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

export default function about(data) {

    const [logo, setLogo] = useState("/image/logo.png")

    const [theme, setTheme] = useState(createGlobalStyle`
    html {
        --primary: #fff;
        --secondary: #160121;
    }
    `)

    const listenScrollEvent = (event) => {
        const scrollSnap = document.getElementById('themeSwap');
        const snapPostion = scrollSnap.offsetTop - 300;
        if (window.scrollY < snapPostion) {
            setTheme(createGlobalStyle`
        html {
            --primary: #fff;
            --secondary: #160121;
        }
    `)
            setLogo("/image/logo.png")
        } else if (window.scrollY > snapPostion) {
            setTheme(createGlobalStyle`
        html {
            --primary: #160121;
            --secondary: #fff;
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

    const margin = {
        marginTop: '3em',
    }

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
            <GlobalStyle />
            <Nav
                logo={logo}
            />

            <main className="section">
                <section className={Styles.section}>

                    <div className={Styles.aboutGrid}>
                        <Fade bottom>
                            <div>
                                <img src="image/shutterstock_1915346521-01.png" className={Styles.img} />
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div>
                                <h2>
                                    ANTIREALITY INNOVATIVE SPATIAL SOLUTIONS CO & PARTNERS
                                </h2>
                                <p>
                                    We create audacious brand experiences, for when SA brands need a little more than traditional campaigns.
                                </p>
                            </div>
                        </Fade>
                    </div>

                </section>
                <section className={Styles.section}>
                    <div className={Styles.semiDubGrid}>
                        <Fade bottom cascade delay={2000}>
                            <div></div>
                            <div>
                                <img src="/image/525.png" className={Styles.img} />
                            </div>
                            <div>
                                <p>
                                    Anti is a South African-based, innovative marketing and development
                                    company, We’re simply creating experiential campaigns and products
                                    that help brands achieve their marketing objectives.
                                </p>
                                <p>
                                    It’s not about the technology, it’s how we integrate it into our campaigns.
                                </p>
                            </div>
                        </Fade>
                    </div>
                </section>

                <section className={Styles.section} id="themeSwap">
                    <div className={Styles.devTitle}>
                        <Fade cascade bottom>
                            <h4>THE ANTI TEAM</h4>
                        </Fade>
                    </div>
                    <div className={Styles.grid}>
                        <Fade bottom>
                            <div>
                                <img src="/image/mik-pic.png" className={Styles.img} />
                                <div className={Styles.teamCardContent}>
                                    <h5>Mik Adler</h5>
                                    <p>Campaign strategy & operations</p>
                                </div>
                            </div>
                        </Fade>
                        {/* <Fade bottom duration={2000}>
                        <div>
                            <img src="/image/Rectangle 846.svg" className={Styles.img} />
                            <div className={Styles.teamCardContent}>
                                <h5>Brent robinson</h5>
                                <p>Virtual, augmented & mixed Reality developer</p>
                            </div>
                        </div>
                        </Fade> */}
                        <Fade bottom duration={2000}>
                            <div>
                                <img src="/image/mickey-pic.png" className={Styles.img} />
                                <div className={Styles.teamCardContent}>
                                    <h5>Michele caforio</h5>
                                    <p>Character and environment Animator</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div>
                                <img src="/image/girl-pic.png" className={Styles.img} />
                                <div className={Styles.teamCardContent}>
                                    <h5>Jennifer prytz</h5>
                                    <p>Unity & game developer</p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </section>
            </main>

        </>
    )
}