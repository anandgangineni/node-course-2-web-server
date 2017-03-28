const express = require('express');
const hbs = require('hbs');

var app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    res.send({
      name: 'anand',
      likes: [
        'movies',
        'web programming'
      ]
    });
});

app.get('/about', (req, res)=>{
  res.render('about.hbs',{
       pageTitle: 'About page',
       welcomeMessage: 'Welcome to About page',
       currentYear: new Date().getFullYear()
  });
});

app.get('/bad', (req, res)=>{
    res.send(
      {
        errorMessage: 'This is a bad request'
      }
    );
});

app.listen(3000, ()=>{
  console.log('server is started on port # 3000');
});
