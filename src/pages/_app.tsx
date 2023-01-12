import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { wrapper } from '../store'
import { Provider } from 'react-redux'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const {store, props} = wrapper.useWrappedStore(pageProps);
  return getLayout(
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
}