import React from 'react'
import styled from 'styled-components';
import { Flex, Text } from 'rebass';
import { breakpoints, colors } from '../styles/theme';

const Sticky = styled(Text)`
  width: 100%;
  margin: auto;
  background-color: #fff;

  @media (min-width: ${breakpoints.md}) {
    position: sticky;
    z-index: 100;
    top: 0px;
  }
`;

const Container = styled(Flex)`
  max-width: 96rem;
  padding-left: 0;
  margin: 0 auto;
  list-style: none;
`;

const Link = styled(Text)`
  position: relative;
  cursor: pointer;
  transition: color 225ms ease;
  &:hover {
    color: ${colors.primary};
  }
  ${props => props.current && `color: ${colors.primary};`}

  a {
    color: currentColor;
    text-decoration: none;
  }

  @media (min-width: ${breakpoints.md}) {
    &:after {
      content: '';
      position: absolute;
      top: calc(100% + .5rem);
      left: 0;
      display: block;
      width: 100%;
      height: .1rem 
      background-color: transparent;
      transition: background-color 225ms ease;
    }

    &:hover {
      color: ${colors.text};
    }
    &:hover:after {
      background-color: ${colors.primary};
    }

    ${props => props.current && `
      color: ${colors.text};
      &:after { background-color: ${colors.primary}; }`}
  }
`;

const Nav = () => (
  <Sticky width={1/1} px={['1rem', '1rem', '2rem']} pt={['1rem', '1rem', '3rem']} pb={['1rem', '1rem', '3rem']} fontSize={['1.6rem', '2rem']}>
    <Container as="ul" flexDirection={['column', 'column', 'row']} justifyContent="space-around">
      <Link as="li" py={['.5rem', '.5rem', 0]} textAlign="center"><Text as="a" href="#programme">Le programme</Text></Link>
      <Link as="li" py={['.5rem', '.5rem', 0]} textAlign="center"><Text as="a" href="#photos">Les photos</Text></Link>
      {/* <Link as="li" py={['.5rem', '.5rem', 0]} textAlign="center">Les meilleurs témoins</Link> */}
      <Link as="li" py={['.5rem', '.5rem', 0]} textAlign="center"><Text as="a" href="http://www.millemercismariage.com/onsemariepourdevrai/liste.html" target="_blank">Liste de mariage</Text></Link>
      <Link as="li" py={['.5rem', '.5rem', 0]} textAlign="center"><Text as="a" href="#infos">Infos pratiques</Text></Link>
    </Container>
  </Sticky>
)

Nav.propTypes = {
}

export default Nav
