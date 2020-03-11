import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props){
     super(props)
       this.state = {
          people: []
       }
  }

  componentDidMount(){
    axios
    .get('https://swapi.co/api/people')
    .then(res => this.setState({ people : res.data.results }));
  }

  render(){
    console.log(this.state.people)
    return (
      <React.Fragment>
        <h3>Wait minutes...</h3>
        <p>
          <ul >{this.state.people.map(p => 
            <li>{p.name}</li> )}
          </ul>
            
        </p>
      </React.Fragment>
    );
  }
}

export default App;
