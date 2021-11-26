import "./styles.css";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link className="App-link" to="/showingtameplate">
          Go to the Memes Page
        </Link>
      </header>
    </div>
  );
}
