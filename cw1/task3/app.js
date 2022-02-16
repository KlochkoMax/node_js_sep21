// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли тоді вам потрібно їх очистити, але не видаляти,
//     якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _new

let fs = require('fs');
let path = require('path');

// fs.mkdir(path.join(__dirname, 'Folder', 'FolderTask3'), {recursive:true}, (err) => {
//     if (err){
//         console.log(err);
//         throw err;
//     }
//     fs.writeFile(path.join(__dirname, 'Folder', 'Task3File.txt'), 'Some Data Task3',(err)=>{
//         if (err){
//             console.log(err);
//             throw err;
//         }
//     })
// })

fs.readdir(path.join(__dirname, 'Folder'), (err,data)=>{
    if (data.includes(".")){

    }
})