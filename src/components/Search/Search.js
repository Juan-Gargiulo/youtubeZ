import React, { Component } from 'react'
import axios            from 'axios'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//components
import Gallery          from '../Gallery/Gallery'

class Search extends Component {
  constructor() {
    super();
    this.state = { 
        query: '' ,
        videos: {}
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

    const config = { 
        method: 'get',
        headers: {
            'Authorization': 'Bearer ' + tkn,
            'Accept': 'application/json'
        },
        params: { 
            'part': 'snippet', 
            'q': query, 
            'maxResults': 50
        }
    }

    axios.get('https://www.googleapis.com/youtube/v3/search',config)
        .then( res => {
            this.setState({
                videos: res.data.items
            })
    })
    .catch( (err) => console.log(err) )
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
