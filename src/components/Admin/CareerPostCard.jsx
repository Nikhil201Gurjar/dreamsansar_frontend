import React from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  HStack,
  VStack,
  IconButton,
  useColorModeValue,
  Badge,
  Divider,
  Spacer,
  Flex
} from "@chakra-ui/react";

import Buttons from '../Buttons'
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { handleDecreaseCareerPosts, handleDeleteCareerPosts, handleIncreaseCareerPosts } from "../../store/CareerPostsSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";


const CareerPostCard = ({
  image,
  title,
  description,
  qualifications,
  applicants,
  posts,
  onIncrease,
  onDecrease,
  _id,
}) => {
    const dispatch = useDispatch();
    console.log('_Id',_id);

  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.200");

  const handleDecreasePost = async()=>{
if(!_id){
       toast.error(`Role id is not found`)
     }
     try {
       await dispatch(handleDecreaseCareerPosts(_id));
     } catch (error) {
       toast.error(error)
     }
  }

 //-----------------------Functions Specific stuff
   const handleIncreasePost = async ()=>{
     if(!_id){
       toast.error(`Role id is not found`)
     }
     try {
       await dispatch(handleIncreaseCareerPosts(_id));
     } catch (error) {
       toast.error(error)
     }
   }

   //-----------------------Functions Specific stuff
   const handleDeletePost = async ()=>{
     if(!_id){
       toast.error(`Role id is not found`)
     }
     try {
       await dispatch(handleDeleteCareerPosts(_id));
       toast.success(`Role:${title} successfully deleted`)
     } catch (error) {
       toast.error(error)
     }
   }

  return (
   <Box
      w={{ base: "100%", sm: "300px" }}
      bg={'white'}
      borderRadius="2xl"
      boxShadow="xl"
      overflow="hidden"
      m={'3'}
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", boxShadow: "2xl" }}
      position="relative"
      minH="460px"            // <- makes room for Spacer to push content
      display="flex"
      
      flexDirection="column" 
     
    >
      {/* Image - fixed height */}
      <Image src={image} alt={title} h="180px" w="100%" objectFit="cover" />
     

      {/* Content area grows to fill available space */}
      <Flex direction="column" p={5} flex="1" overflow="hidden" position={'relative'}>
        <Heading fontSize="lg">{title}</Heading>
         <Box position={'absolute'} right="5%" top={'3%'}   borderRadius={'50%'} cursor={'pointer'} onClick={handleDeletePost}>
        <MdDelete color="red" size={'2vw'} />
      </Box>

        <Text fontSize="sm" color="gray.700" noOfLines={2} mt={2}>
          {description}
        </Text>

        <Divider my={3} />

        <Box>
          <Text fontWeight="semibold" fontSize="sm">Qualifications:</Text>
          <Text fontSize="sm" color="gray.700">{qualifications}</Text>
        </Box>

        <Box mt={2}>
          <Text fontWeight="semibold" fontSize="sm">Address:</Text>
          <Text fontSize="sm" color="gray.700">{qualifications}</Text>
        </Box>

        <HStack justify="space-between" w="full" pt={3}>
          <Link to={`/admin/applicants?role=${_id}`}>
            <Badge colorScheme="blue" fontSize="0.8em" borderRadius="md">Applicants: {applicants}</Badge>
          </Link>
          <Badge colorScheme="green" fontSize="0.8em" borderRadius="md">Posts: {posts}</Badge>
        </HStack>

        <Spacer /> {/* <- pushes buttons to the bottom */}

        {/* Increase / Decrease Buttons */}
        <HStack w="full" justify="space-between" pt={3}>
          <Buttons handleClick={ handleDecreasePost} title="-" colorscheme="red" />
          <Buttons handleClick={ handleIncreasePost} title="+" />
        </HStack>
      </Flex>
    </Box>
  );
};

export default CareerPostCard;
