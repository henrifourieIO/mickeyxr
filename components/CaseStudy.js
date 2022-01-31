import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ServicePages.module.css";
import Fade from "react-reveal/Fade";

export default function CaseStudy({
  aboutTitle,
  aboutBody,
  content1Title,
  content1Body,
  content2Title,
  content2Body,
}) {
  return (
    <section className="section">
      <Fade>
        <div className={`${styles.caseGrid}`} style={{ marginBottom: "3em" }}>
          <div>
            <Image src="/image/yebo-1.png" layout="fill" objectFit="contain" />
          </div>
          <div>
            <h2>{aboutTitle}</h2>
            <p>Mickey started his formal XR career in 2016, heading up business development of the EMEA region for AwakenVR. During his time there, he worked on HMD VR and mobile AR projects for the likes of Warner Brothers (DC Comics), Diageo, Seychelles Tourism and Rugby South Africa. 
              <br/><br/> 
              Since then, he has spent the last five years developing himself as an XR strategist, enabling companies to understand, adopt and implement immersive technology solutions. His expertise spans the likes of enterprise workforce productivity (MR), workforce training (VR), experiential marketing (VR & mobile AR) and immersive retail solutions (VR & mobile AR). 
              <br/><br/> 
              He has consulted and given talks on the adoption and implementation of XR to a plethora of companies, including PWC Canada and Comicon Africa.</p>
          </div>
        </div>
      </Fade>

      <div className={styles.grid} style={{marginTop: "12em", marginBottom: '12em'}}>
        <Fade>
          <div>
            <div>
              <h2>{content1Title}</h2>
              <p>{content1Body}</p>
            </div>
          </div>
        </Fade>
        <Fade delay={300}>
          <div>
            <div>
              <h2>{content2Title}</h2>
              <p>{content2Body}</p>
              
            </div>
          </div>
        </Fade>
        <Fade delay={600}>
          <div>
            <div style={{display: "flex", justifyContent: 'center'}} >
            <img src="/image/AIXR_Member_Round_Badge.png" style={{width: '70%'}} />
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
