function Employee(props) {
    return (
        <div>
        <h2>EmployeeName: {props.name}</h2>
        <h2>Department: {props.department}</h2>
        <h2>Salary: Rs {props.salary}</h2>
        </div>   
    );

}
export default Employee;