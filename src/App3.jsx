import ErrorBoundary from "./component2/ErrorBoundary";
import Sidebar from "./component2/Sidebar";
import Content from "./component2/ContentMain";

function App2() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* 🛡️ Sidebar protected */}
      <ErrorBoundary>
        <Sidebar />
      </ErrorBoundary>

      {/* Main content NOT affected */}
      <Content />
    </div>
  );
}

export default App2;
