import { useState } from "react";
import Sidebar from "./SideMenu";
import Header from "./Header";
import Content from "./ContentMain";
import "../dashboard.css";

export default function Dashboard() {
  const [activePage, setActivePage] = useState("Calculator");

  return (
    
    <div className="dashboard">
    
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className="main">
        <Header />
        <Content activePage={activePage} />
      </div>
    </div>
  );
}
