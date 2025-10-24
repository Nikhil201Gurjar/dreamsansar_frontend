import React, { useEffect } from 'react'

import { Grid,Box, Container } from '@chakra-ui/react'

//Admin Component Stuff
import Sidebar from './Sidebar'
import Navbar from '../Navbar'
import { useNavigate } from 'react-router-dom'

const AdminLayout = ({children}) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(()=>{
      if(!token)
          navigate('/admin/secret_page');
  },[token])
  return (
    <>
      <section id="AdminLayout">

        {/* <Navbar/> */}

        <Grid templateColumns={['1fr',`1fr`,'1fr 6fr']} >
            
            {/* Sidebar show for navigation  */}
            <Sidebar />
            

            {/* Here the children to show related page data  */}
            <Box my='2' p='2'>
                {children}
            </Box>
        </Grid>
      </section>
    </>
  )
}

export default AdminLayout