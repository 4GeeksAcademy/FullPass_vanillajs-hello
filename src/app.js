import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];



  for (let i = 0; i < pronoun.length; i++) {
    for (let e = 0; e < adj.length; e++) {
      for (let a = 0; a < noun.length; a++) {
        console.log(`${pronoun[i]}${adj[e]}${noun[a]}${".com"}`)
        console.log(`${pronoun[i]}${adj[e]}${noun[a]}${".net"}`)
        console.log(`${pronoun[i]}${adj[e]}${noun[a]}${".io"}`)
        console.log(`${pronoun[i]}${adj[e]}${noun[a]}${".es"}`)
      }
    }
  }


  console.log("Hello Rigo from the console!");
};
