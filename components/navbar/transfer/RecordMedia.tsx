import { useCallback, useContext, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

type props = {
  setrecording: (arg: boolean) => void;
  hideButtons: boolean;
};

const RecordMedia: React.FC<props> = (props) => {
  const mainDiv = useRef(null);
  const videoRef = useRef(null);

  const [videoConstrains, setVideoConstraints] = useState<any>({
    width: 1920,
    height: 1080,
    facingMode: "user",
  });

  const [photoMade, setPhotoMade] = useState<boolean>(false);

  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [imgSrc, setImgSrc] = useState(null);
  const [videoUrl, setVideoUrl] = useState<any>();

  const [photoSelected, setPhotoSelected] = useState<boolean>(true);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    setPhotoMade(true);
  }, [webcamRef, setImgSrc]);

  useEffect(() => {
    console.log(videoUrl);
    if (videoUrl) {
      videoRef.current.load();
      videoRef.current.onloadeddata = function () {
        videoRef.current.play();
      };
    }
  }, [videoUrl, videoRef.current, capturing]);

  useEffect(() => {
    if (recordedChunks.length > 0) {
      handlePlay();
    }
  }, [recordedChunks]);

  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = useCallback(
    ({ data }: any) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handlePlay = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      setVideoUrl(url);
    }
  }, [recordedChunks]);

  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      // a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      // setRecordedChunks([]);
    }
  }, [recordedChunks]);

  // let videoConstrains;

  useEffect(() => {
    console.log("run");
    const width = window.innerWidth;
    const height = window.innerHeight;
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setVideoConstraints({
        width: width,
        height: height,
        facingMode: "user",
      });
    });
    setVideoConstraints({
      width: width,
      height: height,
      facingMode: "user",
    });
  }, [webcamRef.current]);

  console.log(videoConstrains);

  return (
    <div
      className=" mx-auto border-2 h-screen  border-black w-full"
      ref={mainDiv}
    >
      {!photoMade && !(recordedChunks.length > 0) && (
        <Webcam
          className="overflow-hidden"
          ref={webcamRef}
          mirrored={true}
          videoConstraints={videoConstrains}
          forceScreenshotSourceSize={true}
          screenshotFormat="image/jpeg"
        />
      )}
      {photoMade && imgSrc && <img src={imgSrc} />}
      {!photoMade && !(recordedChunks.length > 0) && (
        <>
          <div className="fixed z-30 bottom-32 w-full">
            <div className="mx-auto w-fit">
              {photoSelected && (
                <button
                  className=" mx-auto w-20 h-20 rounded-[30%] border-4 border-white"
                  onClick={capture}
                ></button>
              )}
              {!photoSelected && !capturing && (
                <button
                  className=" mx-auto w-20 h-20 rounded-[30%] border-4 border-white"
                  onClick={handleStartCaptureClick}
                >
                  <div className=" my-auto mx-auto w-8 h-8 rounded-[30%] bg-red-500 border-2 border-white"></div>
                </button>
              )}
              {!photoSelected && capturing && (
                <button
                  className=" mx-auto w-20 h-20 rounded-[30%] border-4 border-white"
                  onClick={handleStopCaptureClick}
                >
                  <div className=" my-auto mx-auto w-8 h-8 rounded-[30%] bg-black border-2 border-red-600"></div>
                </button>
              )}
            </div>
          </div>
          <div className="fixed z-30 bottom-20 w-full  text center text-2xl text-white">
            <div className="grid grid-cols-2 w-fit mx-auto gap-6 text-md text-slate-100">
              <div
                className={
                  "text-center " + (photoSelected ? "opacity-90" : "opacity-40")
                }
              >
                <button
                  onClick={() => {
                    setPhotoSelected(true);
                  }}
                >
                  Photo
                </button>
              </div>
              <div
                className={
                  "text-center " + (photoSelected ? "opacity-40" : "opacity-90")
                }
              >
                <button
                  onClick={() => {
                    setPhotoSelected(false);
                  }}
                >
                  Video
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {photoMade && photoSelected && !props.hideButtons && (
        <>
          <button
            onClick={() => {
              setPhotoMade(false);
              setImgSrc(null);
            }}
            className="rounded-[50%] bg-accent bg-opacity-70 px-4 py-2 text-white fixed left-6 top-6 border-4 border-accent"
          >
            X
          </button>
          <div className="fixed z-30 bottom-28 w-full grid grid-cols-2 text center text-2xl text-white">
            <div className="mx-auto w-fit"></div>
            <div className="mx-auto w-fit">
              <button
                onClick={() => {
                  props.setrecording(false);
                }}
                className="rounded-xl bg-blue-700 px-4 py-2"
              >
                Proceed
              </button>
            </div>
          </div>
        </>
      )}
      {recordedChunks.length > 0 && !photoSelected && (
        <>
          <div style={{ transform: "scaleX(-1)" }}>
            <video
              src={videoUrl}
              ref={videoRef}
              loop={true}
              datatype="video/webm"
              className="border-2 transform"
            />
          </div>
          {!props.hideButtons && (
            <>
              <button
                onClick={() => {
                  window.URL.revokeObjectURL(videoUrl);
                  setRecordedChunks([]);
                  setVideoUrl("");
                }}
                className="rounded-[50%] z-30 bg-accent bg-opacity-70 px-4 py-2 text-white fixed left-6 top-6 border-4 border-accent"
              >
                X
              </button>

              <div className="fixed z-30 bottom-28 w-full grid grid-cols-2 text center text-2xl text-white">
                <div className="mx-auto w-fit"></div>
                <div className="mx-auto w-fit">
                  <button
                    onClick={() => {
                      props.setrecording(false);
                    }}
                    className="rounded-xl bg-blue-700 px-4 py-2"
                  >
                    Proceed
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default RecordMedia;
