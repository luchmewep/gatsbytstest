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
  MDBCarousel,
  MDBCarouselInner,
  MDBRow,
  MDBCarouselItem,
  MDBCol,
  MDBCardImage,
  MDBBtn,
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
interface blogtInt {
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
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={3}
          slide={true}
          showControls={true}
          showIndicators={true}
          multiItem
        >
          <MDBCarouselInner>
            <MDBRow>
              <MDBCarouselItem itemId="1">
                {posts.map(
                  ({
                    id,
                    title,
                    content,
                    author: { name, email },
                  }: blogtInt) => (
                    <MDBCol key={id} md="4">
                      <MDBCard className="mb-2">
                        <MDBCardImage
                          className="img-fluid"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                        />
                        <MDBCardBody>
                          <MDBCardTitle>{title}</MDBCardTitle>
                          <MDBCardText>{content}</MDBCardText>
                          <MDBBtn color="primary">MDBBtn</MDBBtn>
                        </MDBCardBody>
                        <MDBCardFooter small muted>
                          Created by {name} ({email})
                        </MDBCardFooter>
                      </MDBCard>
                    </MDBCol>
                  )
                )}
              </MDBCarouselItem>
            </MDBRow>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
      <MDBCardGroup column>
        {posts.map(
          ({ id, title, content, author: { name, email } }: blogtInt) => (
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
