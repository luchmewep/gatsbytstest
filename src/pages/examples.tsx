import React, { useContext, useEffect } from "react"
import { CurrentPageContext } from "../context/CurrentPage"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import { MDBCard, MDBCardBody, MDBCardHeader, MDBCardFooter } from "mdbreact"

const getData = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

export default function Examples() {
  const { setCurrPage } = useContext(CurrentPageContext)
  const {
    site: {
      siteMetadata: { title, description, author },
    },
  } = useStaticQuery(getData)
  useEffect(() => {
    setCurrPage("Examples")
  }, [])
  return (
    <Layout>
      <SEO title="Examples" />
      <MDBCard>
        <MDBCardHeader>
          <h3>{title}</h3>
        </MDBCardHeader>
        <MDBCardBody>
          <p>{description}</p>
        </MDBCardBody>
        <MDBCardFooter>{author}</MDBCardFooter>
      </MDBCard>
    </Layout>
  )
}
