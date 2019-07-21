import React from "react"
import Main from "../containers/main";

import Styles from './styles/about.module.scss';

export default () => (
  <Main
    title="About Us"
    link="/about"
  >
    <div className={Styles.container}>
      <section className={Styles.video}>
        <iframe title="WABI TV DownEast Treatment Center Video" src='https://www.wabi.tv/templates/2015_Sub_Video_Share?contentObj=493189141' width="100%" height="100%" frameBorder='0' scrolling='no'></iframe>
      </section>
      <section className={Styles.content}>
        <p>We’re here to help you regardless of your ability to pay. Free services available.</p>

        <h4>What is Medication Assisted Treatment (MAT)?</h4>

        <p>Addiction is a medical condition that often requires a medical response. MAT is an evidence-based treatment approach utilizing medication to achieve long-term recovery. Usually, MAT integrates medication with counseling. MAT saves lives.</p>


        <h4>Isn’t it just replacing one drug for another?</h4>
      
        <p>No. MAT relieves withdrawal symptoms and cravings so you can take control of your body and your life again.</p>
        <p>"MAT programs provide a safe and controlled level of medication to overcome the use of an abused opioid. When provided at the proper dose, medications used in MAT have no adverse effects on a person’s intelligence, mental capability, physical functioning, or employability."</p>
        <p>&mdash; <a class="primary" href="https://www.samhsa.gov/" target="blank">Substance Abuse and Mental Health Services Administration (SAMHSA).</a></p>
        
        
        <h4>Can I afford this?</h4>
        
        <p>Yes! DownEast Treatment Center accepts all insurance and MaineCare. If you don’t have health insurance, are underinsured, or have high co-pays, we offer NO PAY services.</p>
        
        
        <h4>I have a job. Do I have time for treatment?</h4>
        
        <p>Yes! DownEast Treatment Center has evening and daytime hours. While we recommend attending twice per week at the beginning, we will work with you to create a flexible schedule that helps you succeed.</p>


        <h4>I don’t live in the Ellsworth area. Is this still for me?</h4>

        <p>Yes! The DownEast Treatment Center will work with you until you’re stable in your recovery, and then will help you transition to a provider in your own community. If you need to come back, you are always welcome.</p>
      </section>
    </div>
  </Main>
)
