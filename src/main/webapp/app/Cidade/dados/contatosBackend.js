/* global process */

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());


var cidades =  [
     {"id":1,"nomeCid":"LAURO MULLER","siglaUf":"SC","statusCid":"A"},
     {"id":2,"nomeCid":"ORLEANS","siglaUf":"SC","statusCid":"A"},
     {"id":3,"nomeCid":"CURITIBA","siglaUf":"PR","statusCid":"A"},
     {"id":4,"nomeCid":"PARANA","siglaUf":"SC","statusCid":"A"},
     {"id":5,"nomeCid":"RIO DE JANEIRO","siglaUf":"RJ","statusCid":"A"},
     {"id":6,"nomeCid":"VITORIA","siglaUf":"BA","statusCid":"D"},
     {"id":7,"nomeCid":"URUSANAGA ","siglaUf":"SC","statusCid":"A"},
     {"id":8,"nomeCid":"CRICIUMA","siglaUf":"SC","statusCid":"D"},
     {"id":9,"nomeCid":"SAO LUGER","siglaUf":"SC","statusCid":"A"},
     {"id":10,"nomeCid":"gg","siglaUf":"SC","statusCid":"A"}];

var contatos = [
	{nome: "Bruno", telefone: "9999-2222", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
	{nome: "Sandra", telefone: "9999-3333", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}},
	{nome: "Mariana", telefone: "9999-9999", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}}
];
var operadoras = [
	{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
	{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
	{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
	{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
	{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
];

app.listen(process.env.PORT || 8080);

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/contatos', function(req, res) {
  res.json(contatos);
});

app.post('/contatos', function(req, res) {
  contatos.push(req.body);
  res.json(true);
});

app.get('/operadoras', function(req, res) {
  res.json(operadoras);
});
