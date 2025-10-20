import React, { useState } from "react";
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
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import 'react-phone-input-2/lib/style.css'

import { Country, State, City } from "country-state-city";

import { FaRegUserCircle } from "react-icons/fa";

import Buttons from "../Buttons";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  handleDecreaseCareerPosts,
  handleDeleteCareerPosts,
  handleIncreaseCareerPosts,
} from "../../store/CareerPostsSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import FormInput, { FormInputSelect, FormInputSelectCity, FormInputSelectCountry, FormInputTextArea } from "../FormInput";
import TextHighlight from "../TextHighlight";
import PhoneInput from "react-phone-input-2";

const CareerCardApply = ({
  image,
  title,
  description,
  qualifications,
  applicants,
  posts,
  _id,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  //-----------------------Functions Specific stuff
  const handleApply = async () => {
    console.log("apply for post");
  };

  return (
    <Box
      w={{ base: "100%", sm: "300px" }}
      bg={"white"}
      borderRadius="2xl"
      boxShadow="xl"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", boxShadow: "2xl" }}
      position="relative"
      minH="460px" // <- makes room for Spacer to push content
      display="flex"
      flexDirection="column"
    >
      <ApplyCareerPost
        onClose={onClose}
        isOpen={isOpen}
        title={title}
        _id={_id}
      />
      {/* Image - fixed height */}
      <Image src={image} alt={title} h="180px" w="100%" objectFit="cover" />

      {/* Content area grows to fill available space */}
      <Flex direction="column" flex="1" overflow="hidden" position={"relative"}>
        <Box p="5">
          <Heading fontSize="lg">{title}</Heading>

          <Text fontSize="sm" color="gray.700" noOfLines={2} mt={2}>
            {description}
          </Text>

          <Divider my={3} />

          <Box>
            <Text fontWeight="semibold" fontSize="sm">
              Qualifications:
            </Text>
            <Text fontSize="sm" color="gray.700">
              {qualifications}
            </Text>
          </Box>

          <Box mt={2}>
            <Text fontWeight="semibold" fontSize="sm">
              Address:
            </Text>
            <Text fontSize="sm" color="gray.700">
              {qualifications}
            </Text>
          </Box>

          <HStack justify="space-between" w="full" pt={3}>
            <Link to={`/admin/applicants?role=${_id}`}>
              <Badge colorScheme="blue" fontSize="0.8em" borderRadius="md">
                Applicants: {applicants}
              </Badge>
            </Link>
            <Badge colorScheme="green" fontSize="0.8em" borderRadius="md">
              Posts: {posts}
            </Badge>
          </HStack>
        </Box>
        <Spacer /> {/* <- pushes buttons to the bottom */}
        <Buttons handleClick={onOpen} title="Apply" mx="auto" width={"full"} />
      </Flex>
    </Box>
  );
};

export default CareerCardApply;

const ApplyCareerPost = ({ isOpen, onClose, title, _id }) => {
  const loading = false;

  const [formData, setFormData] = useState({
    full_name: "",
    contact_address: "",
    qualifications: 0,
    email: "",
    address1: "",
    district: "",
    state:"",
    country:""
  });

  //Function to handle the onchange event on input data
  const handleOnChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  //---------- Function to submit the form data or can say login the users
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('formData',formData);

    if (
      !formData.full_name ||
      !formData.contact_address ||
      !formData.qualifications ||
      !formData.address1 ||
      !formData.email || !formData.district || !formData.state || !formData.country
    )
      return toast.error("All fields are required");

    

//     setFormData({
//      full_name: "",
//     contact_address: "",
//     qualifications: 0,
//     email: "",
//     address1: "",
//     district: "",
//     state:"",
//     country:""
//     });

//     onClose();

    
// setSelectedState(null)
// setSelectedCountry(null);
  };


  const [countries, setCountries] = useState(Country?.getAllCountries());
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setFormData({...formData,country});
    setStates(State.getStatesOfCountry(country?.isoCode));
    setCities([]);
  };

  const handleStateChange = (state) => {
    setSelectedState(state);
    setFormData({...formData,state});

    setCities(City.getCitiesOfState(selectedCountry?.isoCode, state?.isoCode));
  };

   const handlePhoneChange = (value) => setFormData({...formData,contact_address:value})
  

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text>
              Apply for <TextHighlight title={title}></TextHighlight>
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <form onSubmit={handleSubmit} style={{ minWidth: "100%" }}>
                <FormInput
                  type={"text"}
                  label={"Enter Full Name"}
                  icon={<FaRegUserCircle />}
                  name="full_name"
                  id="full_name"
                  placeholder={"John Doe"}
                  value={formData.full_name}
                  handleChange={handleOnChange}
                  minlen={5}
                  maxlen={120}
                />

                 <FormInput
                  type={"email"}
                  label={"Enter Email Address"}
                  icon={<FaRegUserCircle />}
                  name="email"
                  id="email"
                  placeholder={"johndoe23@gmail.com"}
                  value={formData.email}
                  handleChange={handleOnChange}
                  minlen={5}
                  maxlen={120}
                />
                <FormControl isRequired width={'full'}>

