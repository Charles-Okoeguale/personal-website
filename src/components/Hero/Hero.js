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
        I am a Frontend developer with over 4 years of experience developing and maintaining complex software systems, system design, database integration, software architecture, and deploying applications. I <span style={{fontWeight: "900", color: "white"}}>dare mighty things.</span> 
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;