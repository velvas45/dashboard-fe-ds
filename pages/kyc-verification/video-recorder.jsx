import React from "react";
// reactstrap components
import { Button, Container, Spinner, Alert } from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";

// imports style
import styles from "./test.module.scss";

// webcam component
import Webcam from "react-webcam";

// utils
import { decrypt } from "../../utils/cryptoUtils";
import { peruri } from "../../utils/api";

import Header from "components/Headers/Header.js";

const VideoRecorder = (props) => {
  const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef();
  const [imgSrc, setImgSrc] = React.useState(null);
  const [cameraActivated, setCameraActivated] = React.useState();
  const [activateCameraFail, setActivateCameraFail] = React.useState(false);
  const [capturing, setCapturing] = React.useState(false);
  const [base64DataURL, setBase64DataURL] = React.useState();
  const [status, setStatus] = React.useState(false);
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

  const [showInfos, setShowInfos] = React.useState({
    info1: false,
    info2: false,
    info3: false,
    info4: false,
  });

  // const [showInfo1, setShowInfo1] = React.useState(false);
  // const [showInfo2, setShowInfo2] = React.useState(false);
  // const [showInfo3, setShowInfo3] = React.useState(false);
  // const [showInfo4, setShowInfo4] = React.useState(false);

  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef?.current?.stop();
    setCapturing(false);
  }, [setCapturing]);

  const onReset = () => {
    setBase64DataURL(null);
  };

  const startHint = React.useCallback(() => {
    setTimeout(function () {
      setShowInfos({
        ...showInfos,
        info1: true,
      });
    }, 1000);

    setTimeout(function () {
      setShowInfos({
        ...showInfos,
        info1: false,
        info2: true,
      });
    }, 3000);

    setTimeout(function () {
      setShowInfos({
        ...showInfos,
        info2: false,
        info3: true,
      });
    }, 6000);

    setTimeout(function () {
      setShowInfos({
        ...showInfos,
        info3: false,
        info4: true,
      });
    }, 8000);

    setTimeout(function () {
      setShowInfos({
        ...showInfos,
        info4: false,
      });
    }, 9000);
  }, [showInfos]);

  const onSubmit = React.useCallback(() => {
    setIsHandler({
      ...isHandler,
      loading: true,
      error: false,
      success: false,
    });

    const base64data = base64DataURL.split(",")[1];
    const data = {
      videoStream: base64data,
    };

    peruri
      .videoVerif(data, token)
      .then((res) => {
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

        console.log(res);
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
  }, [token, base64DataURL]);

  const handleStartCaptureClick = React.useCallback(() => {
    setBase64DataURL(null);
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();

    startHint();

    setTimeout(() => {
      mediaRecorderRef.current.stop();
      setCapturing(false);
    }, 9000);
  }, [webcamRef, setCapturing, mediaRecorderRef, setBase64DataURL]);

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        const recordedBlob = new Blob([data], { type: "video/webm" });

        const reader = new FileReader();
        reader.readAsDataURL(recordedBlob);
        reader.onloadend = function () {
          const dataUrl = reader.result;
          setBase64DataURL(dataUrl);
        };
      }
    },
    [setBase64DataURL]
  );

  React.useEffect(() => {
    if (navigator.mediaDevices !== undefined) {
      setStatus(true);
    }

    if (window.localStorage.getItem("token") !== null) {
      setToken(JSON.parse(decrypt(window.localStorage.getItem("token"))));
    }
  }, []);

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="" fluid>
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

        {status && !isHandler?.loading && !isHandler.error && (
          <>
            <div className="d-flex w-75 border-rounded justify-content-center mx-auto my-3 flex-column">
              <div className="videoContainer">
                {base64DataURL ? (
                  <video src={base64DataURL} controls autoPlay playsInline />
                ) : (
                  <Webcam
                    audio={true}
                    onUserMedia={(e) => {
                      setCameraActivated(true);
                      setActivateCameraFail(false);
                    }}
                    onUserMediaError={(e) => {
                      setCameraActivated(false);
                      setActivateCameraFail(true);
                    }}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                  />
                )}
                {/* {cameraActivated && !capturing && (
                  <div className={styles.btnStartCapture}>
                    <button
                      className="btn btn-primary btn-sm btn-block"
                      onClick={handleStartCaptureClick}
                    >
                      Mulai Rekam
                    </button>
                  </div>
                )} */}
                {showInfos?.info1 && (
                  <div className="information">Kedipkan mata anda</div>
                )}
                {showInfos?.info2 && (
                  <div className="information">
                    Sekali lagi, kedipkan mata anda
                  </div>
                )}
                {showInfos?.info3 && (
                  <div className="information">Silakan buka mulut anda</div>
                )}
                {showInfos?.info4 && (
                  <div className="information">Tutup mulut anda kembali</div>
                )}
              </div>
            </div>

            <div className="text-center d-flex justify-content-center mb-3">
              {!base64DataURL ? (
                <>
                  {!capturing ? (
                    <Button color="primary" onClick={handleStartCaptureClick}>
                      Rekam Video
                    </Button>
                  ) : (
                    <Button color="danger" onClick={handleStopCaptureClick}>
                      Berhenti Merekam
                    </Button>
                  )}
                </>
              ) : (
                <>
                  <Button color="warning" onClick={onReset}>
                    Ulangi
                  </Button>
                  <Button color="success" onClick={onSubmit}>
                    Kirim
                  </Button>
                </>
              )}
            </div>
          </>
        )}
      </Container>
    </>
  );
};

VideoRecorder.layout = Admin;

export default VideoRecorder;
