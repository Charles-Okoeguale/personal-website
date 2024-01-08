import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, i'm <span style={{fontWeight: 900}}>Charles.</span> 
        </SectionTitle>
        <SectionText>
         <span style={{color: 'white', fontWeight: '900'}}>Full Stack Developer</span>: My main objective is to help my company make more money by adopting a business-oriented approach to software development.
        </SectionText>
        <SectionText>
          Get in touch 👉 <a href="mailto:egualecharles@gmail.com" style={{color: 'white'}}>egualecharles@gmail.com</a>
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
