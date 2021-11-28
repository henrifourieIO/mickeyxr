import Link from "next/link";
import Image from 'next/image';
import ConSeStyles from '../styles/ContactSection.module.css';

export default function ContactSection(props) {
    const { API_URL } = process.env;
    return (
        <div className={ ConSeStyles.wrapper }>
            <div style={{display: "flex", justifyContent: "center"}}>
                <img src={ API_URL + props.image } width={400} height={430} alt={ props.alt } />
            </div>

            <div>
                <h4>{ props.title }</h4>
                <p>{ props.body }</p>
                <a href={props.button_url} >
                    <button className="btn btn-outline-light">{ props.button }</button>
                </a>
            </div>
        </div>
    )
}