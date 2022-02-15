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

    // fs.writeFile(path.join(__dirname,'main', 'inPerson', 'inPerson.txt'),
    //     `NAME: ${inPerson[0].name}\n YEAR: ${inPerson[0].year}\n CITY: ${inPerson[0].city}`,
    //     (err)=>{
    //     if (err){
    //         console.log(err)
    //         throw err
    //     }else
    //         fs.writeFile(path.join(__dirname,'main', 'inPerson', 'inPerson.txt'),
    //             `NAME: ${inPerson[1].name}\n YEAR: ${inPerson[1].name}\n CITY: ${inPerson[1].city}`,
    //             (err)=>{
    //                 if (err){
    //                     console.log(err)
    //                     throw err
    //                 }
    //             })
    //
    //     })

for (let i = 0; i < inPerson.length; i++){
        console.log([inPerson[i]])
        fs.writeFile(path.join(__dirname,'main', 'inPerson', 'inPerson.txt'),
            `NAME: ${[inPerson[i].name]}\nYEAR: ${[inPerson[i].year]}\nCITY: ${[inPerson[i].city]}\n`,
            {flag : 'a'},
            (err)=>{
                if (err){
                    console.log(err)
                    throw err
                }
            })
}







