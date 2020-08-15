import React, { useContext, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { CurrentPageContext } from "../context/CurrentPage"
import { MDBBtn } from "mdbreact"

const IndexPage = () => {
  const { currentPage, setCurrPage, checkPage } = useContext(CurrentPageContext)
  useEffect(() => {
    setCurrPage("Home")
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <MDBBtn onClick={() => setCurrPage("Home")}>{currentPage}</MDBBtn>
    </Layout>
  )
}

export default IndexPage
