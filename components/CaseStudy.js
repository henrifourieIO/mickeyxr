import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ServicePages.module.css";

export default function CaseStudy({
  aboutTitle, 
  aboutBody, 
  content1Title, 
  content1Body, 
  content2Title, 
  content2Body}) {
  return (
    <section className="section">
      <div className={`${styles.caseGrid}`} style={{marginBottom: '3em'}}>
        <div>
          <Image
            src="/image/yebo-1.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div>
          <h2>{aboutTitle}</h2>
          <p>{aboutBody}</p>
        </div>
      </div>

      <div className={styles.caseGrid2}>
        <div>
          <h2>{content1Title}</h2>
          <p>
            {content1Body}
          </p>
        </div>
        <div>
          
        </div>
      </div>

      <div className={styles.caseGrid}>
        <div>
        </div>
        <div>
          <h2>{content2Title}</h2>
          <p>
            {content2Body}
          </p>
        </div>
      </div>
    </section>
  );
}
