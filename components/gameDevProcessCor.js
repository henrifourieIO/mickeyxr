import AboutStyles from '../styles/ServicePages.module.css';

export default function CorItem(props) {

    return (
        <div className={AboutStyles.calList}>
            <div>
                <span className={AboutStyles.calNum}>{props.num}</span>
            </div>
            <div>
                <p className={AboutStyles.calBody}>
                    {props.body}
                </p>
            </div>
        </div>
    )
}