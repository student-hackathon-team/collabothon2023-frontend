import AppNavigation from "../components/AppNavigation";
import AppHeader from "./AppHeader";
import type { FC } from "react";

const AppLayout: FC = ({ children }) => {
  return (
    <div className="w-full h-full relative pb-40">
      <AppHeader />
      {children}
      <AppNavigation />
    </div>
  );
};

export default AppLayout;
