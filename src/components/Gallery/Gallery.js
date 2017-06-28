import React from 'react';
import PropTypes from 'prop-types'

//components
import Results from '../Results/Results'

//css
import './gallery.css'

const Gallery = ( {videos} ) => {
	
	if(Object.keys(videos).length === 0) return <div></div>
	
	function render(){
		return videos.map( (v,k) => 
			<Results 
				key={k}
				image={v.snippet.thumbnails.medium.url} 
				title={v.snippet.title}
			/>);
	}
	
	return (
		<div className="gallery">
			{ render() }
		</div>
	)
}


Gallery.PropTypes = {
	videos: PropTypes.object
}

export default Gallery;
