var express = require('express');
var app = express();
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  res.render('index');
});

app.post('/welcome', function (req, res) {
	var name = req.body.name;
	var saludo = Genero(req.body.gender);
  res.render('welcome', {name: name,saludo: saludo});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

function Genero(gender) {
	if (gender=="male") {
		saludo = "Bienvenido ";

	}else{ 
		saludo = "Bienvenida ";
	}

	return saludo;
}