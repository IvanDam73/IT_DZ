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
do{
    var first  = prompt('Введите название напитка', '');
}while(!first);

do{
    var second =    prompt('Алкогольный он?', '');
}while(!second);

do{
    var third = prompt('Как он готовиться?', '');
}while(!third);
 
var g = {'напиток': first, 'алкогольный': second, 'Рецепт приготовления': third};
console.log(g);
}




// function drinkInfo(){
// let info = prompt('Введите название напитка', '');
//     if(info == ){
//         alert();
//     }else{
//         alert('Такого напитка нет!');
//     }
// }

