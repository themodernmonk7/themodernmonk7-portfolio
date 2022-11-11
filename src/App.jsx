import { BrowserRouter, Routes, Route } from "react-router-dom"

import {
  HomePage,
  AboutPage,
  ContactPage,
  WorksPage,
  ErrorPage,
  SingleProjectPage,
} from "./pages"
import { Navbar, SayHello, Footer } from "./components"
import { useState } from "react"

function App() {
  const [dartToggle, setDarkToggle] = useState(false)
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="works" element={<WorksPage />} />
          <Route path="projects/:projectID" element={<SingleProjectPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <SayHello />
      <Footer />
    </BrowserRouter>
  )
}

export default App
