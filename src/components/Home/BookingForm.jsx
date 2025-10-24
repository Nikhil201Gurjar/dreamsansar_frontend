import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Select,
  Button,
  FormControl,
  FormLabel,
  VStack,
  Grid,
  Image,
} from '@chakra-ui/react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

// import Arrow from '../../assets/arrow.png'
import Arrow from '../../assets/arrow1.png'
import FormInput, { FormInputTextArea } from '../FormInput';
import { FaPhoneAlt, FaRegUserCircle } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { MdOutlineDateRange } from 'react-icons/md';
import Buttons from '../Buttons';
import { SERVER } from '../../GlobalFunctions';
import toast from 'react-hot-toast';


const BookingForm = ({propmessage,onClose}) => {
  const [formData, setFormData] = useState({
      full_name: "",
      email: "",
      contact_address: "",
      message: propmessage? propmessage: "",
      time_slot: "",
    });

    const [loading,setLoading] = useState(false);
  
    //Function to handle the onchange event on input data
    const handleOnChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSelectSlot = (e)=>{
       const selectedDate = new Date(e.target.value).getTime(); // convert to ms timestamp
const today = new Date().setHours(0, 0, 0, 0); // today's date at midnight (no time part)

       if(selectedDate < today) return toast.error("Can't select the slot for old date");
        setFormData({ ...formData, time_slot: e.target.value });
    }
    const handlePhoneChange = (value) => setFormData({...formData,contact_address:value})
  
    //---------- Function to submit the form data or can say login the users
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      setLoading(true);
      if(!formData.contact_address || !formData.email || !formData.full_name || !formData.message || !formData.time_slot) {
             setLoading(false);
             toast.error('All fields are required');
             return
      }

      if(formData.contact_address.length < 10) {
     setLoading(false);
        toast.error("Phone number is not valid")
         return
      }

      if(formData.message.length < 12){
         setLoading(false);
        toast.error("Message could be 12 char long")
         return
      }

        if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formData.email))){
      setLoading(false);
toast.error(`${formData.email} is not an valid email`)
          return 

        }
       
       try {
          const url = `${SERVER}/booking/addBooking`;
          const options = {
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
          };
      
          const res = await fetch(url, options);
          const data = await res.json();
      
          console.log('booking .....',data,formData);
      
          if (data.success === true) {
            toast.success(data.msg)
          } else toast.error(data.msg);
        } catch (error) {
          const msg = error?.msg ? error?.msg : error
          toast.error(msg)
        }
  
      setFormData({   full_name: "",
      email: "",
      contact_address: "",
      message: "",
      time_slot: ""});

      setLoading(false);

      if(onClose)
            onClose();
  
    };
  return (    

     
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

                <FormInput type={'email'} label={'Enter Email'} icon={<AiOutlineMail />} name='email' id='email' placeholder={'johndoe23@gmail.com'} value={formData.email} handleChange={handleOnChange} minlen={5} maxlen={120} />

                <FormControl isRequired width={'full'}>
                
                <FormLabel>Enter Your Contact Details</FormLabel>


<PhoneInput
  country={'us'}
  value={formData.contact_address}
  onChange={handlePhoneChange}
  name="contact_address"
   inputStyle={{
      width: '100%',
      height: '45px',
      borderRadius: '8px',
      border: '1px solid #E2E8F0',
      paddingLeft: '48px',
    }}
/>

</FormControl>
              <FormInputTextArea
                                label={"Enter Your Concern"}
                                name="message"
                                id="message"
                                placeholder={"this is my message"}
                                value={formData.message}
                                handleChange={handleOnChange}
                                minlen={5}
                                maxlen={120}
                              />

                              
              <FormInput type={'date'} label={'Pick Your Slot'} icon={<MdOutlineDateRange />} name='time_slot' id='time_slot' value={formData.time_slot} handleChange={handleSelectSlot} minlen={5} maxlen={120} />


                <Box w="full" my="4" mx="auto">
                  <Buttons
                  isloading={loading}
                    handleClick={handleSubmit}
                    type="submit"
                    mx="auto"
                    fontsize="lg"
                    width="full"
                    title={"Booking A Slot"}
                  />
                </Box>
              </form>
            </VStack>
    
  );
};

export default BookingForm;
