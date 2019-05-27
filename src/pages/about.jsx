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
        <iframe title="WABI TV Downeast Treatment Center Video" src='https://www.wabi.tv/templates/2015_Sub_Video_Share?contentObj=493189141' width="100%" height="100%" frameBorder='0' scrolling='no'></iframe>
      </section>
      <section className={Styles.content}>
        <h4>What can I expect at the Downeast Treatment Center (DTC)?</h4>

        <p>At the Downeast Treatment Center, you will receive a comprehensive assessment to determine the appropriate treatment to meet your needs. Once admitted into the program, you will receive group counseling twice per week. Group counseling is offered at three convenient times--morning, mid-day, and evening in order to accommodate your schedule. With continued recovery that includes group participation and drug screening, you will transition to once weekly group therapy. In addition to group counseling, individual counseling services will also be available for those who feel they might benefit from this type of care. You will will also have the opportunity to meet with a certified recovery coach who can provide additional encouragement and support, and at no cost to you.</p>


        <h4>What is medication assisted treatment?</h4>
      
        <p>Medication assisted treatment, or MAT, is an evidence-based treatment approach utilizing medication and counseling to treat substance use conditions. One such prescription medication that is frequently used for treatment of opioid use disorders is called Suboxone or Buprenorphine, a medication that can effectively treat symptoms of opiate craving and withdrawal.</p>
        
        
        <h4>What happens once I complete the first part of my treatment at DTC?</h4>
        
        <p>Once you have received the benefits of our structured program, you will transition your treatment to a primary care clinician who will continue to prescribe medication, and participate in outpatient substance use counseling. We have partnered with an extensive network of community-based primary care clinicians and counselors who function as spokes in the "hub and spoke" treatment model. These clinicians will continue to support you in your recovery by providing on-going MAT once you have completed the initial part of treatment at the Downeast Treatment Center.</p>
        
        
        <h4>What happens if I need more support once I have transitioned my care away from the DTC?</h4>
        
        <p>If you are experiencing difficulty or re-emergence of symptoms, you can easily be referred back to the Downeast Treatment Center for further support and group counseling.</p>


        <h4>How can I afford to pay for treatment?</h4>

        <p>The Downeast Treatment Center accepts MaineCare, private insurance, and self-payment. We also want to ensure that treatment is accessible to all and we have grant funding available for qualifying individuals to reduce self-pay fees.</p>
      </section>
    </div>
  </Main>
)
