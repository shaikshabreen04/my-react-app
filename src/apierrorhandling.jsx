import { useEffect, useState } from "react";
function ApiErrorExample2() {
  const [error, setError] = useState("");
  const[students,setstudents]=useState([]);
  const[loading,setloading]=useState(true);
  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        setstudents(await response.json());
      } catch (err) {
        setError(err.message);
      } finally{
        setloading(false);
      }
    }
    loadData();
  }, []);
if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h2>API / Async Error</h2>
      {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
      {students.map((student, index) => (
      <div
        key={student.id}
        style={{
          backgroundColor: [
            "#0790ec",
            "#d20f7e",
            "#0fe7f3",
            "#f8e40e"
          ][index % 4],
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "6px"
        }}
      >
        <h2>{student.name}</h2>
        <p>Email: {student.email}</p>
      </div>
    ))}
    </div>
  );
}
export default ApiErrorExample2;