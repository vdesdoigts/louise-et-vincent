import React from 'react'
import { Text } from 'rebass'

const Subtitle = ({ as, children, ...others }) => (
  <Text
    as={as}
    pb="1rem"
    mb="0"
    fontSize={['1.8rem', '1.8rem', '2.2rem']}
    {...others}
  >
    {children}
  </Text>
)

export default Subtitle
