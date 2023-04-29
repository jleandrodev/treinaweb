import { Routes, Route } from "react-router-dom"
import Index from "../views"
import About from "../views/about"
import Adress from "../views/Adress"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Index />} />
      <Route path="/:abc" element={<Adress />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default AppRoutes