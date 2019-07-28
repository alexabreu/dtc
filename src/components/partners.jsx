import React from 'react';
import cn from 'classnames';

import Styles from './styles/partners.module.scss';

export default () => (
  <section className={Styles.partners}>
    <h2>Our Partnerships</h2>
    <p>The DownEast Treatment Center is made possible by numerous community partners, the Health Resources and Services Administration, Maine's Substance Abuse and Mental Health Services, U.S. Substance Abuse and Mental Health Administration, Maine Health Access Foundation, and the Stephen &amp; Tabitha King Foundation, along with key organizational support from the following groups.</p>
    <div className={Styles.logos}>
      <div className={cn(Styles.logo, Styles.ha)} title="Healthy Acadia Logo"/>
      <div className={cn(Styles.logo, Styles.amhc)} title="AMHC Logo"/>
      <div className={cn(Styles.logo, Styles.brhc)} title="Bucksport Regional Health Center Logo"/>
      <div className={cn(Styles.logo, Styles.hrsa)} title="Health Resources &amp; Services Administration Logo"/>
      <div className={cn(Styles.logo, Styles.mdih)} title="Mount Desert Island Hospital Logo"/>
      <div className={cn(Styles.logo, Styles.mehaf)} title="Maine Health Access Foundation Logo"/>
      <div className={cn(Styles.logo, Styles.nlbhh)} title="Northern Light Blue Hill Hospital Logo"/>
      <div className={cn(Styles.logo, Styles.nlmch)} title="Northern Light Maine Coast Hospital Logo"/>
      <div className={cn(Styles.logo, Styles.samhs)} title="State of Maine Substance Abuse &amp; Mental Health Services Logo"/>
      <div className={cn(Styles.logo, Styles.stkf)} title="STK Foundatation Logo"/>
      <div className={cn(Styles.logo, Styles.samhsa)} title="Substance Abuse &amp; Mental Health Services Administration Logo"/>
    </div>
  </section>
);