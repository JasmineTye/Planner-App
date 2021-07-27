console.log("----------------------------------------");
console.log("Planner App > backend > server.js");
console.log("---------------------------------------");

//----------------------------------------------
// imports
//----------------------------------------------
const app = require('./controller/app');


// //----------------------------------------------
// // configurations
// //----------------------------------------------
const port = process.env.PORT || 4201;


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

//----------------------------------------------
// configurations
//----------------------------------------------
// const hostname = '192.168.1.116';
// const port = process.env.PORT ||3000;

// //----------------------------------------------
// // main
// //----------------------------------------------
// // start the server and start listening for incoming requests
// app.listen(port, hostname, () => {
//     console.log(`Server started and accessible via http://${hostname}:${port}/`);
// });
