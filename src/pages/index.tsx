import * as React from "react";
import '../styles/index.scss';
import Space from "../components/space";

// markup
const IndexPage = () => {
  return (
    <main id="main">
      <title>Kol Crooks Home Page</title>
      <div className="name" onMouseMove={() => true}>Kol Crooks</div>
      <div className="links">
        <div>
          {">"} <a href="https://github.com/KolCrooks">GitHub</a>
        </div>
        <div>
          {">"} <a href="/Resume_KolCrooks.pdf">Resume</a> <br />
        </div>
        <div className="padding-bottom">
          {">"} <a href="/projects"> Projects </a>
        </div>
      </div>
      <div className="space-container">
        <Space />
      </div>
    </main>
  )
}

export default IndexPage
