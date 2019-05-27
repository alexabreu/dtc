import React from "react"
import Main from "../containers/main";


export default () => (
  <Main
    title="Contact Us"
  >
    <h4>When is the Downeast Treatment Center open?</h4>

    <p>We are open Monday and Thursday from 8AM to 8PM. We hold group counseling sessions in the morning, at midday, and in the evening in order to provide the greatest access to those who are are in need of treatment.</p>


    <h4>How do I make an appointment?</h4>

    <p>To schedule an appointment, call <a className="primary" href="tel:(800) 244-6431">(800) 244-6431</a></p>


    <h4>Where is the Downeast Treatment Center located?</h4>

    <p>406 State Street, Suite 2 in Ellsworth, Maine</p>

    <iframe width="100%" height="450" frameBorder="0" style={{ border: 0 }} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJZ2MmofvwrkwR_QdhMz1Cxvc&key=AIzaSyA7-3BW_JUzZrZ6-HK-0IQBY2_bRlHeCDM" allowFullScreen></iframe>

  </Main>
)
