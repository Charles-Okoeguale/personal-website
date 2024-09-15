import React from 'react';

import {ExternalLinks, GridContainer, Tag,} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import {AiOutlineArrowRight} from 'react-icons/ai'

const Projects = () => (
  <Section nopadding id="projects">
    <SectionTitle main>Open source contribution ⚙️</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <div>
            <ExternalLinks href={p.source}>{p.title} <AiOutlineArrowRight fontSize={15} color="#007bff"/></ExternalLinks>
            <p style={{marginTop: 10, fontSize: '1em', color: 'rgba(255, 255, 255, 0.75)'}}>{p.description}</p>
          </div>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;