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
        A detail-oriented, organized, and meticulous software engineer with experience working across distributed teams. An enthusiastic team player ready to contribute to the company's success.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;