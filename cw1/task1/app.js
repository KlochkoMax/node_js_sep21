let fs = require('fs');
let path = require('path');

fs.writeFile(path.join(__dirname, 'task1.txt'), 'Some Data',(err)=>{
    if (err) {
        console.log(err);
        throw err
    }
    fs.readFile(path.join(__dirname, 'task1.txt'), 'utf8',(err, data)=>{
        if (err){
            console.log(err);
            throw err
        }
        fs.writeFile(path.join(__dirname, 'task1Rewritten.txt'), `${data}`,(err)=>{
            if (err){
                console.log(err);
                throw err
            }
        })
    })
})

    // Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл,
    // в вас вийде невеликий callback hell, пізніше я вам покажу
    // як можна це обійти, але поки зробіть так