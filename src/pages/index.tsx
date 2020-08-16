import React, { useContext, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { CurrentPageContext } from "../context/CurrentPage"
import { MDBBtn, MDBJumbotron, MDBContainer } from "mdbreact"

const IndexPage = () => {
  const { currentPage, setCurrPage, checkPage } = useContext(CurrentPageContext)
  useEffect(() => {
    setCurrPage("Home")
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <MDBJumbotron fluid>
        <MDBContainer>
          <h2 className="display-4">Homepage</h2>
          <p className="lead">This is homepage of NetX.</p>
        </MDBContainer>
      </MDBJumbotron>
    </Layout>
  )
}

export default IndexPage
