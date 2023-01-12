import { ReactNode } from "react";
import MainFooter from "../components/MainFooter";
import MainNavbar from "../components/MainNavbar";


interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <MainNavbar />
      <main>{children}</main>
      <MainFooter />
    </>
  )
}