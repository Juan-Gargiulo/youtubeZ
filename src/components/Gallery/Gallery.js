import React from 'react';
import Results from '../Results/Results'
import PropTypes from 'prop-types'

const Gallery = ( {videos}) => {

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

Gallery.PropTypes = {
  videos: PropTypes.object
}

export default Gallery;
