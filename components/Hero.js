import styles from "../styles/Home.module.css";
import Fade from "react-reveal/Fade";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera   } from "@react-three/drei";

import Model from "./Three/Model";

export default function Hero() {
  return (
    <section className={styles.hero} style={{ marginBottom: "4em" }}>
      <div className={styles.heroWrapper}>
        <Fade bottom>
          <h1>VIRTUAL, AUGMENTED & MIXED REALITY CONSULTANT.</h1>
        </Fade>
      </div>

      <Fade right>
        <div className={styles.canvas}>
            
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight />
            <pointLight position={[10, 10, 10]} color={'#2211ff'}  />
            <pointLight position={[-10, 10, 10]} color={'#fff'}  />
            <Suspense fallback={null}>
              <Model position={[0, 0, 1.8]} scale={4.2} rotation={[0, 0, 0]} />
            </Suspense>
          </Canvas>
          <div className={styles.fade} />
        </div>
      </Fade>
    </section>
  );
}
