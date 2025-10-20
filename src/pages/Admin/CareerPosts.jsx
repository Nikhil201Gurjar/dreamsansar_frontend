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
  SimpleGrid,
   Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Heading,
   VStack,
   Avatar,
   Image,
   Divider
} from "@chakra-ui/react";
import { FaTrash, FaEdit, FaSearch } from "react-icons/fa";
import AdminLayout from "../../components/Admin/AdminLayout";
import { Link } from "react-router-dom";
import CareerPostCard from "../../components/Admin/CareerPostCard";
import FormInput, {
  FormInputSelect,
  FormInputTextArea,
} from "../../components/FormInput";

import Buttons from "../../components/Buttons";

import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { handleAddCareerPosts, handleFetchCareerPosts, handleIncreaseCareerPosts } from "../../store/CareerPostsSlice";
import Loading from "../../components/Loading";
import toast from "react-hot-toast";

import header2 from '../../assets/header2.jpg'

const CareerPosts = () => {
  //----------------Use dispatch --------------
  const {careerposts,loading} = useSelector(state => state.careerposts);
  const dispatch = useDispatch();

  useEffect(()=>{
        dispatch(handleFetchCareerPosts());

  },[dispatch])

  const toast = useToast();
    const [posts, setPosts] = useState(2);

    
      const { isOpen, onOpen, onClose } = useDisclosure();

  const [searchQuery, setSearchQuery] = useState("");

  // Filter CareerPosts based on name, email, or contact_address (phone)
  const filteredCareerPosts = careerposts.filter((b) =>
    [b.role, b.role_details]
      .some((field) => field.toLowerCase().includes(searchQuery.toLowerCase()))
  );




  return (
    <>
    <AdminLayout  >
        <section style={{overflow:'hidden'}} id="CareerPosts">

       
    <Box p={6} bg="gray.50" minH="100vh"  >
      <HStack justify={"space-between"}>
      <Heading mb={'3'}>Career Posts</Heading>
  <Button onClick={onOpen}>Add a Career Post</Button>
  </HStack>
  <Divider />
  <AddCareerPost isOpen={isOpen} onClose={onClose} />
      {/* 🔍 Search Bar */}
      {/* <Box mb={6} maxW="400px" 
 >
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FaSearch color="gray.400" />
          </InputLeftElement>
          <Input
            placeholder="Search by name, email, or phone..."
            bg="white"
            borderRadius="md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </InputGroup>
      </Box> */}

          <Box p={8} bg="gray.50" minH="100vh">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        {loading ? <Loading/> : careerposts?.map((careerposts,i)=>(
        <CareerPostCard
          key={i}
          image={careerposts?.avatar?.url}
          title={careerposts?.role}
          description={careerposts?.role_details}
          qualifications={careerposts?.qualifications}
          applicants={careerposts?.number_of_applicants}
          posts={careerposts?.number_of_posts}
          _id={careerposts?._id}
        />
         ))}
      
      </SimpleGrid>
    </Box>
    </Box>
     </section>
    </AdminLayout>
    </>

  );
};

export default CareerPosts;

const AddCareerPost = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const {img,success,loading} = useSelector(state => state.careerposts);

  const [formData, setFormData] = useState({
    role: "",
    role_details: "",
    number_of_posts:0,
    address:"",
    qualifications:"",
    file:""
  });

  //Function to handle the onchange event on input data
  const handleOnChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  //---------- Function to submit the form data or can say login the users
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!formData.role_details || !formData.role || !formData.number_of_posts || !formData.address || !formData.qualifications) return toast.error('All fields are required');

    console.log('CareerPosts',formData);
    const formDataToSend = new FormData();
formDataToSend.append("role", formData.role);
formDataToSend.append("role_details", formData.role_details);
formDataToSend.append("number_of_posts", formData.number_of_posts);
formDataToSend.append("address", formData.address);
formDataToSend.append("qualifications", formData.qualifications);
if (formData.file) formDataToSend.append("file", formData.file);
try {
  
    await dispatch(handleAddCareerPosts(formDataToSend));

    if(!success) toast.error(msg);
    else
    toast.success('Successfully added a new career post');
} catch (error) {
  toast.error(error)
}


    setFormData({ role: "",
    role_details: "",
    number_of_posts:0,
    address:"",
    qualifications:"",
    file:""
  })

  setImgPrev('')
  };

  
    const [imgPrev, setImgPrev] = useState('');

   //Function to handle upload image
    const handleUploadImg = (e) => {
        const file = e.target.files[0];
        if(!file) return;
         const reader = new FileReader();
        // console.log('reader', reader);

        reader.readAsDataURL(file);

        reader.onload = () => {
            setImgPrev(reader.result)
        }
        setFormData({ ...formData, file });

                // Define the size of the image
        const fileSize = file.size / 1e+6; //mb
        if (fileSize.toFixed(2) > 5) {
            //Can't upload file size > 5 MB
            toast.error("Avatar must be less than 5 MB");
            setFormData({ ...formData, file: '' });
            return;
        }
    }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Career Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
             

            <VStack>
              <form onSubmit={handleSubmit} style={{ minWidth: "100%" }}>
                <FormInput
                  type={"text"}
                  label={"Enter Role Name"}
                  icon={<FaRegUserCircle />}
                  name="role"
                  id="role"
                  placeholder={"House Keeper"}
                  value={formData.role}
                  handleChange={handleOnChange}
                  minlen={5}
                  maxlen={120}
                />

                <FormInputTextArea
                  label={"Enter Role Details"}
                  name="role_details"
                  id="role_details"
                  placeholder={"a person who maintains a household by cleaning, organizing, and often cooking for the residents"}
                  value={formData.role_details}
                  handleChange={handleOnChange}
                  minlen={5}
                  maxlen={120}
                />

                <FormInput
                  type={"number"}
                  label={"Enter Number Of Posts"}
                  name="number_of_posts"
                  id="number_of_posts"
                  placeholder={"0"}
                  value={formData.number_of_posts}
                  handleChange={handleOnChange}
                />

                <FormInputTextArea
                  label={"Enter Qualifications"}
                  name="qualifications"
                  id="qualifications"
                  placeholder={"B.Tech / B.Sc in CS or equivalent experience."}
                  value={formData.qualifications}
                  handleChange={handleOnChange}
                  minlen={5}
                  maxlen={120}
                />

                <FormInputTextArea
                  label={"Enter Address"}
                  name="address"
                  id="address"
                  value={formData.address}
                  handleChange={handleOnChange}
                  minlen={5}
                  maxlen={120}
                />

                
                <FormInput
                  type={"file"}
                  label={"Upload Career Poster"}
                  name="file"
                  id="file"
                  css={FileUpload}
                  handleChange={handleUploadImg}
                />

                {imgPrev && 

                 <Box>
                  <Image src={imgPrev} width='full' height={'200px'} border='1 px solid black' borderRadius='12%' />
                </Box>}

                <Box w="full" my="4" mx="auto">
                  <Buttons
                  isloading={loading}
                    handleClick={handleSubmit}
                    type="submit"
                    mx="auto"
                    fontsize="lg"
                    width="full"
                    title={"Add Career Post"}
                  />
                </Box>
              </form>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export const FileUpload = {
    "&::file-selector-button": {
        cursor: 'pointer',
        marginLeft: '-5%',
        color: 'salmon',
        border: 'none',
        height: '100%',
        background: 'transparent',
        width: '110%'
    }
}