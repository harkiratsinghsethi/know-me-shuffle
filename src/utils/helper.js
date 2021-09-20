"use strict";
exports.__esModule = true;
exports.testType = void 0;
var testType = function (a) {
    return a;
};
exports.testType = testType;
var a = '1';
var b = 2;
var c = true;
var num;
num = +'1';
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role[Role["READONLY"] = 100] = "READONLY";
})(Role || (Role = {}));
var obj = {
    role: Role.ADMIN
};
var fav;
fav = ['test', 1];
console.log(obj.role);
var add = function (num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else {
        return num1.toString() + num2.toString();
    }
};
var res = add(1, 2);
console.log(res);
var addNew = function (n1, n2) {
    return +n1 + +n2;
};
addNew('1', '2');
var addAndHandle = function (a, b, cb) {
    var result = a + b;
    cb(result);
};
var printAddNew = function () {
    console.log(addNew('1', '2'));
    return undefined;
};
printAddNew();
var combineValue;
combineValue = addNew;
addAndHandle(20, 15, function (result) { return console.log(result); });
var addFive = function (num) {
};
var xx = {
    defaultNum: 5,
    addFive: function (num) {
        return this.defaultNum + num;
    }
};
console.log(xx.addFive(10));
