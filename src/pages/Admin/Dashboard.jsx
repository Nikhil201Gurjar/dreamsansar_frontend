import React, { useEffect } from 'react'
import AdminLayout from '../../components/Admin/AdminLayout'
import { Box, Divider, Heading, HStack, Icon, Stack } from '@chakra-ui/react'

//Icons/Images Specific Stuff
import { MdOutlineViewSidebar, MdPayment } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi'
import { TbBrandBooking } from "react-icons/tb";
import { PiStudent } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";

import {IoIosCreate} from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { handleFetchCareerPosts } from '../../store/CareerPostsSlice'

const Dashboard = () => {
  const dispatch = useDispatch();

  const {length} = useSelector(state => state.careerposts)


  useEffect(()=>{
    dispatch(handleFetchCareerPosts());
  },[dispatch(handleFetchCareerPosts)])

  return (
    <>

      <AdminLayout>
         <section id="Dashboard">

                    <Heading>Dashboard</Heading>

                   {/* <Text textAlign={'center'} my='2' size={'sm'}> Last Change On {String(new Date()).split('G')[0]} </Text> */}


     {/* Here is the container, where we show assets like views,users and subscription */}
     <Divider />
                    <Box my='2' p='2'>
                        <Stack justifyContent={'flex-start'} direction={['column', 'row']} spacing={'4'}>
                            <AssetsCard qty={0} icon={<FaRegUser size={'2.5vw'}/>} Link='/admin/bookings' title='Bookings' qtyPercentage={80} />
                            <AssetsCard qty={length?length:0} icon={<IoIosCreate size={'2.5vw'}/>} Link='/admin/careers_posts' title='Career Posts' qtyPercentage={80} />
                            
                        </Stack>
                    </Box>

                    </section>
      </AdminLayout>
    </>
  )
}

export default Dashboard

//------------------ Card to show assets are in form of profitables or not
export const AssetsCard = ({ title, icon, profitable = true, qty, qtyPercentage,Link}) => {
      const navigate = useNavigate();
      const handleOnClick = ()=>{
      navigate(Link)
      console.log(Link)
      }
    return (

        <Box minW={'20%'} borderRadius={'md'} boxShadow={'dark-lg'} my='2' mx='2' cursor={'pointer'} onClick={handleOnClick} style={{height:"115px"}}>

            {/* Here we showing the stats counts and title of stats card  */}
            <Heading p={'2'} size={'sm'}>{title}</Heading>
            <HStack justify={'space-evenly'} p={'5'} >
                {icon}
                <Heading > <strong>{qty}</strong></Heading>

               

            </HStack>

        </Box>
    )
}
