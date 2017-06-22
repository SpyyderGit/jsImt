/**
 * Created by User on 22.06.2017.
 */
/*
 * 3. На основе событий создать свой логер(logger). Который будет регистрировать пользователя со временем
 * посещения и выводит эти данные в консоль. Также можно добавить информацию типа (такой то пользователь вошёл и вышел),
 * набросать событий типа logIn, logout, someAction…. Код произвольный, главное использовать события класса EventEmitter.
 А ещё, чтоб по событию (пользователи) можно было видеть всех пользователей кто был, а по событию логи - все логи юзеров.
 *
 * */

var EventEmit = require('events');
var eventLog = new EventEmit.EventEmitter();
var data = new Date();
var formatedDateReg = data.getDate() + "." + (data.getMonth() + 1) + "\ntime: " + data.getHours() + ":"
    + data.getMinutes() + ":" + data.getSeconds() + " : " + data.getMilliseconds();


var User = {
    name: "Vasya",
    age: 29
};


function regUser() {
    console.log("User: " + User.name + "\nIn: " + formatedDateReg);
}


function someAction() {
    console.log("User " + User.name + " взломал сервер Пентагона " + formatedDateReg);
}


function out() {
    console.log("User " + User.name + " Out " + formatedDateReg);
}


eventLog.on('log', regUser);
eventLog.on('hack', someAction);
eventLog.on('out', out);


eventLog.emit('log');
eventLog.emit('hack');
eventLog.emit('out');
