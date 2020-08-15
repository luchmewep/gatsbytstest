import React, { useContext, useEffect } from "react"
import Layout from "../components/layout"
import { CurrentPageContext } from "../context/CurrentPage"
import { MDBBtn } from "mdbreact"
import SEO from "../components/seo"

export default function Products() {
  const { currentPage, setCurrPage, checkPage } = useContext(CurrentPageContext)
  useEffect(() => {
    setCurrPage("Products")
  }, [])
  return (
    <Layout>
      <SEO title="Products" />
      <MDBBtn onClick={() => setCurrPage("Products")}>{currentPage}</MDBBtn>
    </Layout>
  )
}
