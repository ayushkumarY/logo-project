import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <header className="header">
        <div>
          <img className="logo" src="./img/Logo.png" alt="" />
        </div>
        <ul className="nav">
          <span className="sub-nav">home</span>
          <span className="sub-nav">female</span>
          <span className="sub-nav">male</span>
          <span className="sub-nav">FAQ</span>
          <span className="sub-nav">about</span>
        </ul>
        <div className="search-div">
          <img src="./img/search.png" alt="" className="search-img" />
          <button className="btn-search">Search</button>
        </div>
      </header>
      <section>
        <div className="twoimage">
          <img src="./img/Image.png" alt="" className="men-photo" />
          <img src="./img/squares.png" alt="" className="square-img" />
        </div>
        <div className="heading">
          <div className="starglobe">
            <img src="./img/globe.png" alt="" className="globe" />
            <img src="./img/start.png" alt="" className="star" />
            <img src="./img/start.png" alt="" className="star2" />
          </div>
          <h1 className="heading-1">What's Trend in 2025?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            voluptatibus pariatur nesciunt odit reprehenderit quidem quo
            expedita maiores reiciendis officiis doloribus repudiandae corporis
            nemo quos labore minus, delectus hic nostrum debitis
          </p>
          <div className="btns">
            <button className="btn-1">email address</button>
            <button className="btn-2">join now</button>
          </div>
          <div className="contact">
            <h5 style={{ color: "grey", fontSize: "15px" }}>Contact Us</h5>
            <img src="./img/Group.png" alt="" />
            <img src="./img/Group 1.png" alt="" />
            <img src="./img/Group 2.png" alt="" />
            <img src="./img/Group 3.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
