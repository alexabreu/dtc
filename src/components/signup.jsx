import React from 'react';
import cn from 'classnames';

import Styles from './styles/form.module.scss';

export default () => (
  <div id="mc_embed_signup">
    <h3>Subscribe To Updates</h3>
    <form action="https://dtcme.us4.list-manage.com/subscribe/post?u=2807932a78b0abfbbdcd254f2&amp;id=64d341423f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className={Styles.form} target="_blank" noValidate>
      <div id="mc_embed_signup_scroll">
        <div className={cn(Styles.field)}>
          <label htmlFor="mce-EMAIL">Email Address </label>
          <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required/>
        </div>
        <div className={cn(Styles.field)}>
          <label htmlFor="mce-FNAME">First Name </label>
          <input type="text" name="FNAME" className="" id="mce-FNAME"/>
        </div>
        <div className={cn(Styles.field)}>
          <label htmlFor="mce-LNAME">Last Name </label>
          <input type="text" name="LNAME" className="" id="mce-LNAME"/>
        </div>
        <div id="mce-responses" className="clear">
          <div className="response" id="mce-error-response" style={{ display: 'none'}}></div>
          <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
        </div>
        <div aria-hidden="true"><input type="text" name="b_2807932a78b0abfbbdcd254f2_64d341423f" tabIndex="-1" style={{ display: 'none' }}/>
          <div className="clear"><input className={cn(Styles.button, Styles.secondary)} type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" title="Subscribe to email updates."/></div>
        </div>
      </div>
    </form>
  </div>
)