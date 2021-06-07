import React, { useState, useContext } from 'react'
import { elastic as Menu } from 'react-burger-menu';
import styles from '../styles/Nav.module.css';
import Img from 'next/image';
import Lnk from 'next/link';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';


// make a new context
const MyContext = React.createContext();

// create the provider
const MyProvider = (props) => {
  const [menuOpenState, setMenuOpenState] = useState(false)
  
  return (
    <MyContext.Provider value={{
      isMenuOpen: menuOpenState,
      toggleMenu: () => setMenuOpenState(!menuOpenState),
      stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen)
    }}>
      {props.children}
    </MyContext.Provider>
  )
}

// create a button that calls a context function to set a new open state when clicked
const Button = () => {
  const ctx = useContext(MyContext)
  return (
    <button onClick={ctx.toggleMenu} className={styles.burger}>
      <div />
      <div />
      <div />
    </button>
  )
}

// create a navigation component that wraps the burger menu
const Navigation = () => {
  const ctx = useContext(MyContext)

  return (
    <Menu
      width={"100%"}
      customBurgerIcon={false}
      isOpen={ctx.isMenuOpen}
      onStateChange={(state) => ctx.stateChangeHandler(state)}
      itemListElement="div"
      customCrossIcon={ <Fade delay={1050}><FontAwesomeIcon icon={faTimes} /></Fade> }
    >
      <div className={styles.menu}>
        <div className={styles.nav}>
          <ul>
            <li><Fade bottom delay={700}><Lnk href="/virtual-reality">Virtual Reality</Lnk></Fade></li>
            <li><Fade bottom delay={800}><Lnk href="/augmented-reality">Augmented Reality</Lnk></Fade></li>
            <li><Fade bottom delay={900}><Lnk href="mixed-reality">Mixed Reality</Lnk></Fade></li>
            <li><Fade bottom delay={1000}><Lnk href="mobile-games">Game Development</Lnk></Fade></li>
            <li><Fade bottom delay={1100}><Lnk href="/about">About</Lnk></Fade></li>
            <li><Fade bottom delay={1200}><Lnk href="/experiences">Experiences</Lnk></Fade></li>
          </ul>
        </div>
        <Fade delay={1500}>
          <div className={styles.divider}> </div>
        </Fade>
        <div className={styles.contact}>
          <Fade bottom delay={1600}>
          <span>Feeling Brave?!</span>
          <p>
            <a href="mailto:hello@antireality.co.za">hello@antireality.co.za</a>
          </p>
          </Fade>
        </div>
      </div>
    </Menu>
  )
}

export default function Nav(props) {

  return (
    <MyProvider>
    <nav >
      <div className={styles.header}>
        <div className={styles.navBar}>
          <div  style={{cursor: "pointer"}}>
            <Lnk href="/"><Img src={props.logo} width={200} height={55}/></Lnk>
          </div>
          <Button />
        </div>
      </div>
    </nav>
    <Navigation />
    </MyProvider>
  )
}