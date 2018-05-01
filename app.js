var app  = require('express')()
var bodyParser  = require('body-parser');
var cors = require('cors');
var busboy = require('connect-busboy');



var secret = 'aT42dfdf46GDh6fdp09hmgd35FdsDe';

//bodyparser needs
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json({ extended: true }));
app.use(cors());
app.use(busboy()); 


app.use(function(err, req, res, next) {
  next(err);
});

//AllNews
app.get('/getAllNews', function(req, res) {	
	var news = [
				{titulo: 'Publicação 1', descricao: 'Pequena descrição 1', data_criacao: '29/04/2018', url_imagens: 'http://hortonhighschool.ca/wp-content/uploads/2017/10/News.jpg', url_videos: 'http://hortonhighschool.ca/wp-content/uploads/2017/10/News.jpg', url_links: ''},
				{titulo: 'Publicação 2', descricao: 'Pequena descrição 2', data_criacao: '10/12/2018', url_imagens: 'http://hortonhighschool.ca/wp-content/uploads/2017/10/News.jpg', url_videos: 'http://hortonhighschool.ca/wp-content/uploads/2017/10/News.jpg', url_links: ''},
				{titulo: 'Publicação 1', descricao: 'Pequena descrição 3', data_criacao: '05/05/2018', url_imagens: 'http://hortonhighschool.ca/wp-content/uploads/2017/10/News.jpg', url_videos: 'http://hortonhighschool.ca/wp-content/uploads/2017/10/News.jpg', url_links: ''}
				];	
	res.json(news);
    return;
});

//AllEvents
app.get('/getAllEvents', function(req, res) {	
	var events = [
				{titulo: 'Evento 1', descricao: 'Pequena descrição 1', data_inicio: '29/04/2018', data_fim: '30/04/2018', localizacao: 'Montevideo', valor: '100,00 reais', url_imagens: 'http://hortonhighschool.ca/wp-content/uploads/2017/10/News.jpg', url_videos: 'http://hortonhighschool.ca/wp-content/uploads/2017/10/News.jpg', url_links: 'www.equipepancho.com'},
				{titulo: 'Evento 2', descricao: 'Pequena descrição 2', data_inicio: '10/12/2018', data_fim: '11/12/2018', localizacao: 'Limeira', valor: '100,50 reais', url_imagens: 'http://hortonhighschool.ca/wp-content/uploads/2017/10/News.jpg', url_videos: 'http://hortonhighschool.ca/wp-content/uploads/2017/10/News.jpg', url_links: 'www.equipepancho.com'},
				{titulo: 'Evento 3', descricao: 'Pequena descrição 3', data_inicio: '05/05/2018', data_fim: '06/05/2018', localizacao: 'Campinas', valor: '35,00', url_imagens: 'http://hortonhighschool.ca/wp-content/uploads/2017/10/News.jpg', url_videos: 'http://hortonhighschool.ca/wp-content/uploads/2017/10/News.jpg', url_links: 'www.equipepancho.com'}
				];	
	res.json(events);
    return;
});


//configuracao para aws
//var port = 9002;
//app.listen(port);

//configuracao para o heroku
app.listen(process.env.PORT || 5000)

console.log('Listening');