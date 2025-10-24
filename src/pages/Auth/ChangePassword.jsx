import React,{useState} from 'react'

import { useNavigate, useParams } from 'react-router-dom';

import { Box, Container, Heading } from '@chakra-ui/react';

//Components Stuff
import { FormInputPassword } from './Login';
import Buttons from '../../components/Buttons';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import { SERVER } from '../../GlobalFunctions';


const ChangePassword = () => {
    const [loading,setLoading] = useState(false);

    const navigate = useNavigate();

    //------------------ Form Specific Stuff ----------------
    const [formData, setFormData] = useState({
        password: '',
        npassword: ''
    });


    //Function to handle the onchange event on input data
    const handleOnChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    //Function to change the password
    const handleChangePassword = async (e) => {
        e.preventDefault()
        setLoading(true);

        if(!formData.npassword || !formData.npassword){
            setLoading(false);
            toast.error('All fields are required');
            return;
        }

        if(formData.password.length < 8 || formData.npassword.length < 8){
             setLoading(false);
            toast.error('Password must be 8 char long');
            return;
        }

        if(formData.password !== formData.npassword){
             setLoading(false);
            toast.error('Password and Confirm password must be same');
            return;
        }

           try {
      const url = `${SERVER}/auth/change_pass`;
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };

      const res = await fetch(url, options);
      const data = await res.json();
      console.log('change passw',data);

      if (data.success === true) {
        toast.success(data.msg);
         setLoading(false);

        setFormData({ password: '',
        npassword: ''})

        navigate('/admin/secret_page');
      } else toast.error(data.msg);
    } catch (error) {
      const msg = error?.msg ? error?.msg : error;
      toast.error(msg);
    }

       

    }

    return (
        <>
          <Helmet>
                <title>Change Password | DreamSansar Consultancy</title>
                <meta
                  name="description"
                  content="DreamSansar Consultancy helps Nepali students with Ausbildung in Germany, Study in Europe & UK, FSJ, Au Pair, and German Language courses. "
                />
                <meta
                  name="keywords"
                  content="Ausbildung in Germany, Study in Germany, Nepali students, German language courses, visa support, DreamSansar Consultancy,change password"
                />
                <meta property="og:title" content="Change Password | DreamSansar Consultancy" />
                <meta
                  property="og:description"
                  content="Start your Ausbildung journey in Germany with DreamSansar Consultancy. Get expert visa help, placement, and training."
                />
                <meta
                  property="og:image"
                  content="https://dreamsansar.com/images/og-ausbildung.jpg"
                />
                <meta property="og:url" content="https://dreamsansar.com" />
              </Helmet>

            <section id='ChangePassword'>

                <Container minH={'container.md'} my={'5'}>

                    <Heading >Change Your Password</Heading>

                    <form onSubmit={handleChangePassword} >

                        <FormInputPassword label={'Enter New Password'} name={'password'} id='password' value={formData.password} handleChange={handleOnChange} />

                        <FormInputPassword label={'Re-Enter New Password'} name={'npassword'} id='npassword' value={formData.npassword} handleChange={handleOnChange} />


                        <Box p='2' my='4' w={'full'} mx={'auto'}>
                            <Buttons handleClick={handleChangePassword} fontsize='lg' display={'block'}  mx='auto' isloading={loading}  width="full" title={'Change Password'} />
                        </Box>

                    </form>

                </Container>



            </section>
        </>
    )
}

export default ChangePassword