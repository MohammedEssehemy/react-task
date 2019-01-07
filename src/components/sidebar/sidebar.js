import React from 'react';
import classes from './sidebar.css';
import pp from '../../pp.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux';

// the sidebar component which contains some user data 
const sidebar = (props) => {

    return (
        <div className={classes.sidebar}>
            <div className={classes.pp}>
                <div>
                    <img src={pp} alt="" />
                    <span>
                        Jane Doe
                        <span className={classes.details}>
                            level-3 player
                        </span>
                    </span>
                </div>
            </div>
            <div className={classes.list}>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={['fab', 'accusoft']} className={classes.i} />
                        All Cards <span className={classes.results}>{props.noFilteredCards} / {props.noAllCards}</span>
                    </li>
                    <li>
                        <div><FontAwesomeIcon icon="users" className={classes.i} />
                            Your Friends</div>
                    </li>
                    <li>
                        <FontAwesomeIcon icon="gamepad" className={classes.i} />
                        Your Games
                    </li>
                    <li>
                        <FontAwesomeIcon icon="shopping-cart" className={classes.i} />
                        Shop
                    </li>
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      noAllCards: state.noAllCards,
      noFilteredCards: state.noFilteredCards
    }
  }

export default connect(mapStateToProps)(sidebar);