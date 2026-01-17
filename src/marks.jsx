function Students() {
    const students = [
        { id: 1, name: 'Santhi', course: "React", score: 95 },
        { id: 2, name: 'Shabreen', course: "Python", score: 90 },
        { id: 3, name: 'Sowmya', course: "Java", score: 85 },
        { id: 4, name: 'Karthik', course: "Oracle", score: 80 }
    ];
    return (
        <div style={{ padding: '20px' }}>
            <h1>Student List</h1>
            {students.map((student) => {
                const bgColor = student.score >= 90 ? '#237318' :  '#E63710' ;
                return (
                    <div key={student.id}
                     style={{
                         backgroundColor: bgColor,
                          padding: '10px', 
                          border: '1px solid #ccc',
                          marginBottom: '10px',
                          borderRadius: '6px'
                          }}
                          >
                        <h2>Name: {student.name}</h2>
                        <p>Course: {student.course}</p>    
                        <p>Score: {student.score}</p>
                    </div>
                );
            })}
        </div>
    );
}
export default Students;