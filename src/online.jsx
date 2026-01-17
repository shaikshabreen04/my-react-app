import { useEffect,useState} from "react";  
function StudentOnline() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setStudents(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <div style={{ padding: '20px' }}>
            <h1>Online Student Data</h1>
            {students.map((student, index) => (
                <div
                    key={student.id}
                    style={{
                        backgroundColor:
                            ["#0b3d91", "#790b3d", "#3d0971", "#7a6e0e"][index % 4],
                        padding: '10px',
                        marginBottom: '10px',
                        borderRadius: '6px'
                    }}
                >
                    <h2>{student.name}</h2>
                    <p>Email: {student.email}</p> 
                </div>
            ))}
        </div>
    );
}   
export default StudentOnline;  

                    

