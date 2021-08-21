"use strict"

function HashStorageFunc() {
    let myHash = {};

    this.addValue = function(key, value){
        return (myHash[key]=value);
    };

    this.getValue = function(key){
        if(myHash[key]){
            return myHash[key];
        }else{
            return undefined;
        }
    };

    this.deleteValue = function(key){
        if(!myHash[key]){
            return false;
        }else{
            delete myHash.key;
        }
    };

    this.getKeys = function(){
        return Object.keys(myHash);
    };
    
    return myHash;
} 

let drinkStorage = new HashStorageFunc();


function enterInfo(){
var g = {};

do{
    var first  = prompt('Введите название напитка', '');
}while(!first);


do{
    var second =    prompt('Алкогольный он?', '');
}while(!second);

g['Алкоголь'] = second;

do{
    var third = prompt('Как он готовиться?', '');
}while(!third);

g['Рецепт приготовления'] = third;
 
console.log(g);
}




function drinkInfo(){
let info = prompt('Введите название напитка', '');
    if(info in g){
        alert(drinkStorage.getKeys);
    }else{
        alert('Такого напитка нет!');
    }
    return;
}


function deleteInfo(){
    let del = prompt('Какой напиток удалить?', '');
    if(del == info){   
        drinkStorage.deleteValue;
        alert('Напиток удалён!');
    }else{
        alert('Напиток не найден!');
    }
    return;
}


function allDrinks(){
    return drinkStorage.getKeys;
}