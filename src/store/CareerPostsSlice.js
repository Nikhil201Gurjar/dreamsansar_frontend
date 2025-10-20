import { createSlice } from "@reduxjs/toolkit";
import { SERVER } from "../GlobalFunctions";


const CareerPostsSlice = createSlice({
    name:'career_posts',
    initialState:{
        careerposts:[]
    },
    reducers:{
        //------------- handle to fetch careerposts details
        fetchCareerPostsRequest(state) {
            state.loading = true;
        },
        fetchCareerPosts(state, action) {
            state.loading = false;
            state.success = true;
            state.careerposts = action.payload.careers_posts,
            state.length = action.payload.Length
        },
        fetchCareerPostsError(state, action) {
            state.loading = false;
            state.success = false;
            state.msg = action.payload;
        },


        //--------------handle increase the career posts
        increaseCareerPostsRequest(state) {
            state.loading = true;
        },
        increaseCareerPosts(state, action) {
            state.loading = false;
            state.success = true;
            state.msg = action.payload.msg;
            const updatedId = action.payload._id;
            const postIndex = state.careerposts.findIndex(
        (post) => post._id === updatedId
      );
      if (postIndex !== -1) {
        state.careerposts[postIndex].number_of_posts += 1;
      }
        },
        increaseCareerPostsError(state, action) {
            state.loading = false;
            state.success = false;
            state.msg = action.payload;
        },

         //--------------handle decrease the career posts
        decreaseCareerPostsRequest(state) {
            state.loading = true;
        },
        decreaseCareerPosts(state, action) {
            state.loading = false;
            state.success = true;
            state.msg = action.payload.msg;
            const updatedId = action.payload._id;
            const postIndex = state.careerposts.findIndex(
        (post) => post._id === updatedId
      );
      if (postIndex !== -1 &&  state.careerposts[postIndex].number_of_posts !=0) {
        state.careerposts[postIndex].number_of_posts -= 1;
      }
        },
        decreaseCareerPostsError(state, action) {
            state.loading = false;
            state.success = false;
            state.msg = action.payload;
        },

         //--------------handle delete the career posts
        deleteCareerPostsRequest(state) {
            state.loading = true;
        },
        deleteCareerPosts(state, action) {
            state.loading = false;
            state.success = true;
            state.msg = action.payload.msg;
            const updatedId = action.payload._id;
           state.careerposts = state.careerposts.filter(
    (career) => career._id !== updatedId
  );
        },
        deleteCareerPostsError(state, action) {
            state.loading = false;
            state.success = false;
            state.msg = action.payload;
        },

         //--------------handle add the career posts
        addCareerPostsRequest(state) {
            state.loading = true;
        },
        addCareerPosts(state, action) {
            state.loading = false;
            state.success = true;
            state.msg = action.payload.msg;
            state.careerposts.push(action.payload.career_post)
        },
        addCareerPostsError(state, action) {
            state.loading = false;
            state.success = false;
            state.msg = action.payload;
        },
    }
});

export const {fetchCareerPosts,fetchCareerPostsError,fetchCareerPostsRequest,increaseCareerPosts,increaseCareerPostsError,increaseCareerPostsRequest,decreaseCareerPosts,decreaseCareerPostsError,decreaseCareerPostsRequest,deleteCareerPosts,deleteCareerPostsError,deleteCareerPostsRequest,addCareerPosts,addCareerPostsError,addCareerPostsRequest} = CareerPostsSlice.actions;

export default CareerPostsSlice.reducer;

//---------------Functions specific stuff;
export const handleFetchCareerPosts = () => async dispatch => {
    dispatch(fetchCareerPostsRequest());
    try{
        const url = `${SERVER}/career/allCareerPosts`;
        const options = { };

        const res = await fetch(url, options);
        const data = await res.json();

        if (data.success === true) {
            dispatch(fetchCareerPosts({careers_posts:data.careers_posts,Length:data.Length}));
        }
        else dispatch(fetchCareerPostsError(data.msg));

    } catch (error) {
        dispatch(fetchCareerPostsError(error));
    }
}

//-----------Increase the career posts
export const handleIncreaseCareerPosts = (_id) => async dispatch => {
    dispatch(increaseCareerPostsRequest());
    try{
        const url = `${SERVER}/career/increaseCareerPost/${_id}`;
        const Token = localStorage.getItem('token');
        const options = {
            method:'PUT',
            headers: {
                'auth-token': Token
            }
        };

        const res = await fetch(url, options);
        const data = await res.json();

        if (data.success === true) {
            dispatch(increaseCareerPosts({_id}));
        }
        else dispatch(increaseCareerPostsError(data?.msg));

    } catch (error) {
        dispatch(increaseCareerPostsError(error));
    }
}

//-----------Increase the career posts
export const handleDecreaseCareerPosts = (_id) => async dispatch => {
    dispatch(decreaseCareerPostsRequest());
    try{
        const url = `${SERVER}/career/decreaseCareerPost/${_id}`;
        const Token = localStorage.getItem('token');
        const options = {
            method:'PUT',
            headers: {
                'auth-token': Token
            }
        };

        const res = await fetch(url, options);
        const data = await res.json();

        if (data.success === true) {
            dispatch(decreaseCareerPosts({_id}));
        }
        else dispatch(decreaseCareerPostsError(data?.msg));

    } catch (error) {
        dispatch(decreaseCareerPostsError(error));
    }
}

//-----------Increase the career posts
export const handleDeleteCareerPosts = (_id) => async dispatch => {
    dispatch(deleteCareerPostsRequest());
    try{
        const url = `${SERVER}/career/deleteCareerPost/${_id}`;
        const Token = localStorage.getItem('token');
        const options = {
            method:'DELETE',
            headers: {
                'auth-token': Token
            }
        };

        const res = await fetch(url, options);
        const data = await res.json();

        if (data.success === true) {
            dispatch(deleteCareerPosts({_id}));
        }
        else dispatch(deleteCareerPostsError(data?.msg));

    } catch (error) {
        dispatch(deleteCareerPostsError(error));
    }
}

//----------Add a career post
export const handleAddCareerPosts = (formData) => async dispatch => {
    dispatch(addCareerPostsRequest());
 console.log('dispatch formdata',formData);
    try{
        const url = `${SERVER}/career/addCareerPost`;
        const Token = localStorage.getItem('token');
        const options = {
            method:'POST',
            headers: {
                'auth-token': Token
            },
            body: formData
        };

        const res = await fetch(url, options);
        const data = await res.json();
        console.log('data',data)
        const career_post = data?.career_post

        if (data.success === true) {
            console.log('successfully added the career post',data)
            // dispatch(addCareerPosts({career_post}));
        }
        else dispatch(addCareerPostsError(data?.msg));

    } catch (error) {
        dispatch(addCareerPostsError(error));
    }
}
