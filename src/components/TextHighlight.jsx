import { Heading } from '@chakra-ui/react'
import React from 'react'

const TextHighlight = ({title,size='md',as='span',color='orange.500'}) => {
  // console.log(as, size, colorscheme);
  return (
    <>
      <Heading as={as} size={size} color={color} >{title}</Heading>
    </>
  )
}

export default TextHighlight