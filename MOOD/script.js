"use strict"

function HashStorageFunc(key, ...args) {
    this.value=args;
    this.key=key;
    let myHash = {};


    HashStorageFunc.prototype.addValue = function(key, value){
        return (myHash[key]=value);
    };

    HashStorageFunc.prototype.getValue = function(key){
        if(myHash[key]){
            return myHash.value;
        }else{
            return undefined;
        }
    };

    HashStorageFunc.prototype.deleteValue = function(key){
        if(!myHash[key]){
            return false;
        }else{
            delete myHash.value;
        }
    };

    HashStorageFunc.prototype.getKeys = function(){
        return Object.keys(myHash);
    };
    
    return myHash;
} 



let drinkStorage = new HashStorageFunc('Маргарита', 'Алкогольный', 'продукт, продукт... смешать...');


function enterInfo(){
prompt('Введите название напитка', '');
prompt('Алкогольный он?', '');
prompt('Как он готовиться?', '');
}



