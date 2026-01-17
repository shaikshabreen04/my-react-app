import React from "react";
import "../dashboard.css";

export default function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Dashboard</h2>

      <ul className="sidebar-menu">
        <li
          className={`sidebar-item ${
            activePage === "calculator" ? "active" : ""
          }`}
          onClick={() => setActivePage("calculator")}
        >
          Calculator
        </li>

        <li
          className={`sidebar-item ${
            activePage === "greetings" ? "active" : ""
          }`}
          onClick={() => setActivePage("greetings")}
        >
          Greetings
        </li>

        <li
          className={`sidebar-item ${
            activePage === "namechanger" ? "active" : ""
          }`}
          onClick={() => setActivePage("namechanger")}
        >
          NameChanger
        </li>

        <li
          className={`sidebar-item ${
            activePage === "nameinput" ? "active" : ""
          }`}
          onClick={() => setActivePage("nameinput")}
        >
          NameInput
        </li>
      </ul>
    </aside>
  );
}
