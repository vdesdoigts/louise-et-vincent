import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Logo from '../components/logo'

import styled from 'styled-components';
import { Box, Flex, Text } from 'rebass';

const Container = styled(Flex)`
  width: 100%;
  height: 100vh;
  max-height: 80rem;
`;

const LogoContainer = styled.div`
  width: 100%;
  max-width: 50rem;
  margin: auto;
`; 

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['Mariage', 'Louise Le Bolay', 'Vincent Desdoigts', '2019']} />
    <Container alignItems="center">
      <Text width={1/1} textAlign="center">
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Box pt="2rem">
          <Text as="h1">22 Juin 2019</Text>
          <Text as="h2">Gâvres / Lambézégan</Text>
        </Box>
      </Text>
    </Container>
  </Layout>
)

export default IndexPage
