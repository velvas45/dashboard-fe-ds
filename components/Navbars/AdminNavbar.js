import React from "react";
import Link from "next/link";
import Router from "next/router";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";

// utils
import { decrypt } from "./../../utils/cryptoUtils";

function AdminNavbar({ brandText }) {
  const [users, setUsers] = React.useState(null);

  React.useEffect(() => {
    if (window.localStorage.getItem("users") !== null) {
      setUsers(JSON.parse(decrypt(window.localStorage.getItem("users"))));
    } else {
      return;
    }
  }, []);

  const logout = () => {
    if (
      window.localStorage.getItem("token") !== null &&
      window.localStorage.getItem("users") !== null
    ) {
      window.localStorage.clear();
      Router.push("/auth/login");
    }
  };

  return (
    <>
      <Navbar
        className="navbar-top navbar-light mb-5"
        expand="md"
        id="navbar-main"
      >
        <Container fluid>
          <Link href="/admin/dashboard">
            <a className="h4 mb-0 text-dark text-uppercase d-none d-lg-inline-block">
              {brandText}
            </a>
          </Link>
          <Form className="navbar-search navbar-search-light form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Search" type="text" />
              </InputGroup>
            </FormGroup>
          </Form>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">
                      {users?.email || ""}
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="ni ni-user-run" />
                  <span onClick={logout}>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;
