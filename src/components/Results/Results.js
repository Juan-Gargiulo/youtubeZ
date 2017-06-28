import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import './result.css'




const Results = ( { image, title } ) => {



    return (
        <div className="list-item">
            <div className="caption">
                <img className="imgResult" src={image} alt={title}/>
                <p>{ _.truncate(title,30) }</p>
            </div>
        </div>
    )   
}

Results.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string
};

export default Results;

