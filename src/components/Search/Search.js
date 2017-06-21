import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import axios            from 'axios'
import API from '../../api.js'

//components
import Gallery          from '../Gallery/Gallery'

class Search extends Component {
  constructor() {
    super();
    this.state = { 
        query: '' ,
        videos: {},
    };

    this.handleInputSearch = this.handleInputSearch.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleInputSearch(event){
      this.setState({
          query: event.target.value
      })
  }


  handleSearch(){

    const { tkn } = this.props
    const { query } = this.state
    console.log(tkn)
    API.videos.search(query,tkn)
        .then( res => this.setState({videos: res}) )

  }

  render() {
    return (
        <div>
            <label>
                Search videos:
                <input 
                    type="text" 
                    name="search"
                    value={this.state.query}
                    onChange={this.handleInputSearch} 
                />
            </label>
            <button onClick={this.handleSearch}>Buscar</button>
            <Gallery videos={this.state.videos}/>
        </div>
    );
  }

}

Search.PropTypes = {
    tkn: PropTypes.string
}

const mapStateToProps = state => ({
  tkn: state.app.tkn,
});

export default connect(
  mapStateToProps,
  null,
)(Search);
