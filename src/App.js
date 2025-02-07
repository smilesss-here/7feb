import React, { useState } from "react";
import "./App.css";

const RoseDay = () => {
  const [roses, setRoses] = useState([]);

  const createRoseRain = () => {
    const newRoses = Array.from({ length: 30 }).map((_, index) => ({
      id: index,
      left: Math.random() * 100 + "vw",
      animationDuration: Math.random() * 2 + 3 + "s"
    }));
    setRoses(newRoses);
    setTimeout(() => setRoses([]), 5000);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Happy Rose Day, My Babyyy! 🌹</h1>
      </header>
      <main className="main-content">
        <p className="message">
        abi hum mil toh nhi skte...isliyy abi ap isse hi kaam chla lo....🌺<br />
        Because every petal whispers my love for you! 💖
        and y apke liy reminder h ki...i alwayss love youuu....❤️
        </p>
        <div className="rose-image">
          <img
            src="https://i.pinimg.com/736x/6b/c6/33/6bc6339e56fb6db27698d409d4e980ac.jpg"
            alt="Beautiful Red Rose"
          />
        </div>
        <div className="love-note">
          <h2>My Love for You</h2>
          <p>
          or m apko btana chahungi ki ap mere life k most beautiful part ho... 🥺...or aj toh bss m apko yd dila ri hu ki ap merko kitna matter krte ho....😭.....And i really thoda thoda love you....😭❤️
          </p>
        </div>
        <button className="rose-button" onClick={createRoseRain}>🌹 Click for a Rose Surprise! 🌹</button>
      </main>
      <footer className="footer">
        <p>Forever yours ❤️</p>
      </footer>
      <div className="rose-rain">
        {roses.map((rose) => (
          <span
            key={rose.id}
            className="falling-rose"
            style={{ left: rose.left, animationDuration: rose.animationDuration }}
          >🌹</span>
        ))}
      </div>
    </div>
  );
};

export default RoseDay;