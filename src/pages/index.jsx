import React from "react"
import Main from "../containers/main";


export default () => (
  <Main
    title="Downeast Treatment Center"
    description='The Downeast Treatment Center is the hub of a "hub and spoke" treatment model for substance use conditions developed by the Downeast Treatment Network partnership. As a treatment hub, the Downeast Treatment Center offers comprehensive medication assisted treatment (MAT) services, with integrated behavioral health and medication supervision for the treatment of substance use conditions, including opioid use disorder. We offer help and hope to individuals who are struggling with chemical dependency, addiction, or substance use.'
    
  >
      <img src="/images/building.jpg" alt="Downeast Treatment Center Facility" title="Downeast Treatment Center Facility" />
    <iframe title="Downeast Treatment Center Google Map" width="100%" height="450" frameBorder="0" style={{border: 0}} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJZ2MmofvwrkwR_QdhMz1Cxvc&key=AIzaSyA7-3BW_JUzZrZ6-HK-0IQBY2_bRlHeCDM" allowFullScreen></iframe>
  </Main>
)
