import {useEffect,useState} from "react";

function ScrollbarExample() {
    const [students,setStudents]=useState([]);
    const [loading,setloading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            if(!response.ok){
                throw new Error("Network issue");
            }
            return response.json();
        })
        .then((data)=>{
            setStudents(data);
            setloading(false);
        })
        .catch((error)=>{
            setError(error.message);
            setloading(false);
        });
    },[]);

    if (loading) return <div>loading........</div>;
    if (error) return <div>Error: {error}</div>;

    return  (
        <div style={{padding:"20px"}}>
            <h1>Online Student Data</h1>

            <div
            style={{
                height:"300px",
                overflowY:"auto",
                border:"1px solid #ccc",
                padding:"10px",
            }}
            >
                {students.map((student,index)=>(
                    <div
                    key={student.id}
                    style={{
                        padding:"10px",
                        marginBottom:"10px",
                        borderRadius:"5px",
                    }}
                    >
                        <h2>{student.name}</h2>
                        <div>Email: {student.email}</div>
                        </div>
                ))}
            </div>
        </div>
    );
}
export default ScrollbarExample;