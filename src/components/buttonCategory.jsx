import React from "react";
import "./assets/styles/Content.sass";
// import pic1 from "./assets/img/mov.jpg";


const ButtonCategory = () => {
  return (
    <div className="content-category-container">
      <div className="content-category">
        <h3>Browse by category</h3>
      </div>
      <div className="content-category-button">
        <button className="button-all">all</button>
        <button className="button-anime">anime</button>
        <button className="button-action">action</button>
        <button className="button-adventure">adventure</button>
        <button className="buttoon-scifi">sci-fi</button>
        <button className="button-comedy">comedy</button>
      </div>
       {/* <div className="content-container">
        <img src={pic1} alt="one"></img>
        <img src={pic1} alt="two"></img>
        <img src={pic1} alt="three"></img>
        <img src={pic1} alt="four"></img>
        <img src={pic1} alt="five"></img>
        <img src={pic1} alt="one"></img>
        <img src={pic1} alt="two"></img>
        <img src={pic1} alt="three"></img>
        <img src={pic1} alt="four"></img>
        <img src={pic1} alt="five"></img>
        <img src={pic1} alt="one"></img>
        <img src={pic1} alt="two"></img>
        <img src={pic1} alt="three"></img>
        <img src={pic1} alt="four"></img>
        <img src={pic1} alt="five"></img>
      </div> */}
    </div>
  );
};

export default ButtonCategory;
