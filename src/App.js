import React, { Component } from 'react';
import './App.css';
import Chart from './Chart';
import axios from 'axios';

class App extends Component {
constructor(props){
  super(props);
  this.state = {
      userData : []
  }
}
  
  getChartData(){
    axios.get()
  }
  
  render() {
    return (
      <div className="App">
        <Chart />
      </div>
    );
  }
}

export default App;
