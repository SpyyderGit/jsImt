/**
 * Created by oleg on 17.06.17.
 */
/*
 * 1. У нас есть сущность объект User, у объекта есть два метода getName и getCode, которые принимают любые параметры
 * и выводят их в консоль.
 * Напишите код методов объекта, чтобы вызовы методов могли вызываться таким кодом: User.getName(argument).getCode(argument);
 * */


var User = {
        userName: null,
        userCode: null,
        getName: function (name) {
            this.userName = name;
            return this;
        },

        getCode: function (code) {
            this.userCode = code;
            return this;
        }
    }
;
User.getName('Vasya').getCode(4);
console.log("Name: " + User.userName + "\nCode: " + User.userCode);