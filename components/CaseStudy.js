import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ServicePages.module.css";

export default function CaseStudy() {
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
          <h2>About Mickey</h2>
          <p>
            Mickey started his formal XR career in 2016, heading up business
            development of the EMEA region for AwakenVR. During his time there,
            he worked on HMD VR and mobile AR projects for the likes of Warner
            Brothers (DC Comics), Diageo, Seychelles Tourism and Rugby South
            Africa.
          </p>
          <p>
            Since then, he has spent the last five years developing himself as
            an XR strategist, enabling companies to understand, adopt and
            implement immersive technology solutions. His expertise spans the
            likes of enterprise workforce productivity (MR), workforce training
            (VR), experiential marketing (VR & mobile AR) and immersive retail
            solutions (VR & mobile AR).
          </p>
          <p>
            He has consulted and given talks on the adoption and implementation
            of XR to a plethora of companies, including PWC Canada and Comicon
            Africa.
          </p>
        </div>
      </div>

      <div className={styles.caseGrid2}>
        <div>
          <h2>XR STRATEGIST</h2>
          <p>
            Strategy, ideation and implementation of XR projects for enterprise-
            utilizing the optimal hardware and tech stack for each unique
            solution.
          </p>
        </div>
        <div>
          
        </div>
      </div>

      <div className={styles.caseGrid}>
        <div>
        </div>
        <div>
          <h2>XR UX DESIGNER</h2>
          <p>
            Ideation and creation of XR UX (user experience) mockups and
            “wireframes”. Platform experience includes: ShapesXR, Adobe Aero,
            Adobe XD (for mobile AR)
          </p>
        </div>
      </div>
    </section>
  );
}
