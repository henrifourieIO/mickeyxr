import Head from "next/head";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import ICard from "../components/ICard";
import ContactSection from "../components/ContactSection";
import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import Fade from "react-reveal/Fade";
import CaseStudy from "../components/CaseStudy";
import Img from "next/image";
import VideoCarousel from "../components/VideoCarousel";
import BlogSection from "../components/blog/BlogSection";

export async function getServerSideProps() {
  const { API_URL } = process.env;
  // BLogs
  const blogsRes = await fetch(`${API_URL}/blogs`);
  const blogs = await blogsRes.json();

  // about
  const aboutRes = await fetch(`${API_URL}/about`);
  const about = await aboutRes.json();

  // Content Section 1
  const cont1Res = await fetch(`${API_URL}/content-section-01`);
  const cont1 = await cont1Res.json();

  // Content Section 2
  const cont2Res = await fetch(`${API_URL}/content-section-2`);
  const cont2 = await cont2Res.json();

  // Blog Title
  const blogTitleRes = await fetch(`${API_URL}/blog-title`);
  const blogTitle = await blogTitleRes.json();

  // Video Title
  const videoTitleRes = await fetch(`${API_URL}/video-title`);
  const videoTitle = await videoTitleRes.json();

  // Main Heading
  const headingRes = await fetch(`${API_URL}/heading-1`);
  const heading = await headingRes.json();

  // Contact Area
  const contactRes = await fetch(`${API_URL}/contact-area`);
  const contactArea = await contactRes.json();

  return {
    props: {
      blogs: blogs,
      about: about,
      cont1: cont1,
      cont2: cont2,
      blogTitle: blogTitle,
      videoTitle: videoTitle,
      heading: heading,
      contactArea: contactArea,
    },
  };
}

export default function Home(props) {
  const [logo, setLogo] = useState("/image/logo.png");

  const [theme, setTheme] = useState(createGlobalStyle`
    html {
    --primary: #fff;
    --secondary: #160121;
    }
  `);
  const GlobalStyle = theme;

  return (
    <>
      <Head>
        <title>Mickey XR</title>
        <link rel="icon" href="/image/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Nav />
      <GlobalStyle />
      <div id="page-wrap">
        <section className={styles.hero} style={{marginBottom: '4em'}}>
          <div className={styles.art}>
            <Fade left delay={400}>
              <img src="/image/cube.png" />
            </Fade>
            <Fade right delay={300}>
              <img src="/image/cube.png" />
            </Fade>
          </div>

          <div className={styles.heroWrapper}>
            <Fade bottom>
              <h1>{props.heading.heading}</h1>
              <a href="#about">
                <Img src="/images-mic/arrow.png" width={25} height={15} />
              </a>
            </Fade>
          </div>

          <div className={styles.pointerDown}>
            <Fade bottom>
              <a href="#about">
                <i className="fas fa-chevron-down"></i>
              </a>
            </Fade>
          </div>
        </section>
        <section style={{marginBottom: '4em'}}>
          <CaseStudy
            aboutTitle={props.about.title}
            aboutBody={props.about.body}
            content1Title={props.cont1.title}
            content1Body={props.cont1.body}
            content2Title={props.cont2.title}
            content2Body={props.cont2.body}
          />
        </section>
        

        <Fade>
          <section className={styles.section} style={{marginBottom: '4em'}}>
            <div className={styles.container}>
              <div style={{ marginBottom: "2em" }}>
                <h2>{props.videoTitle.Title}</h2>
              </div>
              <div>
                <VideoCarousel />
              </div>
            </div>
          </section>
        </Fade>

        <Fade>
          <section className={styles.section} style={{marginBottom: '4em'}}>
            <div className={styles.container}>
              <div style={{ marginBottom: "2em" }}>
                <h2>{props.blogTitle.title}</h2>
              </div>
              <div>
                <BlogSection data={props.blogs} />
              </div>
            </div>
          </section>
        </Fade>

        <section className={styles.section}>
          <div className={styles.container}>
            <Fade bottom>
              <ContactSection
                image={props.contactArea.image.url}
                title={props.contactArea.title}
                body={props.contactArea.body}
                button="Book A Meeting"
                button_url={props.contactArea.button_url}
              />
            </Fade>
          </div>
        </section>
      </div>
    </>
  );
}
