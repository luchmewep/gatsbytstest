import React, { useContext, useEffect } from "react"
import Layout from "../components/layout"
import { CurrentPageContext } from "../context/CurrentPage"
import SEO from "../components/seo"
import { MDBJumbotron, MDBContainer } from "mdbreact"

export default function Products() {
  const { setCurrPage } = useContext(CurrentPageContext)
  useEffect(() => {
    setCurrPage("Products")
  }, [])

  return (
    <Layout>
      <SEO title="Products" />
      <MDBJumbotron fluid>
        <MDBContainer>
          <h2 className="display-4">Products Page</h2>
          <p className="lead">This is where the products will be displayed.</p>
        </MDBContainer>
      </MDBJumbotron>
    </Layout>
  )
}
