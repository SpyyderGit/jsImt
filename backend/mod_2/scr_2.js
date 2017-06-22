/**
 * Created by oleg on 18.06.17.
 */
/*
 *  Необходимо написать для события listening функцию обратного вызова(обработчик), которая выводит
 *  в консоль строку 'Listen port [номер порта]... Для события connection объекта server функцию обратного вызова,
 *  которая выводит в консоль строку 'Connect...' Для события request объекта server
 *  функцию обратного вызова, которая выводит в консоль:
 - метода запроса;
 - URL запроса;
 - код статуса ответа;
 Подсказка, нужно посмотреть встроенные события Node.js, а также объекты request и response.
 */
var http = require('http');
var EventEmitter = require('events');
var emiter = new EventEmitter();

var port = 3000;
var server = http.createServer (function (req, res) {
    console.log("Listen port[" + port + "]");
    console.log("Method: " + req.method);
    console.log("URL: " + req.url);
    console.log("Resp: " + res.statusCode);
    console.log('Connected...');
    res.end();
});

emiter.on('Connection',function(){
    return server.listen(port);
});

emiter.emit('Connection');
