import React from 'react'

import { Box, Spinner, VStack } from '@chakra-ui/react'
import { COLOUR_PRIMARY } from '../GlobalFunctions'

const Loading = () => {
    return (
        <>
            <VStack align={'center'} h='100vh' justifyContent={'center'}>
                <Box>
                    <Spinner color={COLOUR_PRIMARY} size={'xl'} thickness='2px' speed='0.55s' />
                </Box>
            </VStack>
        </>
    )
}

export default Loading