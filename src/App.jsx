import React from 'react'
import './App.css'
import HomePage from './components/HomePage';
import Portfolio from './components/Portfolio';
import Services from "./components/Services";


// import { Route, Routes } from 'react-router-dom'

import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            // <RequireAuth>
              <HomePage />
            // </RequireAuth>
          }
          // loader={<Loader />}
        />
        <Route
          path="/portfolio"
          element={
            // <RequireAuth>
              <Portfolio />
            // </RequireAuth>
          }
          // loader={<Loader />}
        />
        <Route
          path="/services"
          element={
            // <RequireAuth>
              <Services />
            // </RequireAuth>
          }
          // loader={<Loader />}
        />
        {/* <Route
          path="/"
          element={
            <RequireAuth>
              <LandingPage />
            </RequireAuth>
          }
          loader={<Loader />}
        />
        <Route
          path="/roles"
          element={
            <RequireAuth>
              <RoleList />
            </RequireAuth>
          }
        />
        <Route
          path="/permission"
          element={
            <RequireAuth>
              <PermissionForm />
            </RequireAuth>
          }
          loader={<Loader />}
        />
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
          loader={<Loader />}
        />
        <Route
          path="/forgotpassword"
          element={
            <>
              <ForgotPassword />
            </>
          }
          loader={<Loader />}
        />
        <Route
          path="/otp/:email"
          element={
            <>
              <Otp />
            </>
          }
          loader={<Loader />}
        />
        <Route
          path="/projects"
          element={
            <RequireAuth>
              <ProjectList />
            </RequireAuth>
          }
          loader={<Loader />}
        />
        <Route
          path="/addprojectphase/:id"
          element={
            <RequireAuth>
              <Addprojectphase />
            </RequireAuth>
          }
          loader={<Loader />}
        />
        <Route
          path="/viewprojectphase/:id"
          element={
            <RequireAuth>
              <Viewprojectphase />
            </RequireAuth>
          }
          loader={<Loader />}
        />

        <Route
          path="/placeholder"
          element={
            <>
              <PlaceholderLoader />
            </>
          }
          loader={<Loader />}
        />
        <Route
          path="/viewprojectphase/addprojectphase/:pid/:vid"
          element={
            <RequireAuth>
              <EditProjectPhase />
            </RequireAuth>
          }
          loader={<Loader />}
        />
        <Route
          path="/performances/staff/details/:id"
          element={
            <RequireAuth>
              <UserPerformancesDetails />
            </RequireAuth>
          }
          loader={<Loader />}
        />
        <Route
          path="/profile/:id"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
          loader={<Loader />}
        />
         {
        path: "/performances/sales/staff/:id?",
        element: (
          <RequireAuth>
            {" "}
            <SalesStaffPerformanceDetails />
          </RequireAuth>
        ),
        loader: <Loader />,
      },
      <Route path="/performances/sales/staff/:id?"element={
        <RequireAuth>
          <SalesStaffPerformanceDetails/>
        </RequireAuth>
      }/>
      <Route path="/resetpassword/:email/:otp"element={
          <ResetPassword/>
      }/>

        {routePaths &&
          routePaths.map((route, index) => <Route key={index} {...route} />)}
        <Route
          path="/*"
          element={
            <>
              <PageNotFound />
            </>
          }
          loader={<Loader />}
        /> */}
      </Routes>
    </HashRouter>
  )
}

export default App
