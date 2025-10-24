import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import {
  Box,
  Button,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import FormInput, {
  FormInputSelect,
  FormInputTextArea,
} from "../../components/FormInput";

import { FaRegUserCircle } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import Buttons from "../../components/Buttons";

import { FaRegStar } from "react-icons/fa";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { handleDispatchAddTestimonail, handleDispatchDeleteTestimonail, handleFetchTestimonails } from "../../store/TestimonailSlice";
import Loading from "../../components/Loading";
import { Helmet } from "react-helmet-async";
 
const Testimonails = () => {
  console.log('admin testimonail');
  
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();
  const {testimonails,success,loading,msg} = useSelector(state => state.testimonail);

  useEffect(()=>{
    dispatch(handleFetchTestimonails())
  },[])

  
   //--------------function to delete the testimonail
  const handleDeleteTestimonail = async(_id) => {
    console.log("delete testimonail", _id);

    if(!_id){
      toast.error('Testimonail id is not found');
      return;
    }

    try {
      await dispatch(handleDispatchDeleteTestimonail(_id));

      if(success) toast.success('Successfully deleted the booking')
        else toast.error(msg)
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
     <Helmet>
            <title>Testimonail | DreamSansar Consultancy</title>
            <meta
              name="description"
              content="DreamSansar Consultancy helps Nepali students with Ausbildung in Germany, Study in Europe & UK, FSJ, Au Pair, and German Language courses. "
            />
            <meta
              name="keywords"
              content="Ausbildung in Germany, Study in Germany, Nepali students, German language courses, visa support, DreamSansar Consultancy,career"
            />
            <meta property="og:title" content="Testimonail | DreamSansar Consultancy" />
            <meta
              property="og:description"
              content="Start your Ausbildung journey in Germany with DreamSansar Consultancy. Get expert visa help, placement, and training."
            />
            <meta
              property="og:image"
              content="https://dreamsansar.com/images/og-ausbildung.jpg"
            />
            <meta property="og:url" content="https://dreamsansar.com/admin/testimonail" />
          </Helmet>

      <AdminLayout>
        <section id="Testimonails">
          <HStack justify={"space-between"}>

            <Heading>Testimonails</Heading>
       

            <Button onClick={onOpen}>Add a testimonail</Button>
          </HStack>

          <Divider my={'2'} />
          <AddTestimonail isOpen={isOpen} onClose={onClose} />
          {loading && <Loading/>}
 {testimonails && testimonails?.length !== 0 && !loading ? 
          <SimpleGrid
            mt={"5"}
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={6}
            w="full"
          >
           {testimonails?.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} handleDeleteTestimonail={handleDeleteTestimonail} />
            ))}
            
          </SimpleGrid>
          : (
              <Heading mt={'5'}>No testimonails found</Heading>
            )}
        </section>
      </AdminLayout>
    </>
  );
};

export default Testimonails;



const TestimonialCard = ({ testimonial,handleDeleteTestimonail }) => {
  
  return (
    <>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        p={6}
        shadow="md"
        bg="white"
        textAlign="center"
        position={"relative"}
      >
        <Box position={"absolute"} right={"2%"} top={'1%'}
            onClick={()=>handleDeleteTestimonail(testimonial?._id)}>
          <MdDelete
            cursor={"pointer"}
            color="red"
            size={"2vw"}
          />
        </Box>
        <HStack justify="center" mb={3}>
          {[...Array(testimonial?.rating)].map((_, i) => (
            <FaStar key={i} style={{ color: "#ffff8e" }} />
          ))}
        </HStack>
        <Text fontStyle="italic" mb={4}>
          "{testimonial?.user_concern}"
        </Text>
        <VStack spacing={0}>
          <Text fontWeight="bold">{testimonial?.user_name}</Text>
        </VStack>
      </Box>
    </>
  );
};

const AddTestimonail = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_concern: "",
    rating: 5,
  });

  const dispatch = useDispatch();
  const {msg,success,loading} = useSelector(state => state.testimonail);

  //Function to handle the onchange event on input data
  const handleOnChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  //---------- Function to submit the form data or can say login the users
  const handleSubmit = async (e) => {
    console.log("formdata", formData);
    e.preventDefault();
    console.log("added a testimonail");

    if(!formData.user_concern || !formData.user_name || !formData.rating) return toast.error('All fields are required');

    if(formData.user_concern.length <12) return toast.error("Testimonial validation failed: user_concern: Concern must be 12 char long")

    console.log('success1',success,msg,loading);
  
    try {
      await dispatch(handleDispatchAddTestimonail(formData));
      toast.success('Successfully added the testimonail');
    console.log('success2',success,msg,loading);
      
    } catch (error) {
      toast.error(error);
      return;
    }

    console.log('success',success,msg,loading);

    setFormData({user_name:'',user_concern:'',rating:3});

  };

  const options = [1, 2, 3, 4, 5];
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Testimonail</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <form onSubmit={handleSubmit} style={{ minWidth: "100%" }}>
                <FormInput
                  type={"text"}
                  label={"Enter User Name"}
                  icon={<FaRegUserCircle />}
                  name="user_name"
                  id="user_name"
                  placeholder={"John Doe"}
                  value={formData.user_name}
                  handleChange={handleOnChange}
                  minlen={5}
                  maxlen={120}
                />

                <FormInputTextArea
                  label={"Enter User Concern"}
                  name="user_concern"
                  id="user_concern"
                  placeholder={"Great organization to make the dream clear"}
                  value={formData.user_concern}
                  handleChange={handleOnChange}
                  minlen={5}
                  maxlen={120}
                />

                <FormInputSelect
                  label={"Select Rating"}
                  placeholder={"rating"}
                  handleChange={handleOnChange}
                  options={options}
                  name={"rating"}
                />

                <Box w="full" my="4" mx="auto">
                  <Buttons
                    handleClick={handleSubmit}
                    type="submit"
                    mx="auto"
                    fontsize="lg"
                    width="full"
                    title={"Add Testimonail"}
                    isloading={loading}
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
