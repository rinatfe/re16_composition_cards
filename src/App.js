import './App.css';
import {useState} from 'react';
import CardTitle from './components/card';

function App() {
  return (
    <div className="App">
      <CardTitle>
        <img src="https://itlogia.ru/upload/images/article/6066e08ecd752.png" className="card-img-top" alt="Здесь должна быть картинка"></img>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </CardTitle>
      <CardTitle>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </CardTitle>
    </div>
  );
}

export default App;
