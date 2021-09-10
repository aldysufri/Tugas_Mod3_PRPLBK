import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import App from './App';
import Head from './components/Head'
import Parent from './components/Parent'
import Child from './components/Child'
import reportWebVitals from './reportWebVitals';

const title = "**HAPPY FAMILY**"

const parent = [
  { image: "https://source.unsplash.com/vJLv__K7zU8/230x230", name: "Brian", des:"velit leo tempus purus, congue sodales diam lacus blandit ipsum." },
  { image: "https://source.unsplash.com/DMcNqigMn1c/230x230", name: "Rena", des:"velit leo tempus purus, congue sodales diam lacus blandit ipsum." },
];

const child = [

  { image: "https://source.unsplash.com/SRs7zDrj150/230x230", name: "Sheima", des: "velit leo tempus purus, congue sodales diam lacus blandit ipsum. Aliquam erat volutpat." },
  { image: "https://source.unsplash.com/IVrtlceLSzs/230x230", name: "Sheila", des:"velit leo tempus purus, congue sodales diam lacus blandit ipsum. Aliquam erat volutpat." },
  { image: "https://source.unsplash.com/RDf0qh6VvQ0/230x230", name: "Adam", des: "velit leo tempus purus, congue sodales diam lacus blandit ipsum. Aliquam erat volutpat." },
  { image: "https://source.unsplash.com/o1Vyc7QgPzc/230x230", name: "Alan", des:"velit leo tempus purus, congue sodales diam lacus blandit ipsum. Aliquam erat volutpat." },

];

const bg = "https://source.unsplash.com/mjC9apK53a8"

ReactDOM.render(
  <React.StrictMode>
    <div style={{ backgroundImage: `url(${bg})`}}>
      <Head title={title} />
      <Parent parent={parent}></Parent>
      <Child child={child}></Child>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
