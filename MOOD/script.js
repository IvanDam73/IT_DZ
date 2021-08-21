"use strict"

function HashStorageFunc() {
    var myHash = {};

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

var drinkStorage = new HashStorageFunc();


function enterInfo(){         //функция-хранилище, которая сохраняет введённые данные, и отдает другим функциям-кнопкам
var g = {};

do{
    var first  = prompt('Введите название напитка', '');
}while(!first);

g['Напиток'] = first;

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




function drinkInfo(){   //эта функция принимает название напитка и сравнивает его с имеющимся в хранилище(первая функция)
do{
    var info = prompt('Введите название напитка', '');
}while(!info);
    if(info in g){
        alert(drinkStorage.getKeys);
    }else{
        alert('Такого напитка нет!');
    }
    return;
}


function deleteInfo(){    //эта удаляет по той же схеме, что и придыдущая ищет
do{
    var del = prompt('Какой напиток удалить?', '');
}while(!del);
    if(del in g){   
        delete g[del];
        alert('Напиток удалён!');
    }else{
        alert('Напиток не найден!');
    }
    return;
}


function allDrinks(){   //эта отдает массив ключей хранилища
    return Object.keys(g);
}