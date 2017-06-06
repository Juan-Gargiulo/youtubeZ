import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardActions, CardTitle } from 'react-mdl';

const Results = ( { image, title } ) => {

    return (
        <div style={{display: 'inline'}}>
        <Card shadow={0} style={{width: '256px', height: '256px', background: `url(${image}) center / cover`, margin: 'auto'}}>
            <CardTitle expand />
            <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                    {title}
                </span>
            </CardActions>
        </Card>
        </div>
    )
    
}

Results.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string
};

export default Results;

