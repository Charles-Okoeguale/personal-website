import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, i'm <span style={{fontWeight: 900}}>Charles.</span> 
        </SectionTitle>
        <SectionText>
         <span style={{color: 'white', fontWeight: '900'}}>Software Engineer</span>: I write software with and for people.
        </SectionText>
        <SectionText>
          Get in touch 👉 <a href="mailto:egualecharles@gmail.com" style={{color: 'white'}}>egualecharles@gmail.com</a>
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
