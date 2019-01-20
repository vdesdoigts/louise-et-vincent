import React from 'react'
import { Text } from 'rebass'

const Title = ({ as, children, ...others }) => (
  <Text as={as} pb="1.8rem" mb="0" fontSize={['1.8rem', '1.8rem', '2.6rem']} {...others}>{children}</Text>
)

export default Title