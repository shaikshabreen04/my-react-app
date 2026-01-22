import { useEffect, useState } from "react";
import "../stud1.css";

function Sidebar2({ setActivePage }) {
  const [stud, setstud] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadstud() {
      try {
        const res = await fetch("/studentmenu.json");
        const contentType = res.headers.get("content-type");

        if (!res.ok || !contentType?.includes("application/json")) {
          throw new Error("Student Menu JSON not found");
        }

        const data = await res.json();
        setstud(data);
      } catch (err) {
        setError(err);
      }
    }
    loadstud();
  }, []);

  if (error) throw error;

  return (
    <aside className="sidebar">
      <h3>Menu</h3>
      <ul>
        {stud.map((item) => (
          <li key={item.id} onClick={() => setActivePage(item.value)}>
            {item.label}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar2;
