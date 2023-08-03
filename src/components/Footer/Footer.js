import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+234 9134954970">+234 9134954970</LinkItem>
        </LinkColumn>
      </LinkList>
        <CompanyContainer>
          <Slogan>Developed by Charles ✌️</Slogan>
        </CompanyContainer>
  
    </FooterWrapper>
  );
};

export default Footer;