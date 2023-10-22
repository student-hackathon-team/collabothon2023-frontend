import { useCallback, useContext, useLayoutEffect, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import {useRouter} from "next/router";
import {BsX} from "react-icons/bs";

type props = {
  setrecording: (arg: boolean) => void;
  hideButtons: boolean;
};

const RecordMedia: React.FC<props> = (props) => {
  const mainDiv = useRef(null);
  const videoRef = useRef(null);

  const [heightBigger, setHeightBigger] = useState<boolean>(true);
  const [heightRatio, setHeightRatio] = useState<number>(0);
  const [widthRatio, setWidthRatio] = useState<number>(0);

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

  const router = useRouter()

  const setSizes = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const camHeight = webcamRef.current.video.clientHeight;
    const camWidth = webcamRef.current.video.offsetWidth;
    console.log(webcamRef.current.video.transformOrigin);
    if (camHeight < height) {
      setHeightBigger(true);
      const heightRatio = height / camHeight;
      setHeightRatio(heightRatio);
      const trans = (height - camHeight) / 2;
      console.log(webcamRef.current.video.style);
      console.log(height, camHeight, heightRatio, trans);
      webcamRef.current.video.style.transform =
        "scale(" + heightRatio + ") translateY(" + 0 + "px)";
      console.log(webcamRef.current.video.transformOrigin);
    } else if (camWidth < width) {
      setHeightBigger(false);
      const widthRatio = width / camWidth;
      setWidthRatio(widthRatio);
      const trans = (width - camWidth) / 5.5;
      console.log(webcamRef.current.video.style);
      console.log(width, camWidth, widthRatio, trans);
      webcamRef.current.video.style.transform =
        "scale(" + widthRatio + ") translatex(0px)";
    }
  };
  // webcamRef.current.video.style.tran = "scale(" + heightRatio + ")";

  // let videoConstrains;
  useLayoutEffect(() => {
    webcamRef.current.video.style.transformOrigin = "top";
    // console.log(webcamRef.current);
    setTimeout(() => {
      setSizes();
    }, 500)
    // console.log(webcamRef.current.vi);
    // const width = window.innerWidth;
    // const height = window.innerHeight;
    // setSizes();
    window.addEventListener("resize", () => {
      setSizes();
    });
    //   const width = window.innerWidth;
    //   const height = window.innerHeight;
    //   setSizes();
    //   setVideoConstraints({
    //     width: width,
    //     height: height,
    //     facingMode: "user",
    //   });
    // });
    // setVideoConstraints({
    //   width: width,
    //   height: height,
    //   facingMode: "user",
    // });
  }, [mainDiv.current]);

  console.log(videoConstrains);

  return (
    <div
      className=" mx-auto border-2 h-screen  border-black w-full overflow-hidden"
      ref={mainDiv}
    >
      {!photoMade && !(recordedChunks.length > 0) && (
        <div style={{ transform: "scaleX(-1)" }}>
          <Webcam
            className="overflow-hidden"
            ref={webcamRef}
            mirrored={true}
            videoConstraints={videoConstrains}
            forceScreenshotSourceSize={true}
            screenshotFormat="image/jpeg"
          />
        </div>
      )}
      {photoMade && imgSrc && (
        <img
          style={{
            transform: heightBigger
              ? "scale(" + heightRatio + ") translateY(" + 0 + "px)"
              : "scale(" + heightRatio + ") translateY(" + 0 + "px)",
            transformOrigin: "top",
          }}
          src={imgSrc}
        />
      )}
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
              style={{
                transform: heightBigger
                  ? "scale(" + heightRatio + ") translateY(" + 0 + "px)"
                  : "scale(" + heightRatio + ") translateY(" + 0 + "px)",
                transformOrigin: "top",
              }}
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
                onClick={async () => {
                  window.URL.revokeObjectURL(videoUrl);
                  await router.push('/')
                }}
                className="rounded-full z-30 bg-accent bg-opacity-70 px-4 py-2 text-white fixed left-6 top-6 border-4 border-accent"
              >
                <BsX className="w-5 h-5" />
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
