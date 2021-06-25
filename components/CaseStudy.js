import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/ServicePages.module.css';

export default function CaseStudy() {

    return(
        <section className="section">
            <div className={styles.caseGrid}>
                <div>
                    <Image src="/images-mic/Mik-XR.jpg" layout="fill" objectFit="contain" />
                </div>
                <div>
                    <h2>About Mickey</h2>
                    <p>
                        Mickey Adler advises brave South African (& global) companies on Extended Reality (VR/AR/MR) technologies- helping them <strong>understand, adopt and implement</strong> immersive solutions, apps and games.
                    </p>
                </div>
            </div>

            <div className={styles.caseGrid2}> 
                <div>
                    <h2>Virtual / Augmented Reality For Enterprise & Corporates</h2>
                    <p>
                        <ul>
                            <li>VR/AR education and adoption;</li>
                            <li>VR/AR strategy development;</li>
                            <li>VR/AR implementation and execution</li>
                        </ul>
                    </p>   
                </div>
                <div>
                    <Image src="/image/1994.png" layout="fill" objectFit="contain" /></div>
            </div>

            <div className={styles.caseGrid}>
                <div>
                    <Image src="/image/123Z_2101.w020.n001.946B.p15.946.png" layout="fill" objectFit="contain" />
                </div>
                <div>
                    <h2>Virtual / Augmented Reality For Brands & Agencies</h2>
                    <p>
                        <ul>
                            <li>VR/AR campaign strategy</li>
                            <li>Social VR/AR implementation</li>
                            <li>Immersive campaign development</li>
                        </ul>
                    </p>
                </div>
            </div>
        </section>
    )
}