import React, { Component } from 'react';
// import { InitialState } from '../../InitialState/InitialState';
// import linkState from 'react-link-state';

class FullProfile extends Component {

  constructor(props) {
      super(props);
      this.state = {
        firstName: '',
        lastName: '',
        email: '',
        age: 0
      };
    }
      
      handleChange = (e) => {
        // e.preventDefault();
        this.setState({ [e.target.name] : e.target.value });
        console.log(e.target.name);
        console.log(e.target.value);
      }

  render() { 
  return (
        <div>
          {/* why maybe add onSubmit={someprop.somefunc} ?? */}
          <form action='http://localhost:4000/postInput' method='POST'>

          {/* <input 
            type="text"
            name="firstName"
            placeholder="First Name!"
            value={this.state.firstName}
            onChange={this.handleChange.bind(this)}
          /> */}

          <input 
            type="text"
            name="lastName"
            placeholder="Last Name!"
            value={this.state.lastName}
            onChange={this.handleChange}
          />

          {/* <input 
            type="email"
            name="email"
            placeholder="Your emai!"
            value={this.state.email}
            onChange={this.handleChange.bind(this)}
          />

          <input 
            type="number"
            min="0"
            max="120"
            name="age"
            placeholder="Your age!"
            value={this.state.age}
            onChange={this.handleChange.bind(this)}
          /> */}

          <button type="submit">Send to 4000</button>
          {/* <input type="text" valueLink={linkState(this, 'username')} />
          <input type="password" valueLink={linkState(this, 'password')} />
          <input type="checkbox" checkedLink={linkState(this, 'toggle')} /> */}
          </form>
        </div>      
      );
    }
};

export default FullProfile;