import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Victor Shop</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
