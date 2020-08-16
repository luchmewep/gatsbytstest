import React, { useState, useEffect, useContext } from "react"
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarBrand,
  MDBCollapse,
  MDBNavbarToggler,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact"
import { Link } from "gatsby"
import { CurrentPageContext } from "../context/CurrentPage"

export default function NavBar() {
  const { currentPage, setCurrPage, checkPage } = useContext(CurrentPageContext)
  const [isOpen, setIsOpen] = useState(false)
  const toggleCollapse = () => setIsOpen(!isOpen)

  return (
    <MDBNavbar color="secondary-color" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">MDBNavbar</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem active={checkPage("Home")}>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </MDBNavItem>
          <MDBNavItem active={checkPage("Products")}>
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </MDBNavItem>
          <MDBNavItem active={checkPage("Blogs")}>
            <Link className="nav-link" to="/blogs">
              Blogs
            </Link>
          </MDBNavItem>
          <MDBNavItem active={checkPage("Examples")}>
            <Link className="nav-link" to="/examples">
              Testing Area
            </Link>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle className="dopdown-toggle" nav>
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
                  className="rounded-circle z-depth-0"
                  style={{ height: "35px", padding: 0 }}
                  alt=""
                />
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default" right>
                <MDBDropdownItem href="#!">My account</MDBDropdownItem>
                <MDBDropdownItem href="#!">Log out</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  )
}
