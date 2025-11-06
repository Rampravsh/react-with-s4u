import { useRef, useState } from "react";

function App() {
  // controlled components

  const [first, setfirst] = useState("");

  // uncontrolled components

  const inputRef = useRef();
  function handelSubmit() {
    console.log("Input value :" + inputRef.current.value);
  }

  // multiple input fields with multiple state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // multiple input fields with single state
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  // function nameHandler(e) {
  // console.log(e.target.name);
  //   setData({ ...data, name: e.target.value });
  // }
  // function emailHandler(e) {
  // console.log(e.target.name);
  //   setData({ ...data, email: e.target.value });
  // }

  function inputHandler(e) {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function clearData() {
    setData({
      name: "",
      email: "",
      phoneNumber: "",
    });
  }
  return (
    <>
      {/* multiple input fields with single state */}
      <h1 className="text-4xl mb-8">multiple input fields with single state</h1>

      <div>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={(e) => inputHandler(e)}
          placeholder="Enter Name..."
          className="border-amber-50 border-2 rounded-2xl p-5 m-10"
        />
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={(e) => inputHandler(e)}
          placeholder="Enter Email..."
          className="border-amber-50 border-2 rounded-2xl p-5 m-10"
        />
        <input
          type="number"
          name="phoneNumber"
          value={data.phoneNumber}
          onChange={(e) => inputHandler(e)}
          placeholder="Enter phoneNumber..."
          className="border-amber-50 border-2 rounded-2xl p-5 m-10"
        />
        <button
          className="border-amber-50 border-2 rounded-[5px] px-3"
          onClick={clearData}
        >
          Clear
        </button>
        <div className="text-xl">your name :{data.name}</div>
        <div className="text-xl">your email : {data.email}</div>
        <div className="text-xl">your phoneNumber : {data.phoneNumber}</div>
      </div>

      {/* multiple input fields with multiple state */}
      <h1 className="text-4xl mb-8">
        multiple input fields with multiple state
      </h1>

      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name..."
          className="border-amber-50 border-2 rounded-2xl p-5 m-10"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email..."
          className="border-amber-50 border-2 rounded-2xl p-5 m-10"
        />
        <button
          className="border-amber-50 border-2 rounded-[5px] px-3"
          onClick={() => {
            setEmail("");
            setName("");
          }}
        >
          Clear
        </button>
        <div className="text-xl">your name :{name}</div>
        <div className="text-xl">your email : {email}</div>
      </div>

      {/* uncontrolled components */}
      <h1 className="text-5xl mb-8">uncontrolled components</h1>
      <div>
        <input
          type="text"
          ref={inputRef}
          placeholder="Type here...."
          className="border-amber-50 border-2 rounded-2xl p-5 m-10"
        />
        <button
          onClick={handelSubmit}
          className="border-amber-50 border-2 rounded-[5px] px-3"
        >
          Submit
        </button>
      </div>

      {/* controlled components */}
      <h1 className="text-5xl mb-8">controlled components</h1>

      <div>
        <input
          type="text"
          placeholder="Enter name "
          value={first}
          onChange={(e) => {
            setfirst(e.target.value);
          }}
          className="border-amber-50 border-2 rounded-2xl p-5 m-10"
        />
        <button
          className="border-amber-50 border-2 rounded-[5px] px-3"
          onClick={() => setfirst("")}
        >
          Clear
        </button>
      </div>
      <h1 className="text-3xl font-bold">{first}</h1>
    </>
  );
}

export default App;
