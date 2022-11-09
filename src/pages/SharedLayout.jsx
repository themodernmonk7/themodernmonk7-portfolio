import React from "react"
import { Outlet } from "react-router-dom"
import { Navbar } from "../components"
import {
  AboutPage,
  ContactPage,
  HomePage,
  WorksPage,
  SingleProjectPage,
} from "../pages"
const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <AboutPage />
      <ContactPage />
      <HomePage />
      <WorksPage />
      {/* <SingleProjectPage /> */}
      <Outlet />
    </>
  )
}

export default SharedLayout
