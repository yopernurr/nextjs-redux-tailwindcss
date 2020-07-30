import React from "react";
import App, { AppInitialProps, AppContext } from "next/app";
import { wrapper } from "../redux/store";
import DataSource from '../datasource';

import '../styles/globals.css';

class WrappedApp extends App<AppInitialProps> {
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    // Keep in mind that this will be called twice on server, one for page and second for error page
    // ctx.store.dispatch({ type: "APP", payload: "was set in _app" });

    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
        // Some custom thing for all pages
        appProp: ctx.pathname,
        token: ctx.store.getState().token
      }
    };
  };

  public render() {
    const { Component, pageProps } = this.props;
    return <Component 
      {...pageProps} 
      serviceApi={new DataSource(process.env.NEXT_PUBLIC_API, pageProps.token)}
    />;
  }
}

export default wrapper.withRedux(WrappedApp);
