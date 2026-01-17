function StudentCol() {
    const students = [
        { id: 1, name: 'Santhi', course: "React", score: 95 },
        { id: 2, name: 'Shabreen', course: "Python", score: 90 },
        { id: 3, name: 'Sowmya', course: "Java", score: 85 },
        { id: 4, name: 'Karthik', course: "Oracle", score: 80 }
    ];  
    const bgColors =  [
        "#250989", 
        "#4c042d",
        "#d80f0f",
        "#403b06",
    ]   
    return (
        <div style={{ padding: '20px' }}>
            <h1>Student List</h1>
            {students.map((student, index) => (
                <div
                 key={student.id} 
                 style={{
                    backgroundColor: bgColors[index % bgColors.length],
                    border: '1px solid #ccc',
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
export default StudentCol;