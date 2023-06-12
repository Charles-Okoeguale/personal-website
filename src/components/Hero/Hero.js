import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi,<br />
          My name's Charles
        </SectionTitle>
        <SectionText>
        I am a Frontend developer with a passion for creating aesthetically pleasing, intuitive user Interfaces and crafting code that operates like a well-oiled machine. I am a quick learner, a creative problem solver, and most importantly a team player. 
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
