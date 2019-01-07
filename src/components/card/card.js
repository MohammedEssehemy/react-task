import React from 'react';
import classes from './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// single card item
const card = (props) => {

    return (
        <div className={classes.card}>

            <div className={classes.image}>
                <div className={classes.bg}><img alt="" src={props.amiibo.image} /></div>
                <div className={classes.icons}>
                    <FontAwesomeIcon icon="info-circle" className={classes.icon} />
                </div>
            </div>
            <div className={classes.info}>
                <div className={classes.ser}>{props.amiibo.amiiboSeries}</div>
                <div className={classes.name}>{props.amiibo.name}</div>
                <div className={classes.ser}>{props.amiibo.type}</div>
            </div>

        </div>

    );
}
export default card;