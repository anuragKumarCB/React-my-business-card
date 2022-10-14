import React from "react"
import About from "./components/about/About"
import Footer from "./components/footer/Footer"
import Info from "./components/info/Info"
import Interest from "./components/interest/Interest"
import "./index.css"
import data from "./data/data"

export default function App() {
  const profileData = data.map(data => <Info profileData={data} />)
  const aboutData = data.map(data => <About aboutData={data} />)
  const interestData = data.map(data => <Interest interestData={data} />)


  return (

    <div className="container">
      {profileData}
      {aboutData}
      {interestData}
      <Footer />
    </div>
  )
}