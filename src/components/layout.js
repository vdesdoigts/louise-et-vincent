import React from 'react'
import PropTypes from 'prop-types'
import { GlobalStyle } from '../styles/global'
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
`;

const Layout = ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
    <Container>
      {children}
    </Container>
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
