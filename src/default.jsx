import React, { Component } from "react";

class Welcome4 extends Component {
    constructor(props) {
        super(props);
        /*let n1=this.props.firstname;
        let n2=this.props.lastname;
        this.fullname=n1+""+n2;*/
        this.fullname=props.firstname+""+props.lastname;
    }
        render(){
            return <h2>Welcome,{this.fullname}</h2>;
        }
}
export default Welcome4;