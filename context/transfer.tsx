import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from "react";

interface TransferProps {
  transferIsProceeding: boolean;
  setTransferIsProceeding: Dispatch<SetStateAction<boolean>>;
  transferResult: string;
}

export const TransferContext = createContext<TransferProps>({
  transferIsProceeding: false,
  setTransferIsProceeding: (boolean) => false,
  transferResult: "",
});

const TransferContextWrapper = ({ children }: any) => {
  const [transferIsProceeding, setTransferIsProceeding] =
    useState<boolean>(false);

  const transferResult = "";

  const transfer = useMemo(
    () => ({
      transferIsProceeding,
      setTransferIsProceeding,
      transferResult,
    }),
    [transferIsProceeding]
  );

  // const transfer = {
  //   transferIsProceeding,
  //   setTransferIsProceeding,
  //   transferResult,
  // };

  return (
    <TransferContext.Provider value={transfer}>
      {children}
    </TransferContext.Provider>
  );
};

export default TransferContextWrapper;
