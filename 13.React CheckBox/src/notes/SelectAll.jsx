import React from "react";

const SelectAll = () => {
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
    // console.dir(e.target);
  };

  let isAllSelected = Object.values(languages).every(Boolean);
  // console.log(isAllSelected);
  return (
    <div className="select-none flex flex-col gap-3 w-fit mx-auto border p-4 rounded-md shadow-lg">
      <h1 className="text-3xl font-bold text-center my-5">
        Please select your favorite language
      </h1>

      {Object.keys(languages).map((item) => {
        return (
          <label htmlFor={item} key={item}>
            <input
              id={item}
              type="checkbox"
              checked={languages[item]}
              onChange={(e) => onChange(e)}
            />
            Is {item} is true
          </label>
        );
      })}

      <label htmlFor="selectAll">
        <input
          id="selectAll"
          type="checkbox"
          checked={isAllSelected}
          onChange={(e) =>
            setLanguages({
              html: e.target.checked,
              css: e.target.checked,
              js: e.target.checked,
            })
          }
        />
        selectAll
      </label>
      <br />
      {languages.html && "HTML Selected"}
      <br />
      {languages.css && "CSS Selected"}
      <br />
      {languages.js && "JS Selected"}
    </div>
  );
};

export default SelectAll;
