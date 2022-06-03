import * as React from "react";
import Space from "../components/space";
import '../styles/index.scss';
import resume from '../files/Resume_KolCrooks.pdf';

// markup
const IndexPage = () => {
  return (
    <main id="main">
      <title>Home Page</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/victormono@latest/dist/index.min.css"></link>
      <div className="name">Kol Crooks</div>
      <div className="links inverted">
        <div>
          &gt; <a href="https://github.com/KolCrooks">GitHub</a>
        </div>
        <div>
          &gt; <a href={resume}>Resume</a> <br />
        </div>
        <div className="padding-bottom">
          &gt; <a href="/projects"> Projects </a>
        </div>
      </div>
      <div className="space-container">
        <Space />
      </div>
    </main>
  )
}

export default IndexPage
