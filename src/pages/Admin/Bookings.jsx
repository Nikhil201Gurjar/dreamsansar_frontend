import React, { useEffect, useState } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Text,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  useToast,
  Divider,
  Heading,
} from "@chakra-ui/react";
import { FaTrash, FaEdit, FaSearch } from "react-icons/fa";
import AdminLayout from "../../components/Admin/AdminLayout";
import { useDispatch, useSelector } from "react-redux";
import { handleDeleteBooking, handleFetchBookings } from "../../store/BookingSlice";
import toast from "react-hot-toast";

const Bookings = () => {
  const dispatch = useDispatch();
  const {bookings,success,loading,msg} = useSelector(state => state.booking);


  useEffect(()=>{
      dispatch(handleFetchBookings());
  },[])

  const handleDelete = async(_id)=>{
    console.log(_id);
    if(!_id){
      toast.error(`Booking _id is not found`)
    }

    try {
      await dispatch(handleDeleteBooking(_id))
      if(success) toast.success('Successfully deleted the booking');
      else toast.error(msg);
    } catch (error) {
      toast.error(error);
    }
  }  


  return (
    <>
    <AdminLayout >
        <section id="Booking">
    <Box p={6} bg="gray.50" minH="100vh" style={{overflow:'scroll'}} >
      <Text fontSize="2xl" fontWeight="bold" mb={6}>
        Booking Details
      </Text>

          {/* Table */}
          <Divider />

          { bookings && bookings?.length !== 0 ?(
      <TableContainer  bg="white" borderRadius="md" shadow="md"   maxH="400px"
  minW="900px"  // 👈 enables vertical scrolling
 >
        <Table variant="simple" size={'sm'} tableLayout="fixed" width="100%" >
          <Thead bg="gray.100">
            <Tr>
              <Th>Full Name</Th>
              <Th>Email</Th>
              <Th>Contact / Address</Th>
              <Th>Message</Th>
              <Th>Time Slot</Th>
              <Th textAlign="center">Actions</Th>
            </Tr>
          </Thead>

          <Tbody>
          
              {bookings?.map((booking,i) => (
                <Tr key={i}>
                  <Td>{booking?.full_name}</Td>
                  <Td>{booking?.email}</Td>
                  <Td>{booking?.contact_address?.country_code}{booking?.contact_address?.phone_no} </Td>
                  <Td>{booking?.message}</Td>
                  <Td>{booking?.time_slot}</Td>
                  <Td>
                    
                      <Button
                        size="sm"
                        colorScheme="red"
                        leftIcon={<FaTrash />}
                        onClick={() => handleDelete(booking._id)}
                      >
                        Delete
                      </Button>
                  </Td>
                </Tr>
              ))}
            
          </Tbody>
        </Table>
      </TableContainer> )
      : (
        <Heading>No Booking Found</Heading>
      )}
    </Box>
     </section>
    </AdminLayout>
    </>

  );
};

export default Bookings;
