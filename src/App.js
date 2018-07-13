import React, { Component } from 'react';
import './App.css';
// import $ from ‘jquery’

class App extends Component {
  state = {
    current: 0,
    max: 0,
    message: "Good Guess!",
    cars: [
      {id: 1,
      path: "./images/image1.jpg"},
     
      {id: 2,
      path: "./images/image2.jpg"}, 
     
      {id: 3,
       path: "./images/image3.jpg"}, 
       
      {id: 4,
       path: "./images/image4.jpg"}, 
         
      {id: 5,
       path: "./images/image5.jpg"}, 
       
      {id: 6,
       path: "./images/image6.jpg"}, 
         
      {id: 7,
       path: "./images/image7.jpg"}, 
       
      {id: 8,
       path: "./images/imag8.jpg"}, 
       
      {id: 9,
       path: "./images/image9.jpg"}, 
       
      {id: 10,
       path: "./images/image10.jpg"}, 
       
      {id: 11,
       path: "./images/image11.jpg"}, 
       
      {id: 12,
       path: "./images/image12.jpg"},
      ],

  };

shuffle = () => {
  let current = this.state.current
  var car = [{id: 1,
    path: "./images/image1.jpg"},
   
    {id: 2,
    path: "./images/image2.jpg"}, 
   
    {id: 3,
     path: "./images/image3.jpg"}, 
     
    {id: 4,
     path: "./images/image4.jpg"}, 
       
    {id: 5,
     path: "./images/image5.jpg"}, 
     
    {id: 6,
     path: "./images/image6.jpg"}, 
       
    {id: 7,
     path: "./images/image7.jpg"}, 
     
    {id: 8,
     path: "./images/image8.jpg"}, 
     
    {id: 9,
     path: "./images/image9.jpg"}, 
     
    {id: 10,
     path: "./images/image10.jpg"}, 
     
    {id: 11,
     path: "./images/image11.jpg"}, 
     
    {id: 12,
     path: "./images/image12.jpg"},
    ]
    
  var j, x, i;
    for (i = car.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = car[i];
        car[i] = car[j];
        car[j] = x;
    }
    this.setState({cars: car, current: ++current}) ;
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={"image1.jpg"} className="App-logo" alt="logo" />
          <h1 className="App-title">Test Your Memeory Game</h1>
        </header>
        <p className="App-intro">
          Only click on each picture once for as long as you can!
        </p>
        <div class="row">
          <div class="col-md-4">
            <h2 className="max-score">
              MAX SCORE: {this.state.max}
            </h2>
          </div>
          <div class="col-md-4">
            <h2 className="max-score">
              {this.state.message}
            </h2>
          </div>
          <div class="col-md-4">
            <h2 className="max-score">
              CURRENT SCORE: {this.state.current}
            </h2>
          </div> 
        </div>

        <div class="row">
          <div class="col-md-3">
            <img id="car" src={this.state.cars[0].path} onClick={this.shuffle} alt="unclicked"/>
          </div>
          <div class="col-md-3">
            <img id="car" src={this.state.cars[1].path} onClick={this.shuffle} alt="unclicked"/>
          </div>
          <div class="col-md-3">
            <img id="car" src={this.state.cars[2].path} onClick={this.shuffle} alt="unclicked"/>
          </div>
          <div class="col-md-3">
            <img id="car" src={this.state.cars[3].path} onClick={this.shuffle} alt="unclicked"/>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-md-3">
            <img id="car" src={this.state.cars[4].path} onClick={this.shuffle} alt="unclicked"/>
          </div>
          <div class="col-md-3">
            <img id="car" src={this.state.cars[5].path} onClick={this.shuffle} alt="unclicked"/>
          </div>
          <div class="col-md-3">
            <img id="car" src={this.state.cars[6].path} onClick={this.shuffle} alt="unclicked"/>
          </div>
          <div class="col-md-3">
            <img id="car" src={this.state.cars[7].path} onClick={this.shuffle} alt="unclicked"/>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-md-3">
            <img id="car" src={this.state.cars[8].path} onClick={this.shuffle} alt="unclicked"/>
          </div>
          <div class="col-md-3">
            <img id="car" src={this.state.cars[9].path} onClick={this.shuffle} alt="unclicked"/>
          </div>
          <div class="col-md-3">
            <img id="car" src={this.state.cars[10].path} onClick={this.shuffle} alt="unclicked"/>
          </div>
          <div class="col-md-3">
            <img id="car" src={this.state.cars[11].path} onClick={this.shuffle} alt="unclicked"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
