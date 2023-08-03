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
        A Frontend Engineer, quick learner, creative thinker, and most importantly a <span style={{fontWeight: 900, color: 'white'}}>team player.</span> 
        </SectionText>
        <SectionText>
          Get in touch 👉 <a href="mailto:egualecharles@gmail.com" style={{color: 'white'}}>egualecharles@gmail.com</a>
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
