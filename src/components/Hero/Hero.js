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
        I'm a software engineer with several years of industry experience. I'm currently working at Zummit Africa, where I am building the marketplace for artificial intelligence (AI) APIs. I <span style={{fontWeight: "900", color: "white"}}>dare mighty things.</span> 
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;