import { useState } from "react";
import "./App.css";
import ParentComponent from "./components/ParentComponent";

function App() {
  const [theme, setTheme] = useState("light");

  function handleToggle() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div className={theme}>
      <ParentComponent handleToggle={handleToggle} />
    </div>
  );
}

export default App;
