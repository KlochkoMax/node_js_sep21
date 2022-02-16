// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній,
//     старий файл видаліть після того як все завершиться. Також вийде callback hell

let fs = require('fs');
let path = require('path');

fs.writeFile(path.join(__dirname, 'task2.txt'), 'Some Data Task2', (err)=>{
    if (err){
        console.log(err)
        throw err
    }
    fs.readFile(path.join(__dirname, 'task2.txt'),'utf8',(err, data)=>{
        if (err){
            console.log(err);
            throw err
        }
        fs.mkdir(path.join(__dirname, 'newFile'), (err)=>{
            if (err){
                console.log(err);
                throw err
            }
        fs.writeFile(path.join(__dirname, 'newFile', 'newFileForData.txt'), `${data}`, (err)=>{
            if (err){
                console.log(err);
                throw err
            }
            fs.unlink(path.join(__dirname, 'task2.txt'), (err)=>{
                if (err){
                    console.log(err);
                    throw err
                }
            })
        })
        })
    })
})