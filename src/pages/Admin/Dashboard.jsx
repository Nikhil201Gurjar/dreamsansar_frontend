import React, { useEffect } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import { Box, Divider, Heading, HStack, Icon, Stack } from "@chakra-ui/react";

//Icons/Images Specific Stuff
import { MdOutlineViewSidebar, MdPayment } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { TbBrandBooking } from "react-icons/tb";
import { PiStudent } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";

import { IoIosCreate } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchCareerPosts } from "../../store/CareerPostsSlice";
import { handleFetchBookings } from "../../store/BookingSlice";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const dispatch = useDispatch();

  // const { length } = useSelector((state) => state.careerposts);
  const { length:bookingLength } = useSelector((state) => state.booking);
  

  useEffect(() => {
    // dispatch(handleFetchCareerPosts());
    dispatch(handleFetchBookings());
  }, [dispatch]);

  return (
    <>
     <Helmet>
            <title>Dashboard | DreamSansar Consultancy</title>
            <meta
              name="description"
              content="DreamSansar Consultancy helps Nepali students with Ausbildung in Germany, Study in Europe & UK, FSJ, Au Pair, and German Language courses. "
            />
            <meta
              name="keywords"
              content="Ausbildung in Germany, Study in Germany, Nepali students, German language courses, visa support, DreamSansar Consultancy,career"
            />
            <meta property="og:title" content="Dashboard | DreamSansar Consultancy" />
            <meta
              property="og:description"
              content="Start your Ausbildung journey in Germany with DreamSansar Consultancy. Get expert visa help, placement, and training."
            />
            <meta
              property="og:image"
              content="https://dreamsansar.com/images/og-ausbildung.jpg"
            />
            <meta property="og:url" content="https://dreamsansar.com/admin/dashboard" />
          </Helmet>

      <AdminLayout>
        <section id="Dashboard">
          <Heading>Dashboard</Heading>

          {/* <Text textAlign={'center'} my='2' size={'sm'}> Last Change On {String(new Date()).split('G')[0]} </Text> */}

          {/* Here is the container, where we show assets like views,users and subscription */}
          <Divider />
          <Box my="2" p="2">
            <Stack
              justifyContent={"flex-start"}
              direction={["column","column", "row"]}
              spacing={"4"}
            >
              <AssetsCard
                qty={bookingLength ? bookingLength: 0}
                icon={<FaRegUser size={"40px"} />}
                Link="/admin/bookings"
                title="Bookings"
                qtyPercentage={80}
              />
              {/* <AssetsCard
                qty={length ? length : 0}
                icon={<IoIosCreate size={"40px"} />}
                Link="/admin/careers_posts"
                title="Career Posts"
                qtyPercentage={80}
              /> */}
            </Stack>
          </Box>
        </section>
      </AdminLayout>
    </>
  );
};

export default Dashboard;

//------------------ Card to show assets are in form of profitables or not
export const AssetsCard = ({
  title,
  icon,
  profitable = true,
  qty,
  qtyPercentage,
  Link,
}) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(Link);
    console.log(Link);
  };
  return (
    <Box
      borderRadius={"md"}
      boxShadow={"dark-lg"}
      my="2"
      mx="2"
      cursor={"pointer"}
      onClick={handleOnClick}
      style={{ height: "115px" }}
      width={['200px','300px']}
    >
      {/* Here we showing the stats counts and title of stats card  */}
      <Heading p={"2"} size={"sm"}>
        {title}
      </Heading>
      <HStack justify={"space-evenly"} p={"5"}>
        {icon}
        <Heading>
          {" "}
          <strong>{qty}</strong>
        </Heading>
      </HStack>
    </Box>
  );
};
