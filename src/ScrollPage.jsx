import { useRef } from "react";

function ScrollPage() {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const scrollDown = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollUp = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Top Section */}
      <div ref={topRef}>
        <h1>Top Section</h1>
        <button onClick={scrollDown}>Scroll Down ⬇️</button>
      </div>

      {/* Spacer to create scroll */}
      <div style={{ height: "100vh" }}></div>

      {/* Bottom Section */}
      <div ref={bottomRef}>
        <h1>Bottom Section</h1>
        <button onClick={scrollUp}>Scroll Up ⬆️</button>
      </div>
    </div>
  );
}

export default ScrollPage;
