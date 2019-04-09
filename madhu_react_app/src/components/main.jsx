import React from 'react';


class Main extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      
      fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Enter username</label>
          <input id="username" name="username" type="text" /><br/>
  
          <label htmlFor="email">Enter your email</label>
          <input id="email" name="email" type="email" /><br/>
  
          <label htmlFor="birthdate">Enter your birth date</label>
          <input id="birthdate" name="birthdate" type="text" /><br/>
  
          <button>Send data!</button>
        </form>
      );
    }
  }

export default Main;

