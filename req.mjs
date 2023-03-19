import axios from 'axios';

const baseUrl = 'http://localhost';
const sessionId = '';
const port = '';

await axios
  .post(`${baseUrl}:${port}/session/${sessionId}/window/rect`, 
    { x: 0, y: 0, width: 600, height: 841 })
  .then(response => {});


// let elementId = '';

// await axios
//   .post(`${baseUrl}:${port}/session/${sessionId}/element`, 
//     { using: "css selector", value: "[data-test='Cappuccino']" })
//   .then(response => {
//     elementId = Object.values(response.data.value)[0];
//     console.log(elementId);
//   });

// await axios
//   .post(`${baseUrl}:${port}/session/${sessionId}/element/${elementId}/click`, {})
//   .then(response => {console.log(response.status)});
