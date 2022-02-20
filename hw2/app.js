const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');

const users = [];
let userInfo = [];

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
        // console.log(filteredArray)
        res.render('users', {users:filteredArray});
        return
    }

    res.render('users', {users})
})


app.post('/login', (req, res) => {
    newUser = req.body;
    // console.log(newUser)
    let findEmail = users.map(user => user.email);
    if (findEmail.includes(newUser.email)){
        res.render('errorPage');
        return;
    }else
    users.push({...newUser, id: users.length + 1})
    res.redirect('/users')
})


app.get('/users/:id', ( req , res )=>{
    userInfo = users.find(user => user.id === +req.params.id );
    res.redirect('/user/id')
})


app.get('/user/id',(req,res)=>{
    console.log(userInfo)
    res.render('user/id', {userInfo})
})


app.get('/signIn',(req,res)=>{
    res.render('signIn')
})


app.post('/signIn', (req, res)=>{
     let userSearch = req.body;
     userInfo = users.filter(user => (user.password === userSearch.password && user.email === userSearch.email))
     if (userInfo.length){
         res.redirect('/user/id');
         return
     }else
      res.render('notFoundPage');
})


app.use((req, res)=>{
    res.render('notFoundPage')
})


app.listen(5200, ()=>{
    console.log('Server starts successful')
})


// Необхідно розширити ваше ДЗ:
//     - додайте ендпоінт signIn який буде приймати email і password
// і якщо все вірно то редірект на сторінку цього користувача
//
// * хто хоче складніше реалізуйте видалення користувача. Кнопка
// повинна знаходитись на сторінці з інфою про одного юзера. Після видалення редірект на "/users"

