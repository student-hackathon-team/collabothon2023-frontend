import { NextPage } from "next";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { TransferContext } from "../context/transfer";
import Webcam from "react-webcam";

const Transfer: NextPage = () => {
  const transfer = useContext(TransferContext);

  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  const videoConstraints = {
    width: 380,
    height: 720,
    facingMode: "user",
  };

  return (
    <div className="max-w-sm mx-auto border-2 h-screen border-black">
      <Webcam
        className="overflow-hidden"
        ref={webcamRef}
        mirrored={true}
        videoConstraints={videoConstraints}
        forceScreenshotSourceSize={true}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>Capture photo</button>
      {imgSrc && <img src={imgSrc} />}
      {/* {devices.map((device: any, key: any) => (
        <div>
          <Webcam
            audio={false}
            videoConstraints={{ deviceId: device.deviceId }}
          />
          {}
        </div>
      ))} */}
      Transfer
      <div className="h-20 w-full"></div>
      <div>{transfer.transferIsProceeding}</div>
      <button>set transfer</button>
      <button
        onClick={() => {
          transfer.setTransferIsProceeding(false);
        }}
      >
        set transfer
      </button>
    </div>
  );
};

export default Transfer;
