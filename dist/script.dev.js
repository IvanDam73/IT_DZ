"use strict";

do {
  var firstName = prompt('Какое Ваше имя?', '');
} while (!firstName);

do {
  var secondName = prompt('Какая у Вас фамилия?', '');
} while (!secondName);

do {
  var dadName = prompt('Какое Ваше отчество?', '');
} while (!dadName);

do {
  var age = prompt('Сколько Вам лет?', '');
  var initAge = parseInt(age);
} while (isNaN(initAge));

var days = age / 4 + age * 365;
var futureAges = Number(age) + 5;
var gender = confirm('Ваш пол мужской?');
var result = ["\u0412\u0430\u0448\u0435 \u0424.\u0418.\u041E. : ".concat(secondName, " ").concat(firstName, " ").concat(dadName, "\n\u0412\u0430\u0448 \u0432\u043E\u0437\u0440\u0430\u0441\u0442 : ").concat(age, "\n\u0412\u0430\u0448 \u0432\u043E\u0437\u0440\u0430\u0441\u0442 \u0432 \u0434\u043D\u044F\u0445 : ").concat(days, "\n\u0427\u0435\u0440\u0435\u0437 5 \u043B\u0435\u0442 \u0412\u0430\u043C \u0431\u0443\u0434\u0435\u0442 : ").concat(futureAges, "\n\u0412\u0430\u0448 \u043F\u043E\u043B : ").concat(yourGender(gender), " \n\u0412\u044B \u043D\u0430 \u043F\u0435\u043D\u0441\u0438\u0438 : ").concat(old(age, gender))];
var a = alert("".concat(result));

function yourGender() {
  if (gender == true) {
    return 'мужской';
  } else {
    return 'женский';
  }
}

function old() {
  if (age < 62 && gender == true) {
    return 'нет';
  } else if (age < 57 && gender == false) {
    return 'нет';
  } else {
    return 'да';
  }
}