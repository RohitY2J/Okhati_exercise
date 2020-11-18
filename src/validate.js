import React, { Component } from "react";
import "./App"
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';


/*export default class ValidationForm extends React.Component{
	state = {
		email: "",
		password: ""
	};
}*/


const initialState = {
  email: "",
  password: "",
  emailError:"",
  passwordError:""
};

var validate = 0;
var submit = false;
export default class ValiationForm extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let emailError = "";
    let passwordError = "";
    // let passwordError = "";

    if(!this.state.email){
    	emailError = "Email is blank"
    }
    else if(!this.state.email.includes("@")||!this.state.email.includes(".")) {
      emailError = "invalid email";
    }

    if(!this.state.password){
    	passwordError = "Password is blank";
    }
    else if(!/\d/.test(this.state.password)){
    	passwordError = "Password must contain number";
    }
    else if(!/[a-z]/.test(this.state.password.match))
    {
    	passwordError = "Password must contain alphabet";
    }
    else if(this.state.password.length < 8){
    	passwordError = "Password length should be 8 or greater";
    }
    

    if (emailError  || passwordError) {
      this.setState({ emailError,  passwordError });
      validate = 1;
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
    	validate = 0;
    	console.log("Submitted");
        console.log(this.state);
      // clear form
      this.setState(initialState);
    }
    
  };

  render() {

  	if (validate == 0) {
        return (
            <form onSubmit = {this.handleSubmit}>
                <div className="header" >
                    <h1>Cosmos Enterprise</h1>
                </div>

                <TextField required name="email"  onChange={this.handleChange} value={this.state.email} id="App-Text" label="Email" variant="outlined" helperText={this.state.emailError}/><br /><br /><br />
                <TextField required name="password" id="App-Text1" label="Password" type="password" variant="outlined" value={this.state.password} onChange={this.handleChange} helperText={this.state.passwordError}/><br /><br /><br /><br />
                
                <Button id="App-btn" color="secondary" variant="contained" style={{ borderRadius: 25, fontSize: 20 }} type = "submit">
                    Submit
              </Button>  

               
            </form>
        );
    }
    else {
        return (
            <form onSubmit = {this.handleSubmit}>
                <div className="header" >
                    <h1>Cosmos Enterprise</h1>
                </div>
                <TextField error required name="email"  onChange={this.handleChange} value={this.state.email} id="App-Text" label="Email" variant="outlined" helperText={this.state.emailError}/><br /><br /><br />
                <TextField error required name="password" id="App-Text1" label="Password" type="password" variant="outlined" value={this.state.password} onChange={this.handleChange} helperText={this.state.passwordError}/><br /><br /><br /><br />
                
                <Button id="App-btn" color="secondary" variant="contained" style={{ borderRadius: 25, fontSize: 20 }} type = "submit">
                    Submit
              </Button>
            </form>
        );
    }

  

          
          
       
      
    
  }
}