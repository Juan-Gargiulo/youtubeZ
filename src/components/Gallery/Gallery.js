import React from 'react';
import Results from '../Results/Results'

class Gallery extends React.Component {
  constructor() {
    super();
  }



  render() {

    const { videos } = this.props

    console.log(videos)

    if(Object.keys(videos).length === 0)
        return null
     
    return (
        <div>
            { videos.map( v => 
              <Results 
                image={v.snippet.thumbnails.medium.url} 
                title={v.snippet.title}
              /> )}
        </div>
    )

  }
}

export default Gallery;
