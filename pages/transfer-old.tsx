import { NextPage } from "next";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { TransferContext } from "../context/transfer";
import Webcam from "react-webcam";
import Navbar from "../components/navbar/Navbar";
import ReactPlayer from "react-player";
import RecordMedia from "../components/navbar/transfer/RecordMedia";
import ProceedPayment from "../components/navbar/transfer/ProceedPayment";
import TransferConfirmation from "../components/navbar/transfer/TransferConfirmation";
import TransferResult from "../components/navbar/transfer/TransferResult";

const TransferOld: NextPage = () => {
  const [recordingMedia, setRecordingMedia] = useState<boolean>(true);
  const [askToConfirm, setAskToConfirm] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);

  return (
    <div>
      {!askToConfirm && !showResult && (
        <RecordMedia
          setrecording={setRecordingMedia}
          hideButtons={!recordingMedia}
        />
      )}
      {!recordingMedia && !askToConfirm && !showResult && (
        <ProceedPayment
          setrecording={setRecordingMedia}
          setAskToConfirm={setAskToConfirm}
        />
      )}
      {!recordingMedia && askToConfirm && !showResult && (
        <TransferConfirmation
          setShowResult={setShowResult}
          setAskToConfirm={setAskToConfirm}
        />
      )}
      {!recordingMedia && !askToConfirm && showResult && <TransferResult />}
      {/* <Navbar /> */}
    </div>
  );
};

export default TransferOld;
