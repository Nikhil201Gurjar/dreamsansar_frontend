import { createSlice } from "@reduxjs/toolkit";
import { SERVER } from "../GlobalFunctions";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    bookings: [],
  },
  reducers: {
    //------------- handle to fetch Bookings details
    fetchBookingsRequest(state) {
      state.loading = true;
    },
    fetchBookings(state, action) {
      state.loading = false;
      state.success = true;
      state.msg = action.payload.msg;
      state.bookings = action.payload.bookings
      state.length = action.payload.Length
    },
    fetchBookingsError(state, action) {
      state.loading = false;
      state.success = false;
      state.msg = action.payload;
    },

    //--------------handle delete the Booking posts
    deleteBookingRequest(state) {
      state.loading = true;
    },
    deleteBooking(state, action) {
      state.loading = false;
      state.success = true;
      state.msg = action.payload.msg;
      const updatedId = action.payload._id;

      state.bookings = state.bookings.filter(
        (booking) => booking._id !== updatedId
      );


    },
    deleteBookingError(state, action) {
      state.loading = false;
      state.success = false;
      state.msg = action.payload;
    },
  },
});

export const {
 fetchBookings,fetchBookingsError,fetchBookingsRequest,deleteBooking,deleteBookingError,deleteBookingRequest
} = bookingSlice.actions;

export default bookingSlice.reducer;

//---------------Functions specific stuff;
export const handleFetchBookings = () => async (dispatch) => {
  dispatch(fetchBookingsRequest());
  try {
    const url = `${SERVER}/booking/showBookings`;
    const Token = localStorage.getItem("token");
    const options = {
      headers: {
        "auth-token": Token,
      },
    };

    const res = await fetch(url, options);
    const data = await res.json();

    console.log('data',data);
    if (data.success === true) {
      dispatch(
        fetchBookings({ bookings: data.bookings, Length: data.Length })
      );
    } else dispatch(fetchBookingsError(data.msg));
  } catch (error) {
    dispatch(fetchBookingsError(error));
  }
};

//-----------Increase the Booking posts
export const handleDeleteBooking = (_id) => async (dispatch) => {
  dispatch(deleteBookingRequest());
  try {
    const url = `${SERVER}/booking/deleteBooking/${_id}`;
    const Token = localStorage.getItem("token");
    const options = {
      method: "DELETE",
      headers: {
        "auth-token": Token,
      },
    };

    const res = await fetch(url, options);
    const data = await res.json();

    if (data.success === true) {
      dispatch(deleteBooking({ _id}));
    } else dispatch(deleteBookingError(data?.msg));
  } catch (error) {
    dispatch(deleteBookingError(error));
  }
};



