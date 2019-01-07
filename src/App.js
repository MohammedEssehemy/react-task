import React, { Component } from 'react';
import classes from './App.css';

import Cards from './components/cards';
import Sidebar from './components/sidebar/sidebar'
import { connect } from 'react-redux';
import axios from 'axios';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faInfo, faSearch, faCopy, faGamepad, faInfoCircle, faShoppingCart, faUsers } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faInfo, faSearch, faCopy, faGamepad, faInfoCircle, faShoppingCart, faUsers)

class App extends Component {

  componentDidMount() {
    axios.get(`http://www.amiiboapi.com/api/amiibo/`)
      .then(res => {
        this.props.setAllCards(res.data);
      })
  }

  handleSearch = (e) => {
    this.props.filterCards(e.target.value);
  }
  render() {
    return (
      <div className={classes.container}>

        <div className={classes.App}>

          {/* this is where i display the sidebar */}
          <div className={classes.side}>
            <Sidebar />
          </div>

          {/* there is the main content where i display all of the cards from the api */}
          <div className={classes.main}>
            
            <div className={classes.searchContainer}>
               <input type="text" onChange={this.handleSearch} />
              <span className={classes.sb}><FontAwesomeIcon icon="search" /></span>
              <span className={classes.results}>results {this.props.noFilteredCards} / {this.props.noAllCards}</span>
             
            </div>

            <div className={classes.cards}>
              <Cards cards={this.props.filtered} />
            </div>

          </div>

        </div>

      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    amiibos: state.amiibos,
    filtered: state.filtered,
    noAllCards: state.noAllCards,
    noFilteredCards: state.noFilteredCards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAllCards: (data) => { dispatch({ type: "SET_ALL", data: data }) },
    filterCards: (search) => { dispatch({ type: "FILTER", keywords: search }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
