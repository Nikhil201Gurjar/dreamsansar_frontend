import React, { useEffect, useState } from 'react'


import {Link, useNavigate} from 'react-router-dom'

import {
    Container, VStack, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    InputLeftElement,
    Heading,
    Box,
    Text,
} from '@chakra-ui/react'

//Icons/Images Specific Stuff
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'


//Components Stuff
import FormInput from '../../components/FormInput'
import TextHighlight from '../../components/TextHighlight'
import Buttons from '../../components/Buttons'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, handleLoginUser } from '../../store/UserSlice'
import toast from 'react-hot-toast'


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

      //------------------ Store specific stuff
    const { loading } = useSelector(state => state.user);

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token)
            navigate('/admin/dashboard');
    },[dispatch])

    //------------------ Form Specific Stuff ----------------
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });


    //Function to handle the onchange event on input data
    const handleOnChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    //---------- Function to submit the form data or can say login the users 
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!formData.email || !formData.password){
            toast.error('All fields are required');
            return;
        }

       if ((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formData.email)) === false) {
            toast.error(`${formData.email} is not valid`);
            setFormData({ ...formData, email: '' });
            return;
        }

        await dispatch(handleLoginUser(formData));
        setFormData({ email: '', password: '' });

    }

    return (
        <>
            <section id="Login">

                <Container minH={'container.sm'} my={'5'}>

                    <Heading>Welcome to  DreamSansar</Heading>

                    <form style={{ minWidth: "100%" }} onSubmit={handleSubmit}>
                        <VStack>

                            <FormInput type={'email'} label={'Enter Email'} icon={<AiOutlineMail />} name='email' id='email' placeholder={'johndoe23@gmail.com'} value={formData.email} handleChange={handleOnChange} minlen={5} maxlen={120} />

                            <FormInputPassword label={'Enter Password'} name={'password'} id='password' value={formData.password} handleChange={handleOnChange} />

                            <Link to='/admin/change_password' ><Text mt='-3.5' me={'-72'}  ><TextHighlight title={'Forget Password'} size='sm' /> </Text> </Link>

                            <Box w='full' my='4' display={'block'} mx='auto'>
                                <Buttons isloading={loading} type='submit' handleClick={handleSubmit} fontsize='lg' width="full" title={'Login'} mx='auto' />

                            </Box>

                        </VStack>
                    </form>

                </Container>

            </section>
        </>
    )
}

export default Login


//------------ Form controller used to store only password
export const FormInputPassword = ({ label, name, id, handleChange, value }) => {

    //Function to show data of password
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <FormControl isRequired my='4'>

            <FormLabel>{label} :</FormLabel>

            <InputGroup size='md'>
                <InputLeftElement pointerEvents='none'> <RiLockPasswordLine /> </InputLeftElement>

                <Input
                    pr='4.5rem'
                    name={name}
                    type={show ? 'text' : 'password'}
                    placeholder='*********'
                    minLength={8} maxLength={120}
                    value={value}
                    onChange={handleChange}
                    id={id}
                />

                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>
    )
}