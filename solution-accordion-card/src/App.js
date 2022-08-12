import React from "react";

import { useState } from "react";
import { questions } from "./questions";

import mobile from "./images/illustration-woman-online-mobile.svg";
import desktop from "./images/illustration-woman-online-desktop.svg";
import SingleQuestion from "./SingleQuestion";

function App() {
  const [quests] = useState(questions);

  return (
    <div className="container">
      <article className="main-images-container">
        <img
          className="mobile-img"
          src={mobile}
          alt="illustration of a woman standing in front of a screen"
        />
        <img
          className="desktop-img"
          src={desktop}
          alt="illustration of a woman standing in front of a screen"
        />
      </article>

      <article className="faq-container">
        <h1>FAQ</h1>
        {/* SingleQuestion Component */}
        {quests.map((quest, index) => (
          <SingleQuestion key={index} {...quest} />
        ))}
      </article>
    </div>
  );
}

export default App;