<FormLabel>Enter Your Contact Details</FormLabel>
                <PhoneInput
                inputStyle={{
      width: '100%',
      height: '45px',
      borderRadius: '8px',
      border: '1px solid #E2E8F0',
      paddingLeft: '48px',
    }}
                  country={'us'}
                  value={formData.contact_address}
                  onChange={handlePhoneChange}
                  name="contact_address"
                />
                </FormControl>

                <FormInputTextArea
                  label={"Enter Qualifications"}
                  name="qualifications"
                  id="qualifications"
                  placeholder={
                    "B.tech in Computer Science"
                  }
                  value={formData.qualifications}
                  handleChange={handleOnChange}
                  minlen={5}
                  maxlen={120}
                />

          

                <FormInputTextArea
                  label={"Enter Your Address"}
                  name="address1"
                  id="address1"
                  placeholder={"312, New Plot"}
                  value={formData.address1}
                  handleChange={handleOnChange}
                  minlen={5}
                  maxlen={120}
                />


                <FormInputSelectCountry label={'Select Your Country'} placeholder={'Select Country'} underOption={'isoCode'} options={countries} name={'country'} handleChange={handleCountryChange} />

     <FormInputSelectCountry label={'Select Your State'} isDisabled={!selectedCountry} placeholder={'Select State'} underOption={'isoCode'} options={states} name={'state'} handleChange={handleStateChange} />

         <FormInputSelectCity label={'Select Your District'} isDisabled={!selectedState || !selectedCountry} placeholder={'Select District'} underOption={'name'} options={cities} name={'district'} underOptionName={'name'} handleChange={(e) => {setFormData({...formData,district:e.target.value})}} />



                <div className="container">
                  <div className="row">
                 
                    {/* <div className="col">
                      <select
                        disabled={!selectedCountry}
                        className="form-select"
                        onChange={(e) =>
                          handleStateChange(
                            states.find((s) => s.isoCode === e.target.value)
                          )
                        }
                      >
                        <option value="">Select State</option>
                        {states.map((state) => (
                          <option key={state.isoCode} value={state.isoCode}>
                            {state.name}
                          </option>
                        ))}
                      </select>
                    </div> */}
                    {/* <div className="col">
                      <select
                        disabled={!selectedState || !selectedCountry}
                        className="form-select"
                      >
                        <option value="">Select City</option>
                        {cities.map((city) => (
                          <option key={city.name} value={city.name}>
                            {city.name}
                          </option>
                        ))}
                      </select>
                    </div> */}
                  </div>
                </div>

                <Box w="full" my="4" mx="auto">
                  <Buttons
                    isloading={loading}
                    handleClick={handleSubmit}
                    type="submit"
                    mx="auto"
                    fontsize="lg"
                    width="full"
                    title={"Submit Application"}
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
