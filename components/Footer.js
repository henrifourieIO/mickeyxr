import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {

    return (
    
    <footer style={{width: "100%", padding: "1em 1em"}}>
        <div style={{textAlign: "center"}}>
            <p>© AntiReality 2021 | Made with <FontAwesomeIcon icon={faHeart} style={{color: "var(--primary)", width: "1.1em"}}/> by Hamba</p>
        </div>
    </footer> 
    ) 
}