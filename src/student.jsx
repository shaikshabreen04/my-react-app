function Student() {
    const students = [
        { id: 1, name: 'Santhi', course:" React" ,score:95},
        { id: 2, name: 'Shabreen', course:"Python" ,score:90},
        { id: 3, name: 'Sowmya', course:"Java" ,score:85},
        { id: 4, name: 'Karthik', course:"Orcale" ,score:80}
    ];
    return (
        <div style={{ padding: '20px' }}>
            <h1>Student List</h1>
            {students.map((student) => (
                <div
                 key={student.id} 
                 style={{ 
                 border: '1px solid #ccc', 
                 padding: '5px', 
                 marginBottom: '5px',
                 borderRadius: '5px' 
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
export default Student;