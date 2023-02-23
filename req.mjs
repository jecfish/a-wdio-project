import axios from 'axios';

const baseUrl = 'http://127.0.0.1';
const sessionId = '';
const port = '';

await axios
  .post(`${baseUrl}:${port}/session/${sessionId}/window/rect`, 
    { x: null, y: null, width: 900, height: 841 })
  .then(response => {});


// let elementId = '';

// await axios
//   .post(`${baseUrl}:${port}/session/${sessionId}/element`, 
//     { using: "css selector", value: "[data-test='Cappuccino'" })
//   .then(response => {
//     elementId = Object.values(response.data.value)[0];
//     console.log(elementId);
//   });

// await axios
//   .post(`${baseUrl}:${port}/session/${sessionId}/element/${elementId}/click`, {})
//   .then(response => {});