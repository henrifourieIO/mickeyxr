import Head from 'next/head'
import Nav from '../components/Nav';
import styles from '../styles/ContactPage.module.css';
import ContactForm from "../components/ContactForm";
import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

export async function getStaticProps() {
    const headers = { 'Content-Type': 'application/json', 'Accept': 'application/json, text/plain, */*',
    'User-Agent': '*', }
    
    const fetchAPI = await fetch("https://backend.antireality.co.za/ql", {
        method: "POST",
        headers,
        body: JSON.stringify({
            query: 
            `
                query MyQuery {
                    page(id: "cG9zdDo2NQ==") {
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

export default function Contact(data) {
    console.log(data)
    const logo = "/image/logo.png";

    const GlobalStyle = createGlobalStyle`
    html {
    --primary: #fff;
    --secondary: #160121;
    }
  `;

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
                <section className={styles.wrapper}>
                    <div>
                        <img src="/image/wreck-ship-sunken-steamboat-ocean-sandy-bottom_107791-620.png" className={styles.img} />

                        <div className={styles.content}>
                            <h4>Don’t get in touch</h4>
                            <p>Unless you really want to innovate and leap ahead Of the competition</p>
                        </div>
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </section>
            </main>
        </>

    )
}