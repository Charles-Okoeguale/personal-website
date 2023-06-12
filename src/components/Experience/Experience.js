import React from 'react';

import {ExternalLinks, GridContainer, Tag,} from './ExperienceStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Jobs, projects } from '../../constants/constants';
import {AiOutlineArrowRight} from 'react-icons/ai'

const Experience = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Experience</SectionTitle>
    <GridContainer>
      {Jobs.map((p, i) => {
        return (
          <div key={i}>
            <ExternalLinks href={p.source}>{p.company}</ExternalLinks>
            <p>Remote</p>
            <p style={{margin: '0.5em 0', fontSize: '1.3em', color: 'white',  fontWeight: '900'}}>{p.title}</p>
            <p style={{fontSize: 13}}>{p.time}</p>
          </div>
        );
      })}
    </GridContainer>
  </Section>
);

export default Experience;
