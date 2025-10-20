import { FormControl, FormLabel, Input, InputGroup, InputLeftElement,Textarea,Select } from '@chakra-ui/react'
import React from 'react'

const FormInput = ({ label, icon, type, placeholder, minlen, maxlen, name, value, handleChange, my = '4', css,isRequired=true }) => {
    return (
        <>
            <FormControl isRequired my={my}>
                
                {label && <FormLabel> {label}: </FormLabel>}

                <InputGroup>

                    <InputLeftElement pointerEvents='none'> {icon} </InputLeftElement>

                    <Input isRequired={isRequired} css={css} type={type} placeholder={placeholder} minLength={minlen} maxLength={maxlen} value={value} onChange={handleChange} name={name} id={name} outline={'purple'} />

                </InputGroup>

            </FormControl>
        </>
    )
}

export default FormInput

export const FormInputTextArea = ({ label, icon, type, placeholder, minlen, maxlen, name, value, handleChange, my = '4', css,isRequired=true }) => {
    return (
        <>
            <FormControl isRequired my={my}>
                
                {label && <FormLabel> {label}: </FormLabel>}

                <InputGroup>

                    <InputLeftElement pointerEvents='none'> {icon} </InputLeftElement>

                    <Textarea isRequired={isRequired} css={css} type={type} placeholder={placeholder} minLength={minlen} maxLength={maxlen} value={value} onChange={handleChange} name={name} id={name} outline={'purple'} />

                </InputGroup>

            </FormControl>
        </>
    )
}


export const FormInputSelect = ({ label, icon, type, placeholder, minlen, maxlen, name, value, handleChange, my = '4', css,options,isRequired=true }) => {

    return (
        <>
            <FormControl isRequired my={my}>
                
                {label && <FormLabel> {label}: </FormLabel>}

                <InputGroup>

                    <InputLeftElement pointerEvents='none'> {icon} </InputLeftElement>

                    <Select onChange={handleChange} name={name} value={value} isRequired={isRequired} placeholder={placeholder}>
                        {options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                        ))}
                    </Select>

                </InputGroup>

            </FormControl>
        </>
    )
}



export const FormInputSelectCountry = ({ label, icon, type, placeholder, minlen, maxlen, name, value, handleChange, my = '4', css,options,isRequired=true,isDisabled=false }) => {

    return (
        <>
            <FormControl isRequired my={my} isDisabled={isDisabled}>
                
                {label && <FormLabel> {label}: </FormLabel>}

                <InputGroup>

                    <InputLeftElement pointerEvents='none'> {icon} </InputLeftElement>

                    <Select onChange={handleChange} name={name} value={value} isRequired={isRequired} placeholder={placeholder}>
                        {options && options?.map((option) => (
                        <option key={option?.isoCode} value={option?.isoCode}>{option?.name}</option>
                        ))}
                    </Select>

                </InputGroup>

            </FormControl>
        </>
    )
}

export const FormInputSelectCity = ({ label, icon, type, placeholder, minlen, maxlen, name, value, handleChange, my = '4', css,options,isRequired=true,isDisabled=false }) => {

    return (
        <>
            <FormControl isRequired my={my} isDisabled={isDisabled}>
                
                {label && <FormLabel> {label}: </FormLabel>}

                <InputGroup>

                    <InputLeftElement pointerEvents='none'> {icon} </InputLeftElement>

                    <Select onChange={handleChange} name={name} value={value} isRequired={isRequired} placeholder={placeholder}>
                        {options && options?.map((option) => (
                        <option key={option?.name} value={option?.name}>{option?.name}</option>
                        ))}
                    </Select>

                </InputGroup>

            </FormControl>
        </>
    )
}