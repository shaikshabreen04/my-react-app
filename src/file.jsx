import students from './data/student.json';

function StudentFile() {    
    return (
        <div style={{ padding: '20px' }}>
            <h1>Student List </h1>
            {students.map((student, index) => (
                <div
                 key={student.id} 
                 style={{
                    backgroundColor: ['#1385d1',"#81094d","#1d7540","#524d15"][index % 4],                  
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
export default StudentFile;
                