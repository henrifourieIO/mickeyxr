import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/blog.module.css';

export default function BlogCard({title, snipet, image, slug}) {

    return(
        <div key={slug} className={styles.blogCard}>
            <div className={styles.blogCardImage}>
                <img src={`${process.env.API_URL}${image.url}`} style={{width: '100%'}} />
            </div>
            <div className={styles.blogCardContent}>
                <h3>{title}</h3>
                <p>{snipet}</p>
                <Link href={`/blog/${slug}`}>
                    <a style={{cursor: 'pointer'}}>Continue Reading >></a>
                </Link>
            </div>
        </div>
    )
}