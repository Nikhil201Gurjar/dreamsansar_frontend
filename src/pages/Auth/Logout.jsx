import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom';

//Store Stuff
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../store/UserSlice';
import { Box, Heading, Text } from '@chakra-ui/react';
import AdminLayout from '../../components/Admin/AdminLayout';

const Logout = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //------ Function to logout the user
  useEffect(() => {
    localStorage.removeItem('token')

    dispatch(logoutUser());
    
    navigate('/')

  }, [dispatch, navigate]);


  return (
    <>
     <AdminLayout >
        <section id="Applicants">

       
    <Box p={6} bg="gray.50" minH="100vh" style={{overflow:'scroll'}} >
      <Text fontSize="2xl" fontWeight="bold" mb={6}>
        Applicants Details
      </Text>
      <Divider/>


<Heading>Please wait. you're going logout....</Heading>

</Box>
</section>
</AdminLayout>
    </>
  )
}

export default Logout