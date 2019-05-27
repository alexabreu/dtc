import React from 'react';
import cn from 'classnames';

import SignupForm from './signup';

import Styles from './styles/footer.module.scss';

export default () => (
  <footer className={Styles.footer}>
    <section className={Styles.section}>
      <SignupForm />
    </section>
    <section className={Styles.section}>
      <h5>Office Address</h5>
      <address>
        <p>406 State Street, Suite 2</p>
        <p>Ellsworth, ME 04605</p>
        <p><strong>Phone: <a className="primary" href="tel:(800) 244-6431">(800) 244-6431</a></strong></p>
      </address>
    </section>
    <section className={Styles.section}>
      <h5>Hours of Operation</h5>
      <p>Monday and Thursday</p>
      <p>8 AM - 8 PM</p>
    </section>
    <section className={cn(Styles.section, Styles.clear)}>
      <p><span role="img" aria-label="Copyright. Downeast Treatment Center, All Rights Reserved">©️</span> Downeast Treatment Center, All Rights Reserved</p>
    </section>
  </footer>
);