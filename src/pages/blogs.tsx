import React, { useContext, useEffect } from "react"
import Layout from "../components/layout"
import { CurrentPageContext } from "../context/CurrentPage"
import { MDBBtn } from "mdbreact"
import SEO from "../components/seo"

export default function Blogs() {
  const { currentPage, setCurrPage, checkPage } = useContext(CurrentPageContext)
  useEffect(() => {
    setCurrPage("Blogs")
  }, [])
  return (
    <Layout>
      <SEO title="Blogs" />
      <MDBBtn onClick={() => setCurrPage("Blogs")}>{currentPage}</MDBBtn>
    </Layout>
  )
}
