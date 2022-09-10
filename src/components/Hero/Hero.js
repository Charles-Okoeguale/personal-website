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
        A frontend engineer with experience working across distributed teams. Proud team player focused on achieving project objectives with speed and accuracy.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;