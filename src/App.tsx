import { Quote } from "./components/Quote";
import { ThemeProvider } from "./components/ThemeContext";
import { ThemeToggle } from "./components/ThemeToggle";
import { Weather } from "./components/Weather";
import { useState } from "react";
import "./index.css";

export function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={`app app_${theme}`}>
        <header className="header">
          <h1>🌤 Погода и Цитата дня</h1>
          <ThemeToggle onToggle={toggleTheme} />
        </header>
        <main>
          <Weather />
          <Quote />
        </main>
      </div>
    </ThemeProvider>
  );
}
