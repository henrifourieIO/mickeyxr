import Link from "next/link";
import ConSeStyles from '../styles/ContactSection.module.css';

export default function ContactSection(props) {

    return (
        <div className={ ConSeStyles.wrapper }>
            <div>
                <img src={ props.image } alt={ props.alt } />
            </div>

            <div>
                <h4>{ props.title }</h4>
                <p>{ props.body }</p>
            </div>
        </div>
    )
}