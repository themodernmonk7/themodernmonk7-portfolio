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
import SharedLayout from "./pages/SharedLayout"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="works" element={<WorksPage />} />
        <Route path="projects/:id" element={<SingleProjectPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <SayHello />
      <Footer />
    </BrowserRouter>
  )
}

export default App
