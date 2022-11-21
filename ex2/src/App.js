import React from 'react';
import "./App.css";
import DateTime from './dateTime';
import DemoComponent from './props';

function App() {
  return (
   <center>
   <h2><center>COSMETICS</center></h2>

<div class="card">
  <div class="container">
    <h4><b>EYELINER</b></h4> 
    <p>There are a variety of eyeliner options on Myntra that are best suited for your daily routine as well as special occasions. You can find a wide range of eyeliners from top cosmetic brands around the world. From Lakme to Maybelline, there is a massive collection of eyeliners available on the platform.</p> 
  </div>
</div>
<DateTime />
<DemoComponent />
   </center>
  );
}

export default App;