import React from "react";
import Routes from "next/router";
// reactstrap components
import { Button, Container, Spinner, Alert } from "reactstrap";
// layout for this page
import Kyc from "layouts/Kyc.js";

// signature canvas component
import SignatureCanvas from "react-signature-canvas";

import Header from "components/Headers/Header.js";
// utils
import { decrypt } from "../../utils/cryptoUtils";
import { peruri } from "../../utils/api";

const DigitalSignature = (props) => {
  const signPadRef = React.useRef();
  const [error, setError] = React.useState(false);
  const [token, setToken] = React.useState(null);
  const [isHandler, setIsHandler] = React.useState({
    loading: false,
    error: false,
    success: false,
  });
  const [descApi, setDescApi] = React.useState({
    success: null,
    error: null,
  });

  React.useEffect(() => {
    if (window.localStorage.getItem("token") !== null) {
      setToken(JSON.parse(decrypt(window.localStorage.getItem("token"))));
    }
  }, []);

  const handleClear = () => {
    setError(false);
    signPadRef?.current?.clear?.();
  };

  const handleSubmit = () => {
    if (signPadRef.current.isEmpty()) {
      setError(true);
      return;
    }

    setIsHandler({
      ...isHandler,
      loading: true,
      error: false,
      success: false,
    });

    setError(false);
    const specimentBase64DataURL = signPadRef.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    const specimentBase64 = specimentBase64DataURL.split(",")[1];

    const dataSignature = {
      speciment: specimentBase64,
    };
    // send API
    peruri
      .signature(dataSignature, token)
      .then((res) => {
        console.log(res);

        if (res.data.data.resultCode == 0) {
          setIsHandler({
            ...isHandler,
            loading: false,
            error: false,
            success: true,
          });

          setDescApi({
            ...descApi,
            success: res.data.data.resultDesc,
            error: null,
          });

          setTimeout(() => {
            Routes.push("/admin/video-recorder");
          }, 2000);
        } else {
          setIsHandler({
            ...isHandler,
            loading: false,
            error: true,
            success: false,
          });

          setDescApi({
            ...descApi,
            success: null,
            error: res.data.data.resultDesc,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setIsHandler({
          ...isHandler,
          loading: false,
          error: true,
          success: false,
        });
      });
  };

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="" fluid>
        <div className="digital-signature">
          {isHandler?.loading && (
            <>
              <div className="text-center my-5">
                <Spinner
                  style={{ width: "3rem", height: "3rem" }}
                  type="grow"
                  color="warning"
                />
                <Spinner
                  style={{ width: "3rem", height: "3rem" }}
                  type="grow"
                  color="warning"
                />
                <Spinner
                  style={{ width: "3rem", height: "3rem" }}
                  type="grow"
                  color="warning"
                />
                <Spinner
                  style={{ width: "3rem", height: "3rem" }}
                  type="grow"
                  color="warning"
                />
                <Spinner
                  style={{ width: "3rem", height: "3rem" }}
                  type="grow"
                  color="warning"
                />
                <Spinner
                  style={{ width: "3rem", height: "3rem" }}
                  type="grow"
                  color="warning"
                />
                <Spinner
                  style={{ width: "3rem", height: "3rem" }}
                  type="grow"
                  color="warning"
                />
                <Spinner
                  style={{ width: "3rem", height: "3rem" }}
                  type="grow"
                  color="warning"
                />
              </div>
            </>
          )}
          {isHandler?.error && (
            <>
              <Alert color="danger my-5">
                <h4 className="alert-heading">Something Wrong!</h4>
                <p>{descApi?.error || "Try to reload page and send again."}</p>
              </Alert>
            </>
          )}

          {isHandler.success && (
            <>
              <Alert color="success my-5">
                <h4 className="alert-heading">Berhasil</h4>
                <p>{descApi?.success || ""}</p>
              </Alert>
            </>
          )}

          {!isHandler.loading && !isHandler.error && (
            <>
              <div className="d-flex w-100 justify-content-center mx-auto my-3">
                <SignatureCanvas
                  backgroundColor="#999"
                  penColor="black"
                  canvasProps={{
                    width: 800,
                    height: 400,
                    className: "sigCanvas",
                  }}
                  ref={signPadRef}
                />
              </div>
              {error && (
                <div className="alert alert-danger my-3">
                  Tanda Tangan tidak boleh kosong
                </div>
              )}
              <div className="text-center">
                <Button color="danger" type="button" onClick={handleClear}>
                  Hapus
                </Button>
                <Button color="primary" type="button" onClick={handleSubmit}>
                  Kirim
                </Button>
              </div>
            </>
          )}
        </div>
      </Container>
    </>
  );
};

DigitalSignature.layout = Kyc;

export default DigitalSignature;
