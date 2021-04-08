import React from "react";
// reactstrap components
import {
  Button,
  Container,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";

// webcam component
import Webcam from "react-webcam";

import Header from "components/Headers/Header.js";

const VideoRecorder = (props) => {
const webcamRef = React.useRef(null);
const mediaRecorderRef = React.useRef();
const [imgSrc, setImgSrc] = React.useState(null);
const [cameraActivated, setCameraActivated] = React.useState();
const [activateCameraFail, setActivateCameraFail] = React.useState(false);
const [capturing, setCapturing] = React.useState(false);
const [base64DataURL, setBase64DataURL] = React.useState();

// const [showInfo1, setShowInfo1] = React.useState(false);
// const [showInfo2, setShowInfo2] = React.useState(false);
// const [showInfo3, setShowInfo3] = React.useState(false);
// const [showInfo4, setShowInfo4] = React.useState(false);

const handleStopCaptureClick = React.useCallback(() => {
      mediaRecorderRef?.current?.stop();
      setCapturing(false);
},[setCapturing])

const onReset = () => {
    setBase64DataURL(null);
  }

const handleStartCaptureClick = React.useCallback(() => {
    setBase64DataURL(null)
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm"
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();

    // startHint();

    // setTimeout(() => {
    //   mediaRecorderRef.current.stop();
    //   setCapturing(false);
    // }, 9000);
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
        }
      }
    },
    [setBase64DataURL]
  );    


  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="" fluid>
          <div className="d-flex w-75 border-rounded justify-content-center mx-auto my-3 flex-column">
          {base64DataURL ? 
            <video src={base64DataURL} controls autoPlay playsInline />
            : 
            <Webcam
            audio={true}
            onUserMedia={(e) => {
                setCameraActivated(true)
                setActivateCameraFail(false)
              }}
              onUserMediaError={(e) => {
                setCameraActivated(false)
                setActivateCameraFail(true)
              }}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            />

            }
            
          </div>

          <div className="text-center d-flex justify-content-center mb-3">
          {!base64DataURL ? 
            <>
            {!capturing ? 
             <Button color="primary" onClick={handleStartCaptureClick}>Rekam Video</Button> :
             <Button color="danger" onClick={handleStopCaptureClick}>Berhenti Merekam</Button>
            }
             </>
             : 
             <Button color="success" onClick={onReset}>Ulangi</Button>
          }
          </div>
           
      </Container>
    </>
  );
};

VideoRecorder.layout = Admin;

export default VideoRecorder;
