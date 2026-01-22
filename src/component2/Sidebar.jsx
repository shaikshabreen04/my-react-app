import { useEffect, useState } from "react";

function Sidebar() {
  const [menu, setMenu] = useState([]); // ❗ null initially
  const [error, setError] = useState(null); // 🔥 store error
  useEffect(() => {
  async function loadMenu() {
    try {
      const res = await fetch("/menus.json");

       // 🔥 CHECK CONTENT TYPE (CRITICAL)
        const contentType = res.headers.get("content-type");

        if (!res.ok || !contentType?.includes("application/json")) {
          throw new Error("Menu JSON not found");
        }

      const data = await res.json();
      setMenu(data);
    } catch (err) {
      setError(err);
    }
  }

  loadMenu();
}, []);

// 🔥 THIS LINE SENDS ERROR TO ErrorBoundary
  if (error) {
    throw error;
  }

  // ❌ Rendering error if menu is null and map is used
  return (
    <aside
      style={{
        width: "220px",
        background: "#1e293b",
        color: "white",
        padding: "10px"
      }}
    >
      <h3>Menu</h3>
      <ul>
        {menu.map(item => (   // ❌ will crash if menu is null
          <li key={item.id}>{item.label}</li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
