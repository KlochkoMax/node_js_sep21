const path = require('path');
const fs = require('fs');

// const folders = ['online','inPerson'];
//
// for (let folder of folders) {
//     fs.mkdir(path.join(__dirname, 'main', `${folder}`), {recursive:true},(err) =>{
//         if (err){
//             console.log(err);
//             throw err
//         }
//     })
// }

let online = [
    {name: 'Maxym', year: '1990', city: 'Dnipro'},
    {name: 'Viktoria', year: '1993', city: 'Kharkiv'},
    {name: 'Martin', year: '2022', city: 'Odesa'},
];

let inPerson = [
    {name: 'Vasyl', year: '1996', city: 'Lviv'},
    {name: 'Irma', year: '1994', city: 'Kyiv'},
    {name: 'Olena', year: '2013', city: 'Poltava'},
];

// for (let i = 0; i < inPerson.length; i++){
//         console.log([inPerson[i]])
//         fs.writeFile(path.join(__dirname,'main', 'inPerson', 'inPerson.txt'),
//             `NAME: ${[inPerson[i].name]}\nYEAR: ${[inPerson[i].year]}\nCITY: ${[inPerson[i].city]}\n`,
//             {flag : 'a'},
//             (err)=>{
//                 if (err){
//                     console.log(err)
//                     throw err
//                 }
//             })
// }

// for (let i = 0; i < online.length; i++){
//     console.log([online[i]])
//     fs.writeFile(path.join(__dirname,'main', 'online', 'online.txt'),
//         `NAME: ${[online[i].name]}\nYEAR: ${[online[i].year]}\nCITY: ${[online[i].city]}\n`,
//         {flag : 'a'},
//         (err)=>{
//             if (err){
//                 console.log(err)
//                 throw err
//             }
//         })
// }


// fs.readFile(path.join(__dirname, 'main', 'online', 'online.txt'), 'utf8', (err, data)=> {
//     if (err) {
//         console.log(err)
//         throw err
//     }
//     let onlineData = data
//     fs.readFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), 'utf8', (err, data) => {
//         if (err) {
//             console.log(err);
//             throw err
//         }
//
//         let inPersonData = data;
//         // console.log(onlineData)
//         // console.log(inPersonData)
//         fs.appendFile(path.join(__dirname, 'main', 'online', 'online.txt'), `${inPersonData}`, {flag:'w'} , (err) => {
//             if (err) {
//                 console.log(err)
//                 throw err
//             }
//             fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), `${onlineData}`, {flag: 'w'} ,(err) => {
//                 if (err) {
//                     console.log(err)
//                     throw err
//                 }
//             })
//             })
//     })
// })

