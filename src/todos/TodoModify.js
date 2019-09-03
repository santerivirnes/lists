import React from "react";
import Todo from "./Todo";

export default class TodoModify extends React.Component{

  
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  handleSubmit = event => {
    event.preventDefault()
    this.props.onSubmit({
      text: this.state.text,
      id: this.props.todo.id
    });
    this.setState({
      text: ""
    });
  }

  render() {
    return (
      <div style={{background: "#000", display: "flex", justifyContent: "center"}}>
      <form onSubmit={this.handleSubmit}>
      <input  
      value={this.state.text}
      onChange={this.handleChange}
      name="text"
      placeholder={this.state.text}
      />
      </form>
  </div>
    );
  }
}
