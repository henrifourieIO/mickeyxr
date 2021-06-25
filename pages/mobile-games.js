import Head from 'next/head'
import AboutStyles from '../styles/ServicePages.module.css';
import Nav from '../components/Nav';
import Carousel from 'react-bootstrap/Carousel'
import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import CorItem from '../components/gameDevProcessCor';
import ContactSection from '../components/ContactSection';
import Fade from 'react-reveal/Fade';
import CaseStudy from '../components/CaseStudy'

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
                    page(id: "cG9zdDo2OQ==") {
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

export default function mobileGames(data) {

    const [logo, setLogo] = useState("/image/logo-dark.png")

    const [theme, setTheme] = useState(createGlobalStyle`
    html {
        --primary: #160121;
        --secondary: #fff;
    }
    `)

    const listenScrollEvent = (event) => {
        const scrollSnap = document.getElementById('themeSwap');
        const snapPostion = scrollSnap.offsetTop - 500;
        if (window.scrollY < snapPostion) {
            setTheme(createGlobalStyle`
        html {
            --primary: #160121;
            --secondary: #fff;
        }
        #icon {
            filter: invert(0);
          }
    `)
            setLogo("/image/logo-dark.png")
        } else if (window.scrollY > snapPostion) {
            setTheme(createGlobalStyle`
        html {
            --primary: #fff;
            --secondary: #160121;
        }
        #icon {
            filter: invert(1);
          }
    `)
            setLogo("/image/logo.png")
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
                <meta name="keywords" content={data.metaKeywords} />
                <meta property="og:title" content={data.twitterTitle} />
                <meta property="og:description" content={data.twitterDescription} />
            </Head>
            <GlobalStyle />
            <Nav
                logo={logo}
            />

            <main className="section">
                <section className={AboutStyles.section}>
                    <Fade left>
                        <div>
                            <img src="/image/Mask Group 17.png" className={AboutStyles.heroImg} />
                        </div>
                    </Fade>
                    <Fade bottom cascade delay={1000}>
                        <div className={AboutStyles.heroContent}>
                            <h4>Mobile games</h4>
                            <p>to reach your customers in an entirely new way</p>
                        </div>
                    </Fade>
                </section>

                <section className={AboutStyles.section}>
                    <div className={AboutStyles.mobileServices}>
                        <div className={AboutStyles.servicesWrapper}>
                            <Fade left>
                                <div className={AboutStyles.serviceItem}>
                                    <div>
                                        <img src="/Icons/game-development.svg" id="icon" />
                                    </div>
                                    <div>
                                        <h5>Mobile Games</h5>
                                        <p>ENGAGE YOUR AUDIENCE IN THE COMFORT OF THEIR HOME-THROUGH
                                            THEIR PHONE (IOS, ANDROID OR WEB)</p>
                                    </div>
                                </div>
                            </Fade>
                            <Fade left delay={100}>
                                <div className={AboutStyles.serviceItem}>
                                    <div>
                                        <img src="/Icons/stadium.svg" id="icon" />
                                    </div>
                                    <div>
                                        <h5>EVENT-BASED GAMES</h5>
                                        <p>ADD A GAMIFIED, WOW ELEMENT TO YOUR EVENTS OR ACTIVATION</p>
                                    </div>
                                </div>
                            </Fade>
                            <Fade left delay={200}>
                                <div className={AboutStyles.serviceItem}>
                                    <div>
                                        <img src="/Icons/virtual-reality-2.svg" id="icon" />
                                    </div>
                                    <div>
                                        <h5>VR/AR GAMES</h5>
                                        <p>LOOKING FOR SOMETHING A LITTLE MORE IMMERSIVE? FIND OUT MORE
                                            ABOUT OUR VR AND AR DESIGN AND DEVELOPMENT CAPABILITIES.</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className={AboutStyles.mobileImg}>
                            <Fade right>
                                <img src="/image/Mask Group 18.png" />
                            </Fade>
                        </div>
                    </div>
                </section>

                <div id="themeSwap"></div>
                <CaseStudy />

                <section className={AboutStyles.section}>
                    <div className={AboutStyles.devTitle}>
                        <Fade bottom cascade>
                            <h2>Our game development process</h2>
                        </Fade>
                    </div>
                    <div>
                        <Fade bottom delay={300}>
                            <Carousel
                                Previous="none"
                                fade="true"
                                nextLabel=""
                            >
                                <Carousel.Item>
                                    <CorItem
                                        num="01"
                                        body="We meet with your team to discuss your marketing objectives, campaigns, ideal customer And any other relevant information."
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <CorItem
                                        num="02"
                                        body="We’ll conceptualise 2-3 game ideas that suit your situation perfectly"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <CorItem
                                        num="03"
                                        body="Once you choose your favourite idea, we’ll start creating the prototype, allowing You to play a basic version of the game."
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <CorItem
                                        num="04"
                                        body="After-which we’ll work on the mvp, filling in the design elements, music and sound as Well as improving the gameplay."
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <CorItem
                                        num="05"
                                        body="The last step includes doing final touchups, game testing, quality assurance, and prepping For the relevant app stores."
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Fade>
                    </div>
                </section>
                <section className={AboutStyles.section}>
                    <div className={AboutStyles.container}>
                        <Fade bottom>
                            <ContactSection
                                image="/image/wreck-ship-sunken-steamboat-ocean-sandy-bottom_107791-620.png"
                                title="Don’t be afraid"
                                body="That we’re still building our portfolio. Get In touch to take advantage of our favourable Rates while we’re still feeling generous."
                                button="Brief us"
                            />
                        </Fade>
                    </div>
                </section>
            </main>
        </>
    )
}