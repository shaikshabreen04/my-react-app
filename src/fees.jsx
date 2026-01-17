import {useState} from "react";

function Course({addCourse}) {
    return(
        <select onChange={(e)=>addCourse(e.target.value)}>
            <option value="">Select Course</option>
            <option>Oracle</option>
            <option>Java</option>
            <option>Python</option>
        </select>
    );
}

function SelectedCourses({selectedCourses,removeCourse}) {
    return(
        <select onChange={(e)=>removeCourse(e.target.value)}>
            <option>Selected Courses</option>
            {selectedCourses.map(course=>(
                <option key={course}>{course}</option>
            ))}
        </select>
    );
}

function CourseFee({ courseFee }) {
  return (
    <>
      Course Fee:
      <input type="text" value={courseFee} />
    </>
  );
}

function TotalFee({ totalFee }) {
  return (
    <>
      Total Fee:
      <input type="text" value={totalFee} />
    </>
  );
}

function CourseApp() {
  const fees = {
    Oracle: 5000,
    Java: 8000,
    Python: 10000,
  };

  const maxCourses = 3;

  const [selectedCourses, setSelectedCourses] = useState([]);
  const [courseFee, setCourseFee] = useState("");
  const [totalFee, setTotalFee] = useState(0);


  const addCourse = (course) => {
    if (course === "") return;

    if (selectedCourses.length >= maxCourses) {
      alert("All courses already selected");
      return;
    }

    if (selectedCourses.includes(course)) return;

    setSelectedCourses([...selectedCourses, course]);
    setCourseFee(fees[course]);
    setTotalFee(totalFee + fees[course]);
  };

  const removeCourse = (course) => {
    if (course === "Selected Courses") return;

    setSelectedCourses(selectedCourses.filter(c => c !== course));
    setTotalFee(totalFee - fees[course]);
  };

  return (
    <>
      <Course addCourse={addCourse} />
      <SelectedCourses
        selectedCourses={selectedCourses}
        removeCourse={removeCourse}
      />
      <br /><br />
      <CourseFee courseFee={courseFee} />
      <TotalFee totalFee={totalFee} />
    </>
  );
}

export default CourseApp;