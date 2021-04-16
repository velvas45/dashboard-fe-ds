import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

function Header() {
  return (
    <>
      <div className="header bg-white pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body"></div>
        </Container>
      </div>
    </>
  );
}

export default Header;
