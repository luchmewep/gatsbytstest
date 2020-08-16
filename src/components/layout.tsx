import React from "react"
import Footer from "./footer"
import "@luchmewep/fapro/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"
import NavBar from "./navbar"
import { MDBContainer } from "mdbreact"

const Layout = ({ children }: LayoutProps) => {
  return (
    <MDBContainer
      fluid
      style={{
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
      }}
    >
      <NavBar />
      <MDBContainer className="pt-3">{children}</MDBContainer>
      <Footer />
    </MDBContainer>
  )
}

interface LayoutProps {
  children: React.ReactNode
}

export default Layout
