import React from 'react';
import cn from 'classnames';

import IconStyles from '../styles/icon.module.scss';

export default ({className, onClick}) => (
  <svg version="1.1" className={cn(IconStyles.icon, className)}  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      width="459px" height="459px" viewBox="0 0 459 459" onClick={onClick} title="Toggle menu.">
      <g>
        <path d="M0,382.5h459v-51H0V382.5z M0,255h459v-51H0V255z M0,76.5v51h459v-51H0z" />
      </g>
  </svg>
)
