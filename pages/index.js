import Head from "next/head";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";
import ContactSection from "../components/ContactSection";
import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import Fade from "react-reveal/Fade";
import CaseStudy from "../components/CaseStudy";
import BlogSection from "../components/blog/BlogSection";
import Hero from "../components/Hero";

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
        <Hero />

        <section style={{ marginBottom: "4em" }}>
          <CaseStudy
            aboutTitle={"ABOUT MICKEY"}
            aboutBody="
              Mickey started his formal XR career in 2016, heading up business development of the EMEA region 
              for AwakenVR. During his time there, he worked on HMD VR and mobile AR projects for the likes 
              of Warner Brothers (DC Comics), Diageo, Seychelles Tourism and Rugby South Africa.
              <br><br>
              Since then, he has spent the last five years developing himself as an XR strategist, enabling 
              companies to understand, adopt and implement immersive technology solutions. His expertise spans 
              the likes of enterprise workforce productivity (MR), workforce training (VR), experiential marketing 
              (VR & mobile AR) and immersive retail solutions (VR & mobile AR).
              <br><br>
              He has consulted and given talks on the adoption and implementation of XR to a plethora of companies, 
              including PWC Canada and Comicon Africa.
              "
            content1Title={"XR STRATEGIST"}
            content1Body={
              "Strategy, ideation and implementation of XR projects for enterprise- utilizing the optimal hardware and tech stack for each unique solution."
            }
            content2Title={"XR UX DESIGNER"}
            content2Body={
              "Ideation and creation of XR UX (user experience) mockups and “wireframes”. Platform experience includes: ShapesXR, Adobe Aero, Adobe XD (for mobile AR)"
            }
          />
        </section>

        <Fade>
          <div style={{ marginBottom: "6em" }}>
            <div className={styles.container}>
              <div style={{ marginBottom: "2em" }}>
                <h2>XR Insights</h2>
              </div>
              <div>
                <BlogSection />
              </div>
            </div>
          </div>
        </Fade>

        <section>
          <div className={styles.container}>
            <Fade bottom>
              <ContactSection
                image={"/image/yebo-2.png"}
                title={"READY TO CHAT?"}
                body={"Feel free to set up a meeting or give me a shout :)"}
                button="Book A Meeting"
                button_url={"https://calendly.com/mickeyxr/15min"}
              />
            </Fade>
          </div>
        </section>
      </div>
    </>
  );
}
