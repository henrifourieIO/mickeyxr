import React, { useState, useContext } from 'react'
import { elastic as Menu } from 'react-burger-menu';
import styles from '../styles/Nav.module.css';
import Img from 'next/image';
import Lnk from 'next/link';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

export default function Nav(props) {

  return (
    <nav >
      <div className={styles.header}>
        <div className={styles.navBar}>
          <div  style={{cursor: "pointer"}}>
            <Lnk href="/">
              <Img src="/images-mic/MickeyXR.png" width={150} height={35} />
            </Lnk>
          </div>
          <div  style={{cursor: "pointer"}}>
            <Lnk href="https://www.linkedin.com/in/mickeyxr/" target="_blank" >
              <Img src="/images-mic/linkedin-icon-18-256.png" width={35} height={35} />
            </Lnk>
          </div>
        </div>
      </div>
    </nav>
  )
}