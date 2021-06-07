import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/ServicePages.module.css';

export default function CaseStudy() {

    return(
        <section className="section">
            <div className={styles.caseGrid}>
                <div>
                    <Image src="/image/2220sanbs.webp" layout="fill" objectFit="contain" /></div>
                <div>
                    <h2>Saving Lives is no game, until now!</h2>
                    <p>
                        The SANBS approached us to find a way to resonate with the Gen Z and younger audience. Traditional Marketing Doesn't work well on this hyper-stimulated, gaming-crazed, Digitally-enabled young generation-so we kicked it up a notch.
                    </p>
                    <Link href="/about">
                        <button type="button" className="btn btn-outline-light">Tell Me More</button>
                    </Link>   
                </div>
            </div>

            <div className={styles.caseGrid2}> 
                <div>
                    <h2>More than simply a game</h2>
                    <p>
                        It's 2021 yet some things are a little backwards.
                        Including the games insdustry, with most main charackters being white males.
                        So we set out to shake things up a little, byintroducing naledi- one of the very few black female lead charackters in the gaming world.
                        Catch her sliding around in her afrofutursitic gear, in this addictive, super-casual game.
                    </p>
                    <Link href="/about">
                        <button type="button" className="btn btn-outline-light">Tell Me More</button>
                    </Link>   
                </div>
                <div>
                    <Image src="/image/22240.webp" layout="fill" objectFit="contain" /></div>
            </div>
        </section>
    )
}