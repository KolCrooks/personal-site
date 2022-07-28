import * as React from "react";
import '../styles/index.scss';
const Space = React.lazy(() => import("../components/space"));

// markup
const IndexPage = () => {
  return (
    <main id="main">
      <title>Home Page</title>
      <div className="name" onMouseMove={()=>true}>Kol Crooks</div>
      <div className="links">
        <div>
          &gt; <a href="https://github.com/KolCrooks">GitHub</a>
        </div>
        <div>
          &gt; <a href="/Resume_KolCrooks.pdf">Resume</a> <br />
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
