"use strict"

function HashStorageFunc() {
    this.myHash = {};

    this.addValue = function(key, value){
        this.myHash[key]=value;
    };

    this.getValue = function(key){
        return this.myHash[key];
    };

    this.deleteValue = function(key){
        return delete this.myHash[key];
    };

    this.getKeys = function(){
        return Object.keys(this.myHash);
    };
    
} 

var drinkStorage = new HashStorageFunc();


function enterInfo(){         
do{
    var first  = prompt('Введите название напитка', '');
}while(!first);

var second =    confirm('Алкогольный он?');

if(second === true){
    second = 'Да';
}else{
    second = 'Нет';
}

do{
    var third = prompt('Как он готовиться?', '');
}while(!third);

drinkStorage.addValue(first, {alcohol:second, recipe:third});

}




function drinkInfo(){   
do{
    var info = prompt('Введите название напитка', '');
}while(!info);

drinkStorage.getValue(info);
var prop1  = drinkStorage.myHash[info].recipe;   
var prop2  = drinkStorage.myHash[info].alcohol;

if(info in drinkStorage.myHash){
    alert(`    Напиток: ${info}
    Алкогольный: ${prop2}
    Рецепт приготовления: ${prop1}`);      
}else{                                          //ошибка при else!   Cannot read property 'recipe' of undefined
    alert('такого напитка нет!');
}
}


function deleteInfo(){
do{
    var del = prompt('Какой напиток удалить?', '');
}while(!del);

if(del in drinkStorage.myHash){
    drinkStorage.deleteValue(del);
    alert('Напиток удалён!');
}
    console.log(drinkStorage);
}


function allDrinks(){ 
     alert(Object.keys(drinkStorage.myHash));
}