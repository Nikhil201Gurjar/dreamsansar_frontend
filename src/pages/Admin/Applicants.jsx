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
  Heading,
  Divider
} from "@chakra-ui/react";
import { FaTrash, FaEdit, FaSearch } from "react-icons/fa";
import AdminLayout from "../../components/Admin/AdminLayout";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleDeleteApplicant, handleFetchApplicants } from "../../store/ApplicantSlice";
import {handleFetchCareerPosts} from '../../store/CareerPostsSlice'
import toast from "react-hot-toast";

const Applicants = () => {

    const [searchParams] = useSearchParams();       // 👈 get query params
  const role = searchParams.get('role'); 

  //--------------Dispatch/Selector Specific Stuff
  const dispatch = useDispatch();
  const {applicants,success,loading,msg} = useSelector(state => state.applicant)

  useEffect(()=>{
      dispatch(handleFetchApplicants(role))
      dispatch(handleFetchCareerPosts());

      console.log('applicant',applicants)
  },[dispatch])


  const [searchQuery, setSearchQuery] = useState("");

  // Filter Applicants based on name, email, or contact_address (phone)
  const handleSearch = (e)=>{
    console.log('target',e.key,e.target.value);

    setSearchQuery(e.target.value)

  };



  // Delete function
  const handleDelete = async(_id) => {
    if(!_id){
      toast.error(`Applicant Id:${_id} is not found`)
      return;
    }
    console.log('id',_id);

    try {
      console.log('running file')
      await dispatch(handleDeleteApplicant(_id,role));
  console.log('running2')
      if(success) toast.success("Successfully removed the detail of applicant");
      else toast.error(msg);
    } catch (error) {
       console.log('running error',error)
      toast.error(error)
    }
  };

  return (
    <>
    <AdminLayout >
        <section id="Applicants">

       
    <Box p={6} bg="gray.50" minH="100vh" style={{overflow:'scroll'}} >
      <Text fontSize="2xl" fontWeight="bold" mb={6}>
        Applicants Details
      </Text>
      <Divider/>

      {/* 🔍 Search Bar */}
      {/* <Box mb={6} maxW="400px" display={(applicants && applicants?.length !== 0) ? 'block':'none'}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FaSearch color="gray.400" />
          </InputLeftElement>
          <Input
            placeholder="Search by name, email, or phone..."
            bg="white"
            borderRadius="md"
            value={searchQuery}
            onChange={handleSearch(e)}
          />
        </InputGroup>
      </Box> */}

          {/* Table */}
          {(applicants && applicants?.length !== 0) ? (
      <TableContainer  bg="white" borderRadius="md" shadow="md"   maxH="400px"
  minW="900px"  // 👈 enables vertical scrolling
 >
        <Table variant="simple" size={'sm'} tablelayout="fixed" width="100%" >
          <Thead bg="gray.100">
            <Tr>
              <Th>Full Name</Th>
              <Th>Email</Th>
              <Th>Contact</Th>
              <Th>Qualifications</Th>
              <Th textAlign="center">Actions</Th>
                <Th>Address</Th>
            </Tr>
          </Thead>

          <Tbody>
            
              {applicants.map((applicant,i) => (
                <Tr key={i}>
                  <Td>{applicant?.full_name}</Td>
                  <Td>{applicant?.email}</Td>
                  <Td>{applicant.contact_address?.country_code} {applicant.contact_address?.phone_no}</Td>
                  <Td>{applicant?.qualifications}</Td>
                  <Td>{applicant?.address?.address1},{applicant?.address?.district},{applicant?.address?.state},{applicant?.address?.country}</Td>
                  <Td>
                    
                      <Button
                      isLoading={loading}
                        size="sm"
                        colorScheme="red"
                        leftIcon={<FaTrash />}
                        onClick={() => handleDelete(applicant?._id)}
                      >
                        Delete
                      </Button>
                  </Td>
                </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>  
          )
      : (
              <Heading>No Applicants found.</Heading>
            )}
    </Box>
     </section>
    </AdminLayout>
    </>

  );
};

export default Applicants;
