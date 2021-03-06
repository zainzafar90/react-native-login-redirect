const express = require('express');
const exphbs  = require('express-handlebars');
const querystring = require('querystring');

const PORT = 5000;

const app = express();
app.use('/static', express.static('static'));
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/success.html', function (req, res) {
  const {state, code} = req.query;
  const q = querystring.stringify({state, code});
  res.render('success', { appLink: 'https://appsite-redirect.herokuapp.com/app.html?' + q });
});

app.get('/', function (req, res) {
  const {state, code} = req.query;
  const q = querystring.stringify({state, code});
  res.render('success', { appLink: 'https://appsite-redirect.herokuapp.com/app.html?' + q });
});

app.listen(process.env.PORT || PORT, function () {
  console.log('Running on http://localhost:' + PORT);
});
