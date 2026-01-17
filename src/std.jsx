import React, { Component } from "react";
class Stud extends Component{
    render(){
        let m1=this.props.m1;
        let m2=this.props.m2;
        let m3=this.props.m3;
        let total=m1+m2+m3;
        return(
        <div>
            <h2>Student Name={this.props.name}</h2>
            <h2>Course={this.props.course}</h2>
            <h2>Total Marks={total}</h2>
        </div>
        );
    }
}
export default Stud;