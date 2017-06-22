/**
 * Created by oleg on 22.06.17.
 */
/*
 * ДЗ+
 4. Берём задание 2 и модифицируем его таким образом, чтоб по запросу localhost:3000/about сервер выдавал нам
 данные о запросе в консоль (кто захочет то пусть подумает над тем как вернуть в response),
 а по запросу localhost:3000/stop - останавливаем его.
 **/

var http = require('http');
var fs = require('fs');

var EventEmitter = require('events');
var emiter = new EventEmitter();
var port = 3000;

function currency() {

    var curr = '[{"ccy":"EUR","base_ccy":"UAH","buy":"29.39461","sale":"29.54840"},\
    {"ccy":"RUR","base_ccy":"UAH","buy":"0.46309","sale":"0.46311"},\
    {"ccy":"USD","base_ccy":"UAH","buy":"26.20541","sale":"26.24658"},\
    {"ccy":"BTC","base_ccy":"USD","buy":"2605.8191","sale":"2880.1159"}]';

    var obj = JSON.parse(curr);
    var str = "";

    for (var p in obj) {
        str += "<p><div><strong>" + "ccy: </strong>" + obj[p].ccy + "</div>" +
            "<div><strong>base_ccy: </strong>" + obj[p].base_ccy + "</div>" +
            "<div><strong>buy: </strong>" + obj[p].buy + " </div>" +
            "<div><strong>sale: </strong>" + obj[p].sale + " </div>" +
            "</p>";
    }
    return str;
}


var server = http.createServer(function (req, res) {
    if (req.url === '/about') {
        res.write("Port: " + port);
        res.write("\nMethod: " + req.method);
        res.write("\nURL: " + req.url);
        res.write("\nResp: " + res.statusCode);
        res.write('\nConnected...');
        res.end();
    } else if (req.url === '/currency') {
        res.write(currency());
    } else if (req.url === '/stop') {
        res.exit(1);
    }
    res.end();
});

emiter.on('Connection', function () {
    return server.listen(port);
});

emiter.emit('Connection');