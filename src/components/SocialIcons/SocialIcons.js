import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SocialIcons = () => {
  
  return (
    <div className="social-icons animate-icons">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/zackclan"><i className="hub fab fa-github"></i></a>
      </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;