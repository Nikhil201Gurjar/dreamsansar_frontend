import React from 'react'

import {Button, Text} from '@chakra-ui/react'

const Buttons = ({colorscheme='green',size,variant,isloading,loadingtext,title, mx='3',display,width,fontsize='md',handleClick,color,cursor='pointer'}) => {
  return (
    <>
     { isloading ?
     <Button isLoading loadingText={loadingtext}  colorScheme='green' size={'md'} variant={'solid'} width={width} display={display} mx={mx} cursor={cursor} >{title}</Button>
     :
     <Button onClick={handleClick} color={color} variant={variant}  colorScheme={colorscheme} size={'md'} width={width} display={display} mx={mx} ><Text fontSize={fontsize}  cursor={cursor} >{title}</Text></Button>}

    </>
  )
}

export default Buttons