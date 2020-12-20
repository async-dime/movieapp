import React from "react";
import NavBar from "../components/navbar";
import Carousels from "../components/carousel";
import Footer from "../components/footer";
import ButtonCategory from "../components/buttonCategory";
import Content from "../components/content";
import Pagination from "../components/pagination";

function Home() {
  return (
    <div>
      <NavBar />
      <Carousels />
      <ButtonCategory />
      <Content />
      <Pagination />
      <Footer />
    </div>
  );
}

export default Home;
