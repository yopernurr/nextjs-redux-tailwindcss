import React, { useEffect } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { NextPageContext } from "next";
import { State } from "../redux/reducer";
import DataSource from "../datasource";
import Login from "../components/login";
import NavbarCart from "../components/NavbarCart";
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

    // Some custom thing for this particular page
    return { pageProp: "client" };
  }

  public render() {
    const { pageProp, appProp, app, page, serviceApi } = this.props;

    return (
      <div className="w-full h-screen bg-gray-400 flex justify-center pt-8">
        <div className="bg-white overflow-y-auto default-width h-full shadow-md">
          <div className="h-full">
            <NavbarCart />

            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap items-center justify-center">
                <div className="w-20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div className="w-full text-center mt-4 text-2xl font-medium">
                  EMPTY CART
                </div>
                <div className="w-full text-center mt-2">
                  You have no items in your cart
                </div>
                <div className="w-full flex justify-center mt-8 text-white">
                  <a href="/" className="rounded px-4 py-2 bg-gray-700 font-bold cursor-pointer">
                    START SHOPPING
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => state)(Index);
