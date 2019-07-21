import React from 'react';
import cn from 'classnames';

import SignupForm from './signup';

import Styles from './styles/footer.module.scss';

export default () => (
  <footer className={Styles.footer}>
    <section className={Styles.section}>
      <SignupForm />
    </section>
    <div className={Styles.wrapper}>
      <section className={Styles.section}>
        <h5>Office Address</h5>
        <address>
          <p>406 State Street, Suite 2</p>
          <p>Ellsworth, ME 04605</p>
        </address>
      </section>
      <section className={Styles.section}>
        <h5>Hours of Operation</h5>
        <p>Monday &amp; Thursday</p>
        <p>8 AM - 8 PM</p>
      </section>
      <section className={Styles.section}>
        <h5>Phone Numbers</h5>
        <p>Mon – Fri, 8 AM – 5 PM</p>
        <strong><a className="primary" href="tel:(207) 667-6890">(207) 667-6890</a></strong>
        <p>Mon &amp; Thurs, 8 AM – 8 PM</p>
        <strong><a className="primary" href="tel:(207) 412-0973">(207) 412-0973</a></strong>
        <p>After Hours Answering Service</p>
        <strong><a className="primary" href="tel:(800) 244-6431">(800) 244-6431</a></strong>
      </section>
    </div>
    <section className={cn(Styles.section, Styles.clear)}>
      <p><span role="img" aria-label="Copyright. DownEast Treatment Center, All Rights Reserved">©️</span> DownEast Treatment Center, All Rights Reserved</p>
    </section>
  </footer>
);