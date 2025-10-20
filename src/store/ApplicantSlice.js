import { createSlice } from "@reduxjs/toolkit";
import { SERVER } from "../GlobalFunctions";

const applicantsSlice = createSlice({
  name: "applicants",
  initialState: {
    applicants: [],
  },
  reducers: {
    //------------- handle to fetch applicants details
    fetchApplicantsRequest(state) {
      state.loading = true;
    },
    fetchApplicants(state, action) {
      state.loading = false;
      state.success = true;
      state.msg = action.payload.msg;
      (state.applicants = action.payload.applicants),
        (state.length = action.payload.Length);
    },
    fetchApplicantsError(state, action) {
      state.loading = false;
      state.success = false;
      state.msg = action.payload;
    },

    //--------------handle delete the applicant posts
    deleteApplicantRequest(state) {
      state.loading = true;
    },
    deleteApplicant(state, action) {
      state.loading = false;
      state.success = true;
      state.msg = action.payload.msg;
      const updatedId = action.payload._id;

      state.applicants = state.applicants.filter(
        (applicant) => applicant._id !== updatedId
      );


    },
    deleteApplicantError(state, action) {
      state.loading = false;
      state.success = false;
      state.msg = action.payload;
    },
  },
});

export const {
  fetchApplicants,
  fetchApplicantsError,
  fetchApplicantsRequest,
  deleteApplicant,
  deleteApplicantError,
  deleteApplicantRequest,
} = applicantsSlice.actions;

export default applicantsSlice.reducer;

//---------------Functions specific stuff;
export const handleFetchApplicants = (_id) => async (dispatch) => {
  dispatch(fetchApplicantsRequest());
  try {
    const url = `${SERVER}/applicant/fetchApplicant/${_id}`;
    const Token = localStorage.getItem("token");
    const options = {
      headers: {
        "auth-token": Token,
      },
    };

    const res = await fetch(url, options);
    const data = await res.json();

    if (data.success === true) {
      dispatch(
        fetchApplicants({ applicants: data.applicants, Length: data.Length })
      );
    } else dispatch(fetchApplicantsError(data.msg));
  } catch (error) {
    dispatch(fetchApplicantsError(error));
  }
};

//-----------Increase the applicant posts
export const handleDeleteApplicant = (_id,role) => async (dispatch) => {
  dispatch(deleteApplicantRequest());
  console.log("id at delete", _id,role);
  try {
    const url = `${SERVER}/applicant/deleteApplicant/${_id}?role=${role}`;
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
      dispatch(deleteApplicant({ _id,role }));
    } else dispatch(deleteApplicantError(data?.msg));
  } catch (error) {
    dispatch(deleteApplicantError(error));
  }
};
