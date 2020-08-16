import React, { useContext, useEffect } from "react"
import Layout from "../components/layout"
import { CurrentPageContext } from "../context/CurrentPage"
import {
  MDBCardGroup,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBJumbotron,
  MDBContainer,
} from "mdbreact"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

const getData = graphql`
  {
    netx {
      posts {
        id
        title
        content
        author {
          name
          email
        }
      }
    }
  }
`
interface productInt {
  id: string
  title: string
  content: string
  author: {
    name: string
    email: string
  }
}

export default function Blogs() {
  const { setCurrPage } = useContext(CurrentPageContext)
  useEffect(() => {
    setCurrPage("Blogs")
  }, [])
  const {
    netx: { posts },
  } = useStaticQuery(getData)
  return (
    <Layout>
      <SEO title="Blogs" />
      <MDBJumbotron fluid>
        <MDBContainer>
          <h2 className="display-4">Blogs</h2>
          <p className="lead">
            <p>
              Sample blogs. Just to demonstrate <strong>Gatsby</strong> +{" "}
              <strong>GraphQL</strong> + <strong>Laravel</strong>
            </p>
            <strong>
              Thanks to Gatsby's "Prefetching" feature, the cards shows fast!
            </strong>
            🎉🎉🎉
          </p>
        </MDBContainer>
      </MDBJumbotron>
      <MDBCardGroup column>
        {posts.map(
          ({ id, title, content, author: { name, email } }: productInt) => (
            <MDBCard key={id}>
              <MDBCardBody>
                <MDBCardTitle tag="h5">{title}</MDBCardTitle>
                <MDBCardText>{content}</MDBCardText>
              </MDBCardBody>
              <MDBCardFooter small muted>
                Created by {name} ({email})
              </MDBCardFooter>
            </MDBCard>
          )
        )}
      </MDBCardGroup>
    </Layout>
  )
}
