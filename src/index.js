import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function MyImage(){return(<img src='https://scontent.fnag10-1.fna.fbcdn.net/v/t39.30808-6/357393697_6350465168372487_7598810133694878995_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=kZ-LvZirLBYAX9OLTJZ&_nc_ht=scontent.fnag10-1.fna&oh=00_AfCArECDQoNJ4Z6f3AROmf9-f5ViqT3oDPCK0zhrfsHlsA&oe=659625DE' id="rajMadhekar" alt='RajMadhekar' />);}

function Navbar(){
  return  <div id="navbar" class="nClass-xs-sm-md-lg-xl-xxl-xxxl">
          <a href="#main" id="home">home</a>
          <a href="#abt" id="about">about</a>
          <a href="#blg" id="blog">blogs</a>
          <a href="#con" id="contact">contacts</a>
          <a href="#proj" id="projects">projects</a>
          </div>}

function MainContent(){
  return(<>
        <h3>Script</h3>
        <input type="text" for="test" id="testInput" placeholder="enter text"/>
        <button id="test" onclick="testScript()">Test</button>
        <p id="txd">temp</p>
        <br></br>
        </>);}

function DateDisplay(){
  return <><button id="sp" onclick="document.getElementById('smp').innerHTML=Date()">Display Date</button>
        <p id="smp">text_display</p></>
}


function BorderAnim(){
  return <div id="borderAnimation">
  <div class="wrapper">
    <p id="aTex">Raj333221</p></div>
</div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <Navbar />
    <App />
    <MyImage />
    <BorderAnim />
    <MainContent />
    <DateDisplay />
  </React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
