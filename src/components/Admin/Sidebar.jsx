import React from 'react'

import {Link,useLocation} from 'react-router-dom'

import {Box, HStack, Stack, Text} from '@chakra-ui/react'

//Icons/Images Stuff
import {AiFillDashboard,AiOutlineUser} from 'react-icons/ai'
import {GiMaterialsScience} from 'react-icons/gi'
import {IoIosCreate} from 'react-icons/io'

const Sidebar = () => {
    const location = useLocation();
  return (  
    <>
     <section id="Sidebar">
       <Box
  w="full"
  minW="full"
  p="2"
  h="full"
  boxShadow="md"
  overflowX="scroll"
  css={{
    '&::-webkit-scrollbar': {
      height: '0px', // Hide horizontal scrollbar height
      width:'0px'
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'transparent', // No thumb color
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    'scrollbar-width': 'none', // For Firefox
    '-ms-overflow-style': 'none', // For IE/Edge
  }}
>
  <Stack direction={['row', 'row', 'column']}>
    <SideBarLink
      title={'Dashboard'}
      icon={<AiFillDashboard />}
      link={'dashboard'}
      active={location.pathname === '/admin/dashboard'}
    />
    <SideBarLink
      title={'Testimonials'}
      link={'testimonails'}
      icon={<AiOutlineUser />}
      active={location.pathname === '/admin/testimonails'}
    />
    <SideBarLink
      title={'Bookings'}
      link={'bookings'}
      icon={<GiMaterialsScience />}
      active={location.pathname === '/admin/bookings'}
    />
    {/* <SideBarLink
      title={'Career Posts'}
      link={'careers_posts'}
      icon={<IoIosCreate />}
      active={location.pathname === '/admin/careers_posts'}
    /> */}
    <SideBarLink
      title={'Logout'}
      link={'logout'}
      icon={<IoIosCreate />}
      active={location.pathname === '/logout'}
    />
  </Stack>
</Box>

        </section> 
    </>
  )
}

export default Sidebar


// ---------------- Link of the sidebar 
export const SideBarLink = ({title,icon,active,link})=>{
    return(
        <Link to={`/admin/${link ? link : title}`} style={{width:'100%'}}> <HStack  my='2' mx='auto' textTransform={'capitalize'} textColor={active ? 'salmon' :''}>
          <Text>{icon}</Text> <Text>{title}</Text>  </HStack> </Link>
    )
}