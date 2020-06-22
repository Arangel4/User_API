import React, { Component } from 'react';
import UserPanel from './UserPanel';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theUsers: []
    };
  }

  // Get the data
  fetchData() {
    // Use fetch functin and callbacks to transform the data to a JSON structure.
    fetch("https://randomuser.me/api?results=25") // Gets the raw text data.
    .then(response => response.json())        // Transform the text data to JSON.
    .then((theseUsers) => {
      this.setState({
        theUsers: theseUsers.results,
      },
      () => {
        console.log(`the users retrieved are ${this.state.theUsers[0]}`);
        console.log("results length is " + this.state.theUsers.length);
      });
    });
  }

  // Use the React method ComponentDidMount() for retrieving data
  componentDidMount() {
    // call your fetchData() method here in order to populate the state with the 25 users JSON objects
    this.fetchData();
  }

  render() {
    let theUserPanel = [];
    for (let i = 0; i < this.state.theUsers.length; i ++) {
      theUserPanel.push(<div><UserPanel key={this.state.theUsers[i]} user={this.state.theUsers[i]} /></div>);
    }
    return (
      <div>
        <h1>User Information</h1>
        {theUserPanel}
      </div>
    );
  }
}

export default App;
