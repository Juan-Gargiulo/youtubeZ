import React            from 'react';
import Gallery          from './Gallery.js'

import axios            from 'axios'

class Search extends React.Component {
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
        .then( (res) => {
            this.setState({
                videos: res.data.items
            })
    })
    .catch( (err) => console.log(err) )
  }

  render() {

    const { tkn } = this.props

    if( !tkn ) {
        return null
    }

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

export default Search;
