import "./App.css";
import Card from "./components/Card";

function Square() {
  return (
    <div className="Square">
      <h1>Hello, World!</h1>
      <p>Welcome to your React application.</p>
    </div>
  );
}
function App() {
  return (
    <>
      <Square />
      <div
        style={{
          marginTop: "80px",
          marginLeft: "20px",
          marginRight: "20px",
          marginBottom: "20px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          backgroundColor: "#e0e0e0",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Card title="First" />
        <Card title="Second" />
        <Card title="Third" />
        <Card title="Fourth" />
        <Card title="Fifth" />
        <Card title="Sixth" />
      </div>
    </>
  );
}

export default App;
