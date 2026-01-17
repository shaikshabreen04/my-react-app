import { useEffect,useState } from "react";  
function StudentAPI() { 
    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetch("/student.json")
            .then((response) => response.json())
            .then((data) => setStudents(data))
            .catch((error) => console.error("Error loading JSON:", error));
    }, []);
    return (
        <div style={{ padding: '20px' }}>   
            <h1>Student List </h1>  
            {students.map((student, index) => (
                <div
                    key={student.id}
                    style={{
                        backgroundColor:
                         ["#6f0b63", "#4a0b37c4", "#4f2489", "#847a0e"][index % 4],
                        padding: '10px',
                        marginBottom: '10px',
                        borderRadius: '6px'
                    }}
                >
                    <h2>Name :{student.name}</h2>
                    <p>Course: {student.course}</p>
                    <p>Score: {student.score}</p>
                </div>
            ))}
        </div>
    );
}
export default StudentAPI;