import React from 'react';
import cn from 'classnames';

import IconStyles from '../styles/icon.module.scss';

export default ({className, onClick}) => (
  <svg version="1.1" className={cn(IconStyles.icon, className)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="612px" height="612px" viewBox="0 0 612 612" onClick={onClick} title="Close menu.">
    <g>
      <g>
        <polygon points="612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397 
          306,341.411 576.521,611.397 612,575.997 341.459,306.011"/>
      </g>
    </g>
  </svg>
)