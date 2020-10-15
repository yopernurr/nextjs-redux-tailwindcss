import React, { useEffect } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { NextPageContext } from "next";
import { State } from "../redux/reducer";
import DataSource from "../datasource";
import Login from "../components/login";
import NavBar from "../components/NavBar";
import CategoriesSection from "../components/Home/CategoriesSection";
import PopularProductsSection from "../components/Home/PopularProductsSection";
import SliderSection from "../components/Home/SliderSection";
import BottomNav from "../components/BottomNav";

export interface PageProps extends State {
  pageProp: string;
  appProp: string;
  serviceApi: any;
  test: any;
}

class Index extends React.Component<PageProps> {
  // note that since _app is wrapped no need to wrap page
  public static async getInitialProps({
    store,
    pathname,
    query,
    req
  }: NextPageContext<State>) {
    console.log("2. Page.getInitialProps uses the store to dispatch things", {
      pathname,
      query
    });

    if (req) {
      // All async actions must be await'ed
      await store.dispatch({ type: "PAGE", payload: "server" });

      // Some custom thing for this particular page
      return { pageProp: "server" };
    }

    // await is not needed if action is synchronous
    store.dispatch({ type: "PAGE", payload: "client" });

    // Some custom thing for this particular page
    return { pageProp: "client" };
  }

  public render() {
    const { pageProp, appProp, app, page, serviceApi } = this.props;

    return (
      <div className="w-full h-screen bg-gray-400 flex justify-center pt-8">
        <div className="bg-white overflow-y-auto default-width h-full shadow-md">
          <div style={{ height: '1400px' }}>
            <NavBar />
            <div className="w-full flex flex-wrap">
              
              <SliderSection api={serviceApi}/>

              <CategoriesSection />
              
              <div className="w-full h-4 bg-gray-400"></div>

              <PopularProductsSection />

              <BottomNav />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => state)(Index);
