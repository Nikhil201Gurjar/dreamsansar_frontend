import { createSlice } from "@reduxjs/toolkit";
import { SERVER } from "../GlobalFunctions";

const testimonailSlice = createSlice({
  name: "testimonail",
  initialState: {
    testimonails: [],
    success:false,
    msg:'',
    loading:false
  },
  reducers: {
    //------------- handle to fetch Testimonails details
    fetchTestimonailsRequest(state) {
      state.loading = true;
    },
    fetchTestimonails(state, action) {
      state.loading = false;
      state.success = true;
      state.msg = action.payload.msg;
      console.log('test',action.payload.testimonails)
      state.testimonails = action.payload.testimonails
      state.length = action.payload.Length
    },
    fetchTestimonailsError(state, action) {
      state.loading = false;
      state.success = false;
      state.msg = action.payload;
    },

    //--------------handle delete the Testimonail posts
    deleteTestimonailRequest(state) {
      console.log('rquest...')
      state.loading = true;
    },
    deleteTestimonail(state, action) {
      console.log('....deleting',action.payload);
      state.loading = false;
      state.success = true;
      const updatedId = action.payload._id;
      console.log('testi',state.testimonails,updatedId)
      state.testimonails = state.testimonails.filter(
        (testimonail) => testimonail._id !== updatedId
      );
      console.log('after',state.testimonails)

    },
    deleteTestimonailError(state, action) {
      console.log('errror....')

      state.loading = false;
      state.success = false;
      state.msg = action.payload;
    },
    //--------------handle add the Testimonail posts
    addTestimonailRequest(state) {
      state.loading = true;
    },
    addTestimonail(state, action) {
      state.loading = false;
      state.success = true;
      console.log('push',action.payload.testimonail,action.payload)
      state.testimonails.push(action.payload.testimonail);
    },
    addTestimonailError(state, action) {
      state.loading = false;
      state.success = false;
      state.msg = action.payload;
    },

    clearTestimoanial(state,action){
      state.loading = false;
      state.success = false;
      state.msg = '';
    }
  },
});

export const {
 fetchTestimonails,fetchTestimonailsError,fetchTestimonailsRequest,deleteTestimonail,deleteTestimonailError,deleteTestimonailRequest,addTestimonail,addTestimonailError,addTestimonailRequest,clearTestimoanial
} = testimonailSlice.actions;

export default testimonailSlice.reducer;

//---------------Functions specific stuff;
export const handleFetchTestimonails = () => async (dispatch) => {
  dispatch(fetchTestimonailsRequest());
  try {
    const url = `${SERVER}/testimonial/allTestimonial`;
    const options = { };

    const res = await fetch(url, options);
    const data = await res.json();

    console.log('data',data);

    if (data.success === true) {
      dispatch(fetchTestimonails({ testimonails: data?.testimonials, Length: data.Length }));
    } else dispatch(fetchTestimonailsError(data.msg));
  } catch (error) {
    dispatch(fetchTestimonailsError(error));
  }

  dispatch(clearTestimoanial());

};

//-----------Increase the Testimonail posts
export const handleDispatchAddTestimonail = (formData) => async (dispatch) => {
  dispatch(addTestimonailRequest());
  console.log('formData',formData);

  try {
    const url = `${SERVER}/testimonial/addTestimonial`;
    const Token = localStorage.getItem("token");
    const options = {
      method: "POST",
      headers: {
        "auth-token": Token,
        "Content-Type": "application/json"
      },
       body: JSON.stringify(formData)
    };

    const res = await fetch(url, options);
    const data = await res.json();

    console.log('dat',data);

    if (data.success === true) {
      dispatch(addTestimonail({testimonail:data?.testimonial}));
    } else dispatch(addTestimonailError(data?.msg));
  } catch (error) {
    dispatch(addTestimonailError(error));
  }

  dispatch(clearTestimoanial());
};


//-----------Increase the Testimonail posts
export const handleDispatchDeleteTestimonail = (_id) => async (dispatch) => {
  dispatch(deleteTestimonailRequest());
  try {
    const url = `${SERVER}/testimonial/deleteTestimonial/${_id}`;
    const Token = localStorage.getItem("token");
    const options = {
      method: "DELETE",
      headers: {
        "auth-token": Token,
      },
    };

    const res = await fetch(url, options);
    const data = await res.json();

    console.log('delete',data);

    if (data.success === true) {
       dispatch(deleteTestimonail({_id}));
    } else dispatch(deleteTestimonailError(data?.msg));
  } catch (error) {
    dispatch(deleteTestimonailError(error));
  }

  dispatch(clearTestimoanial());

};
