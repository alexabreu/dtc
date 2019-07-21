import React from 'react';
import cn from 'classnames';

import Styles from './styles/partners.module.scss';

export default () => (
  <section className={Styles.partners}>
    <h2>Our Partnerships</h2>
    <p>The DownEast Treatment Center is made possible by numerous community partners, the Health Resources and Services Administration, Maine’s Substance Abuse and Mental Health Services Administration, Maine Health Access Foundation, and the Stephen &amp; Tabitha King Foundation, along with key organizational support from the following groups.</p>
    <div className={Styles.logos}>
      <div className={cn(Styles.logo, Styles.amhc)} />
      <div className={cn(Styles.logo, Styles.brhc)} />
      <div className={cn(Styles.logo, Styles.hrsa)} />
      <div className={cn(Styles.logo, Styles.mdih)} />
      <div className={cn(Styles.logo, Styles.mehaf)} />
      <div className={cn(Styles.logo, Styles.nlbhh)} />
      <div className={cn(Styles.logo, Styles.nlmch)} />
      <div className={cn(Styles.logo, Styles.samhs)} />
      <div className={cn(Styles.logo, Styles.stkf)} />
    </div>
  </section>
);