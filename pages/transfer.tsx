import { NextPage } from "next";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { TransferContext } from "../context/transfer";
import Webcam from "react-webcam";
import Navbar from "../components/navbar/Navbar";
import ReactPlayer from "react-player";
import RecordMedia from "../components/navbar/transfer/RecordMedia";
import ProceedPayment from "../components/navbar/transfer/ProceedPayment";

const Transfer: NextPage = () => {
  const [recordingMedia, setRecordingMedia] = useState<boolean>(true);

  return (
    <div>
      <RecordMedia
        setrecording={setRecordingMedia}
        hideButtons={!recordingMedia}
      />
      {!recordingMedia && <ProceedPayment setrecording={setRecordingMedia} />}
      {/* <Navbar /> */}
    </div>
  );
};

export default Transfer;
