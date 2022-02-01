import styles from "../styles/Home.module.css";
import Fade from "react-reveal/Fade";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera   } from "@react-three/drei";
import Model from "./Three/Model";

export default function Hero() {
  const [scale, setScale] = useState(4.5);
  const [width, setWidth] = useState();

  useEffect(() => {
    function handleResize() {
      if(window.innerWidth <= 980) {
        setScale(3)
        console.log(scale)
      }
      else {
        setScale(4.5)
        console.log(scale)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize);
  }, [setScale, scale])

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
              <Model position={[0, 0, 1.8]} scale={scale} rotation={[0, 0, 0]} />
            </Suspense>
          </Canvas>
          <div className={styles.fade} />
        </div>
      </Fade>
    </section>
  );
}
