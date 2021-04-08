import React from "react";
// reactstrap components
import {
  Button,
  Container,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";

// signature canvas component
import SignatureCanvas from 'react-signature-canvas'

import Header from "components/Headers/Header.js";

const DigitalSignature = (props) => {
    const signPadRef = React.useRef();
    const [error, setError] = React.useState(false);

    const handleClear = () => {
        // if (signPadRef.current.isEmpty()) {
        //   setError(true);
        //   return
        // }

        // setError(false);
        signPadRef?.current?.clear?.();
    }

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="" fluid>
          <div className="d-flex w-75 justify-content-center mx-auto my-3">
          <SignatureCanvas backgroundColor='#999' penColor='black' canvasProps={{width: 800, height: 400, className: 'sigCanvas'}} ref={signPadRef} />
          </div>
           <Button color="primary" type="button" onClick={handleClear}>Hapus</Button>
      </Container>
    </>
  );
};

DigitalSignature.layout = Admin;

export default DigitalSignature;
