import PortfolioBook from "./components/book/PortfolioBook";
import { useTheme } from "./hooks/useTheme";
import "./App.css";

function App() {
  const { theme, toggleTheme } = useTheme();

  return <PortfolioBook theme={theme} toggleTheme={toggleTheme} />;
}

export default App;
