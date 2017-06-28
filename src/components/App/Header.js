import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const LoggedLi = styled.li`
    display: ${props => props.logged ? 'inline' : 'none'};
`;
const Li = styled.li`
    display: ${props => props.logged ? 'none' : 'inline'};
`;

const Ul = styled.ul`
    display: ${props => props.block ? 'block' : 'inline'};

`;

const Header = ({items, logged}) => {
    return (
    <ul>
        <li><Link to="/login" className="btn btn-default">login</Link></li>
        <li><Link to="/search" className="btn btn-default">search</Link></li>
    </ul>
    )
};


Header.propTypes = {
  items: PropTypes.array
};

export default Header;