import React from "react"
import cn from 'classnames';

import Main from "../containers/main";

import Styles from './styles/staff.module.scss';

export default () => (
  <Main
    title="Our Team"
    link="/staff"
  >
    <div className={Styles.bio}>
      <img className={cn(Styles.photo, Styles.linda)} src="/images/staff/linda.jpg" title="Photo of Linda Napier, MS, APRN, NP-C" alt="Linda Napier, MS, APRN, NP-C"/>
      <section className={Styles.content}>
        <h4>Linda Napier, MS, APRN, NP-C</h4>
        <h6>FAMILY NURSE PRACTITIONER</h6>
        <p>Linda Napier earned her Master of Science Degree from Quinnipiac University and a Graduate Certificate in Spirituality from Hartford Seminary.  She is currently the Medication Assisted Treatment Provider in Ellsworth at The DownEast Treatment Center.  Prior to that she was a Family Nurse Practitioner at The Arnold Memorial Medical Center in Jonesport caring for patients of all ages as well as a Medication Assisted Treatment Provider for her opioid dependent patients.  Besides her experience in family medicine, Linda was the Director of Health Services at Landmark College in Putney, Vermont, a school for students with learning differences ranging from dyslexia, ADD, ADHD to those on the autism spectrum.</p>
        <p>Linda has extensive healthcare experience in varied settings from hospice and palliative care, acute and long-term care to her background as a health educator and presenter, grant and policy writer and health columnist. On occasion, she has been known to transform into Daisy, a hospital clown.</p>
      </section>
    </div>

    <div className={Styles.bio}>
      <img className={cn(Styles.photo, Styles.linda)} src="/images/staff/lisa.jpg" title="Photo of Lisa Groo, LCPC" alt="Lisa Groo, LCPC"/>
      <section className={Styles.content}>
        <h4>Lisa Groo, LCPC</h4>
        <h6>SUBSTANCE USE COUNSELOR</h6>
        <p>Lisa Groo is a Licensed Clinical Professional Counselor and a Master’s Degree in Mental Health Counseling. She has earned additional certificates in Motivational Interviewing and Substance Use Counseling. With 15 years experience in the mental health field, Lisa worked for Aroostook Mental Health Services for 6 years as an Emergency Services Specialist, before joining the DownEast Treatment Center team this year. Lisa first moved to Maine in 1990, migrating to Florida in winter, then living in Vancouver, British Columbia, and Madison, Wisconsin, before returning home to Maine in 2012. Lisa lives in Penobscot with her dog, Wiley.</p>
      </section>
    </div>

    <div className={Styles.bio}>
      <img className={cn(Styles.photo, Styles.linda)} src="/images/staff/diehl.jpg" title="Photo of Dr. Diehl Snyder" alt="Dr. Diehl Snyder"/>
      <section className={Styles.content}>
        <h4>Dr. Diehl Snyder</h4>
        <h6>MEDIICAL DIRECTOR</h6>
        <p>Dr. Snyder specializes in general psychiatry. His medical interests and expertise include psychiatry and neurology. As the Director of the Mount Desert Island Behavioral Health Center, he oversees the MDI Hospital-Penn Medicine psychiatry program, which brings residents from Penn Medicine to MDI Hospital each summer to practice on the Island under his guidance. Dr. Snyder and his wife first came to MDI when they honeymooned here. As their family grew, they vacationed here as a family. When their sons went off to college, the couple decided to move here full time. When he is not in the office, he enjoys kayaking, hiking and biking.</p>
      </section>
    </div>

  </Main>
)
