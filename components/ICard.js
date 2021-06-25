import ICardStyles from "../styles/ICardStyles.module.css";
import Link from 'next/link';

export default function ICard(props) {

    return (
        <Link href={props.link} style={{cursor: "pointer"}}>
            <div className={ICardStyles.card}>
                <div className={ICardStyles.imgWrapper}>
                <img 
                src={props.image}
                id="icon"
                />

                </div>
                <h5>{props.title}</h5>
            </div>
        </Link>
    )

}