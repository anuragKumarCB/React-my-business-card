import React from "react"
import About from "./components/about/About"
import Footer from "./components/footer/Footer"
import Info from "./components/info/Info"
import Interest from "./components/interest/Interest"
import "./index.css"

export default function App() {
  return (

    <div className="container">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  )
}