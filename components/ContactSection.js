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
                <Link href="https://calendly.com/mickeyxr/15min?month=2021-06" >
                    <button className="btn btn-outline-light">{ props.button }</button>
                </Link>
            </div>
        </div>
    )
}