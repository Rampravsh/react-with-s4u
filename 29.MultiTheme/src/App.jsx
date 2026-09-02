import AllTheme from "./AllTheme";
import ThemeToggle from "./ThemeToggle";

function App() {
  return (
    <div className="items-center flex flex-col p-4 sm:p-8 min-h-screen">
      {/* Top Bar with Toggle Button */}
      <div className="w-full max-w-5xl flex justify-end mb-4">
        <ThemeToggle />
      </div>

      {/* 10 Themes Explorer */}
      <AllTheme />
    </div>
  );
}

export default App;
