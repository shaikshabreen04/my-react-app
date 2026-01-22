import { useEffect, useState } from "react";
import ErrorBoundary2 from "./ErrorBoundary2";
import Sidebar2 from "./sidebar2";
import Content1 from "./Contentmain4";
import "../stud1.css";

function App5() {
  const [activepage, setactivepage] = useState("add");

  return (
    <div className="app-container">
      <ErrorBoundary2>
        <Sidebar2 setActivePage={setactivepage} />
      </ErrorBoundary2>

      <div className="main-content">
        <Content1 activepage={activepage} />
      </div>
    </div>
  );
}

export default App5;
