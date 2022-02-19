const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');

const users = [];

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}))

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.get('/login', ( req , res ) => {
    res.render('login');
})

app.get('/users',( {query} , res) => {
    if (query.city || query.age) {
        // console.log(query.city)
        // console.log(query.age)
        let filteredArray = [...users];
        if (query.city){
            filteredArray = filteredArray.filter(userCity => userCity.city === query.city);
        }
        if (query.age){
            filteredArray = filteredArray.filter(userAge => userAge.age === query.age);
        }
        console.log(filteredArray)
        res.render('users', {users:filteredArray});
        return
    }

    res.render('users', {users})
})

app.post('/login', (req, res) => {
    newUser = req.body;
    let findEmail = users.map(user => user.email);
    if (findEmail.includes(newUser.email)){
        res.render('errorPage');
        return;
    }else
    users.push({...newUser, id: users.length + 1})
    res.redirect('/users')
})

app.get('/users/:id', (req,res)=>{
    let user = users.find(user => user.id === +req.params.id );
    res.render('user/id', {user})
})

app.use((req, res)=>{
    res.render('notFoundPage')
})

app.listen(5200, ()=>{
    console.log('Server starts successful')
})

