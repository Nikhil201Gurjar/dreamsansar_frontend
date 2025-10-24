import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import Layout from "./components/Layout";

import { Toaster } from "react-hot-toast";

const CareerPosts = lazy(() => import("./pages/Admin/CareerPosts"));

const Home = lazy(() => import("./pages/Home"));
const AdminDashboard = lazy(() => import("./pages/Admin/Dashboard"));
const AdminTestimonail = lazy(() => import("./pages/Admin/Testimonails"));

const Booking = lazy(() => import("./pages/Admin/Bookings"));
const CareerPage = lazy(() => import("./pages/CareerPage"));

const Applicants = lazy(() => import("./pages/Admin/Applicants"));
const Login = lazy(() => import("./pages/Auth/Login"));
const ChangePassword = lazy(() => import("./pages/Auth/ChangePassword"));
const Logout = lazy(() => import("./pages/Auth/Logout"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Error404 = lazy(() => import("./pages/Error404"));

const ServicePage = lazy(() => import("./pages/ServicesPage"));

const OurRoutes = () => {
  return (
    <>
      <Routes>
        {/* Home Page  */}
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Layout>
                <Home />
              </Layout>
            </Suspense>
          }
        />

        {/* Career Page  */}
        <Route
          path="/careers"
          element={
            <Suspense fallback={<Loading />}>
              <Layout>
                <CareerPage />
              </Layout>
            </Suspense>
          }
        />

        <Route
          path="/about_us"
          element={
            <Suspense fallback={<Loading />}>
              <Layout>
                <AboutUs />
              </Layout>
            </Suspense>
          }
        />

        {/* <Route path='/services/:serviceName' element={<Suspense fallback={<Loading />}><Layout ><ServicePage /></Layout> </Suspense>} /> */}

        <Route
          path="/services/:serviceName"
          element={
            <Suspense fallback={<Loading />}>
              <Layout>
                <ServicePage />
              </Layout>
            </Suspense>
          }
        />

        {/* -------------------------- Admin Specific Routes --------------X  */}
        {/* Admin Dashboard Page  */}
        <Route
          path="/admin/dashboard"
          element={
            <Suspense fallback={<Loading />}>
              <Layout>
                <AdminDashboard />
              </Layout>
            </Suspense>
          }
        />

        {/* Admin Bookings Page  */}
        <Route
          path="/admin/testimonails"
          element={
            <Suspense fallback={<Loading />}>
              <Layout>
                <AdminTestimonail />
              </Layout>
            </Suspense>
          }
        />

        {/* Admin Bookings Page  */}
        <Route
          path="/admin/bookings"
          element={
            <Suspense fallback={<Loading />}>
              <Layout>
                <Booking />
              </Layout>
            </Suspense>
          }
        />

        {/* Admin Career Page  */}
        {/* <Route
          path="/admin/careers_posts"
          element={
            <Suspense fallback={<Loading />}>
              <Layout>
                <CareerPosts />
              </Layout>
            </Suspense>
          }
        /> */}

        {/* Admin Career Page  */}
        <Route
          path={`/admin/applicants`}
          element={
            <Suspense fallback={<Loading />}>
              <Layout>
                <Applicants />
              </Layout>
            </Suspense>
          }
        />

        {/* Login Page  */}
        <Route
          path={`/admin/secret_page`}
          element={
            <Suspense fallback={<Loading />}>
              <Layout>
                <Login />
              </Layout>
            </Suspense>
          }
        />

        <Route
          path={`/admin/change_password`}
          element={
            <Suspense fallback={<Loading />}>
              <Layout>
                <ChangePassword />
              </Layout>
            </Suspense>
          }
        />
        <Route
          path={`/admin/logout`}
          element={
            <Suspense fallback={<Loading />}>
              <Layout>
                <Logout />
              </Layout>
            </Suspense>
          }
        />

        <Route
          path={"*"}
          element={
            <Suspense fallback={<Loading />}>
              <Layout>
                
                <Error404 />
              </Layout>
            </Suspense>
          }
        />
      </Routes>
      {/* Notification like in form of toasts  */}
      <Toaster />
    </>
  );
};

export default OurRoutes;
