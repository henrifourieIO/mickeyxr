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

  // Videos
  const videosRes = await fetch(`${API_URL}/videos`);
  const videos = await videosRes.json();

  // Homepage Content
  const contentRes = await fetch(`${API_URL}/homepage-content`);
  const content = await contentRes.json();

  return {
    props: {
      blogs: blogs,
      videos: videos,
      content: content,
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
              <h1>{props.content.hero_text}</h1>
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
            aboutTitle={props.content.about_title}
            aboutBody={props.content.about_body}
            content1Title={props.content.section_1_title}
            content1Body={props.content.content_1_body}
            content2Title={props.content.content_2_title}
            content2Body={props.content.content_2_body}
          />
        </section>
        

        {props.videos ? <Fade>
          <section className={styles.section} style={{marginBottom: '4em'}}>
            <div className={styles.container}>
              <div style={{ marginBottom: "2em" }}>
                <h2>{props.content.videos_title}</h2>
              </div>
              <div>
                <VideoCarousel data={props.videos} /> 
              </div>
            </div>
          </section>
        </Fade>: null}

        {props.blogs ? <Fade>
          <section className={styles.section} style={{marginBottom: '4em'}}>
            <div className={styles.container}>
              <div style={{ marginBottom: "2em" }}>
                <h2>{props.content.blogs_title}</h2>
              </div>
              <div>
                <BlogSection data={props.blogs} />
              </div>
            </div>
          </section>
        </Fade> : null}

        <section className={styles.section}>
          <div className={styles.container}>
            <Fade bottom>
              <ContactSection
                image={'/image/yebo-2.png'}
                title={props.content.contact_title}
                body={props.content.contact_body}
                button="Book A Meeting"
                button_url={props.content.contact_button_url}
              />
            </Fade>
          </div>
        </section>
      </div>
    </>
  );
}
