import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

//Store Stuff
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/UserSlice";
import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import AdminLayout from "../../components/Admin/AdminLayout";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //------ Function to logout the user
  useEffect(() => {
    localStorage.removeItem("token");

    dispatch(logoutUser());

    navigate("/");
  }, [dispatch, navigate]);

  return (
    <>
      <AdminLayout>
        <section id="Applicants">
          <Box p={6} bg="gray.50" minH="100vh" style={{ overflow: "scroll" }}>
            <Text fontSize="2xl" fontWeight="bold" mb={6}>
              DreamSansar
            </Text>
            <Divider />

            <Text p={3} m={3}>
              Please wait. you're going logout....
            </Text>
          </Box>
        </section>
      </AdminLayout>
    </>
  );
};

export default Logout;
