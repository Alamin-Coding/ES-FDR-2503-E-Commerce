import React from 'react'
import { Link } from 'react-router'

const RedButton = ({ title, link, className }) => {
    return (
        <Link to={link}
            className={`inline-block py-4 px-12 bg-secondary text-white rounded-sm ${className || ''}`}>
          {title}
          </Link>
    );
};
export default RedButton