import '../stud1.css'
function Studlist({ students }) {
  return (
    <div className="student-list">
      {students.map((student) => (
        <div key={student.id} className="student-card">
          <p>ID: {student.id}</p>
          <p>Name: {student.name}</p>
          <p>Course: {student.course}</p>
          <p>Score: {student.score}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Studlist;