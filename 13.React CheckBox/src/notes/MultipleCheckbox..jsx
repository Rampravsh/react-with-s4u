import { useState } from "react";

function MultipleCheckbox() {
  // const [isHtml, setIsHtml] = useState(true);
  // const [isCss, setIsCss] = useState(true);
  // const [isJs, setIsJs] = useState(true);
  const [languages, setLanguages] = useState({
    html: false,
    css: false,
    js: false,
  });

  const onChange = (e) => {
    const checked = e.target.checked;
    const id = e.target.id;
    setLanguages((prev) => ({ ...prev, [id]: checked }));
    // console.log(id, checked);
    console.dir(e.target);
  };
  // console.log(languages);

  return (
    <>
      <div>
        <label htmlFor="html">
          <input
            id="html"
            type="checkbox"
            checked={languages.html}
            onChange={(e) => onChange(e)}
          />
          Is HTML is true
        </label>
        <br />
        <label htmlFor="css">
          <input
            id="css"
            type="checkbox"
            checked={languages.css}
            onChange={(e) => onChange(e)}
          />
          Is CSS is true
        </label>
        <br />
        <label htmlFor="js">
          <input
            id="js"
            type="checkbox"
            checked={languages.js}
            onChange={(e) => onChange(e)}
          />
          Is JS is true
        </label>
        <br />
        {languages.html && "HTML Selected"}
        <br />
        {languages.css && "CSS Selected"}
        <br />
        {languages.js && "JS Selected"}
      </div>
      {/* <div>
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
      </div> */}
    </>
  );
}

export default MultipleCheckbox;
