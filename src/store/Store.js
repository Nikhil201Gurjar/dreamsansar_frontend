
import UserSlice from "./UserSlice";
import CareerPostsSlice from './CareerPostsSlice'
import ApplicantSlice from './ApplicantSlice'
import BookingSlice from './BookingSlice'
import TestimonailSlice from './TestimonailSlice'
import {configureStore} from '@reduxjs/toolkit'



//----------- Creating a store to handle all the states of the app
const Store = configureStore({
    reducer : {
        user : UserSlice,
        careerposts: CareerPostsSlice,
        applicant: ApplicantSlice,
        booking: BookingSlice,
        testimonail:TestimonailSlice
    },
    devTools: import.meta.env.VITE_NODE_ENV !== 'production',
})

export default Store;