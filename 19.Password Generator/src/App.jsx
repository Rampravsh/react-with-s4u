import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [pasword, setpasword] = useState("");
  const [length, setlength] = useState(6);
  const [number, setnumber] = useState(false);
  const [characters, setcharacters] = useState(false);
  // const inpRef = useRef("");
  const paswordGenerator = () => {
    setpasword("");
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";
    const character = '!"#$%&*+-.';
    if (number) {
      letters += numbers;
    }
    if (characters) {
      letters += character;
    }
    for (let i = 0; i < length; i++) {
      setpasword(
        (prev) => prev + letters[Math.floor(Math.random() * letters.length)],
      );
    }
  };
  const handleRange = (e) => {
    setlength(e.target.value);
  };
  useEffect(() => {
    paswordGenerator();
  }, [number, characters, length]);

  useEffect(() => {
    console.log("re renderd hua");
  });

  return (
    <>
      <div>
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 select-none">
          <h1 className="text-white text-center my-3">Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={pasword}
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              readOnly
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(pasword);
                alert(`password ${pasword} copy`);
              }}
              className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer"
            >
              copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={20}
                value={length}
                onChange={handleRange}
                className="cursor-pointer"
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                id="numberInput"
                checked={number}
                onChange={(e) => {
                  setnumber(e.target.checked);
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                id="characterInput"
                checked={characters}
                onChange={(e) => {
                  setcharacters(e.target.checked);
                }}
              />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <button
              onClick={() => {
                setpasword("");
                setlength(6);
                setcharacters(false);
                setnumber(false);
                paswordGenerator();
              }}
              className="outline-none rounded-2xl bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer"
            >
              Reset Password
            </button>
            <button className="outline-none rounded-2xl bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer">
              Save Password
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
