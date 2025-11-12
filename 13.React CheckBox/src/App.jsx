import { useState } from "react";

function App() {
  const [isHtml, setIsHtml] = useState(true);
  const [isCss, setIsCss] = useState(true);
  const [isJs, setIsJs] = useState(true);
  return (
    <>
      <div>
        <label htmlFor="html">
          <input
            id="html"
            type="checkbox"
            checked={isHtml}
            onChange={(e) => setIsHtml(e.target.checked)}
          />
          Is HTML is true
        </label>
        <br />
        <label htmlFor="css">
          <input
            id="css"
            type="checkbox"
            checked={isCss}
            onChange={(e) => setIsCss(e.target.checked)}
          />
          Is CSS is true
        </label>
        <br />
        <label htmlFor="js">
          <input
            id="js"
            type="checkbox"
            checked={isJs}
            onChange={(e) => setIsJs(e.target.checked)}
          />
          Is JS is true
        </label>
        <br />
        {isHtml && "HTML Selected"}
        <br />
        {isCss && "CSS Selected"}
        <br />
        {isJs && "JS Selected"}
      </div>
    </>
  );
}

export default App;
