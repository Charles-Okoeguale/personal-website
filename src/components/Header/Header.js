import { Head } from 'next/document';
import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <SocialIcons href="https://github.com/Charles-Okoeguale">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/okoeguale-charles/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/Kvn_kay">
        <AiFillTwitterCircle size="3rem"/>
      </SocialIcons>
    </Div1>
      <Div3></Div3>
    </Container>
);

export default Header;

