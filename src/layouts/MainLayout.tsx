import { ReactNode } from "react";
import { Provider } from "react-redux";
import MainFooter from "../components/MainFooter";
import MainNavbar from "../components/MainNavbar";
import { wrapper } from "../store";
import { Toaster } from "react-hot-toast";


interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  const {store} = wrapper.useWrappedStore('store');
  return (
    <Provider store={store}>
      <MainNavbar />
      <main>{children}</main>
      <Toaster position="top-right" />
      <MainFooter />
    </Provider>
  )
}