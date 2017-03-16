'use strict';

/*********************************************************************************************
 *                                                                                           *
 * Plese read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array    *
 *                                                                                           *
 * NOTE : Please do not use loops! All tasks can be implmeneted using standard Array methods *
 *                                                                                           *
 *********************************************************************************************/

 
/**
 * Returns an index of the specified element in array or -1 if element is not found
 * 
 * @param {array} arr
 * @param {any} value
 * @return {number}
 * 
 * @example
 *    ['Ace', 10, true], 10    => 1 
 *    ['Array', 'Number', 'string'], 'Date'    => -1 
 *    [0, 1, 2, 3, 4, 5], 5    => 5
 */
function findElement(arr, value) {
   if(arr.includes(value) == true){
      return arr.indexOf(value);
   }else{
    return -1;
   }
}

/**
 * Generates an array of odd numbers of the specified length
 * 
 * @param {number} len
 * @return {array}
 * 
 * @example
 *    1 => [ 1 ] 
 *    2 => [ 1, 3 ] 
 *    5 => [ 1, 3, 5, 7, 9 ]
 */
function generateOdds(len) {
   let arr = new Array(len);
   arr.fill(1);
   let cont = -2;
   let rez = 0;
   let rezArr = arr.map(function(num) {
    cont += 2;    
    return num + cont;
   });

   return rezArr;
}


/**
 * Returns the doubled array - elements of the specified array are repeated twice using original order
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    ['Ace', 10, true]  => ['Ace', 10, true,   'Ace', 10, true]  
 *    [0, 1, 2, 3, 4, 5] => [0, 1, 2, 3, 4, 5,   0, 1, 2, 3, 4, 5]
 *    [] => [] 
 */
function doubleArray(arr) {
   let arr1 = Array.from(arr);
   let rez = arr1.concat(arr);
   return rez;
}


/**
 * Returns an array of positive numbers from the specified array in original order
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ 0, 1, 2, 3, 4, 5 ] => [ 1, 2, 3, 4, 5 ]
 *    [-1, 2, -5, -4, 0] => [ 2 ]
 *    [] => [] 
 */
function getArrayOfPositives(arr) {
   let rezArr = arr.filter(function(num){
      if(num > 0){
        return num;
      }
   });
   return rezArr;
}

/**
 * Returns the array with strings only in the specified array (in original order)
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ 0, 1, 'cat', 3, true, 'dog' ] => [ 'cat', 'dog' ]
 *    [ 1, 2, 3, 4, 5 ] => []
 *    [ 'cat, 'dog', 'raccon' ] => [ 'cat', 'dog', 'racoon' ]
 */
function getArrayOfStrings(arr) {
   let rezArr = arr.filter(function(num){
      if(typeof(num) == 'string'){
        return num;
      }
   });
   return rezArr;
}

/**
 * Removes falsy values from the specified array
 * Falsy values: false, null, 0, "", undefined, and NaN.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#Description)
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ 0, false, 'cat', NaN, true, '' ] => [ 'cat', true ]
 *    [ 1, 2, 3, 4, 5, 'false' ]         => [ 1, 2, 3, 4, 5, 'false' ]
 *    [ false, 0, NaN, '', undefined ]   => [ ]
 */
function removeFalsyValues(arr) {
   let rezArr = arr.filter(function(num){
      if(num != null && num != undefined && num != 0 && num != false && num != NaN && num != ''){
        return num;
      }
   });
   return rezArr;
}

/**
 * Returns the array of useprcase strings from the specified array
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ 'permanent-internship', 'glutinous-shriek', 'multiplicative-elevation' ] => [ 'PERMANENT-INTERNSHIP', 'GLUTINOUS-SHRIEK', 'MULTIPLICATIVE-ELEVATION' ]
 *    [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]  => [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
 */
function getUpperCaseStrings(arr) {
   let rezArr = arr.map(function(str){
    return str.toUpperCase();
   });
   return rezArr;
}


/**
 * Returns the array of string lengths from the specified string array.
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ '', 'a', 'bc', 'def', 'ghij' ]  => [ 0, 1, 2, 3, 4 ]
 *    [ 'angular', 'react', 'ember' ] => [ 7, 5, 5 ]
 */
function getStringsLength(arr) {
   let rezArr = arr.map(function(str){
    return str.length;
   });
   return rezArr;
}

/**
 * Inserts the item into specified array at specified index
 * 
 * @param {array} arr
 * @param {any} item
 * @param {number} index 
 * 
 * @example
 *    [ 1, 3, 4, 5 ], 2, 1  => [ 1, 2, 3, 4, 5 ]
 *    [ 1, 'b', 'c'], 0, 'x'  => [ 'x', 1, 'b', 'c' ]
 */
function insertItem(arr, item, index) {
   return arr.splice(index, 0, item);
}

/**
 * Returns the n first items of the specified array
 * 
 * @param {array} arr
 * @param {number} n 
 * 
 * @example
 *    [ 1, 3, 4, 5 ], 2  => [ 1, 2 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'a', 'b', 'c' ]
 */
function getHead(arr, n) {
   let remove = arr.splice(0, n);
   return remove;
}


/**
 * Returns the n last items of the specified array
 * 
 * @param {array} arr
 * @param {number} n 
 * 
 * @example
 *    [ 1, 3, 4, 5 ], 2  => [ 4, 5 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'b', 'c', 'd' ]
 */
function getTail(arr, n) {
   let remove = arr.splice(arr.length-n, n);
   return remove;
}


/**
 * Returns CSV represebtation of two-dimentional numeric array.
 * https://en.wikipedia.org/wiki/Comma-separated_values
 * 
 * @param {array} arr
 * @return {string}
 * 
 * @example
 *    [
 *       [  0, 1, 2, 3, 4 ],
 *       [ 10,11,12,13,14 ],
 *       [ 20,21,22,23,24 ],
 *       [ 30,31,32,33,34 ]
 *    ] 
 *           => 
 *     '0,1,2,3,4\n'
 *    +'10,11,12,13,14\n'
 *    +'20,21,22,23,24\n'
 *    +'30,31,32,33,34'
 */
function toCsvText(arr) {
   let bullArr = arr.map(function(str){
    return str.toString();
   });
   let rez = bullArr.reduce(function(previousValue, currentValue){
      return previousValue + '\n' + currentValue;
   });
  return rez;
}

/**
 * Transforms the numeric array into the according array of squares:
 *   f(x) = x * x
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *   [ 0, 1, 2, 3, 4, 5 ] => [ 0, 1, 4, 9, 16, 25 ]
 *   [ 10, 100, -1 ]      => [ 100, 10000, 1 ]
 */
function toArrayOfSquares(arr) {
   let rezArr = arr.map((num)=>num*num);
   return rezArr;
}


/**
 * Transforms the numeric array to the according moving sum array:
 *     f[n] = x[0] + x[1] + x[2] +...+ x[n] 
 *  or f[n] = f[n-1] + x[n]
 * 
 * @param {array} arr
 * @return {array}
 * 
 * Example :
 *   [ 1, 1, 1, 1, 1 ]        => [ 1, 2, 3, 4, 5 ]
 *   [ 10, -10, 10, -10, 10 ] => [ 10, 0, 10, 0, 10 ]
 *   [ 0, 0, 0, 0, 0]         => [ 0, 0, 0, 0, 0] 
 *   [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]
 */
function getMovingSum(arr) {
   let sum = 0;
   let rezArr = arr.map(function(num){
    sum += num;
    return sum;
   });
   return rezArr;
}

/**
 * Returns every second item from the specified array:
 * 
 * @param {array} arr
 * @return {array}
 * 
 * Example :
 * [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 2, 4, 6, 8, 10 ]
 * [ 'a', 'b', 'c' , null ]  => [ "b", null ]
 * [ "a" ] => []
 */
function getSecondItems(arr) {
   let cont = 0;
   let rezArg = [];
   let arrBull = arr.map(function(val){
    if((cont+1)%2 == 0){
      rezArg.push(val);
    }
    cont +=1;
   });
   return rezArg;
}


/**
 * Propagates every item in sequence its position times
 * Returns an array that consists of: one first item, two second items, tree third items etc. 
 * 
 * @param {array} arr 
 * @return {array}
 * 
 * @example :
 *  [] => []
 *  [ 1 ] => [ 1 ]
 *  [ 'a', 'b' ] => [ 'a', 'b','b' ]
 *  [ 'a', 'b', 'c', null ] => [ 'a', 'b','b', 'c','c','c',  null,null,null,null ]
 *  [ 1,2,3,4,5 ] => [ 1, 2,2, 3,3,3, 4,4,4,4, 5,5,5,5,5 ]
 */
function propagateItemsByPositionIndex(arr) {
   let cont = 0;
   let rez = [];
   let bull = arr.map(function(val){
    let much = new Array(cont+1);
    much.fill(val);
    rez = rez.concat(much);
    cont += 1;
   });
   return rez;
}


/** 
 * Returns the 3 largest numbers from the specified array
 * 
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [] => []
 *   [ 1, 2 ] => [ 2, 1 ]
 *   [ 1, 2, 3 ] => [ 3, 2, 1 ]
 *   [ 1,2,3,4,5,6,7,8,9,10 ] => [ 10, 9, 8 ]
 *   [ 10, 10, 10, 10 ] => [ 10, 10, 10 ]
 */
function get3TopItems(arr) {
   if(arr.length == 0 || arr.length == 1){
    return arr;
   }
   if(arr.length == 2){
    let rez = [];
    let first = Math.max.apply(null, arr);
    let index = arr.lastIndexOf(first);
    let bull = arr.splice(index, 1);
    rez = rez.concat(bull);
    rez = rez.concat(arr);
    return rez;
   }
   if(arr.length > 2){
    let rez = [];

    let first = Math.max.apply(null, arr);
    let index = arr.lastIndexOf(first);
    let bull = arr.splice(index, 1);
    rez = rez.concat(bull);    

    let second = Math.max.apply(null, arr);
    let index2 = arr.lastIndexOf(second);
    let bull2 = arr.splice(index2, 1);
    rez = rez.concat(bull2);    

    let third = Math.max.apply(null, arr);
    let index3 = arr.lastIndexOf(third);
    let bull3 = arr.splice(index3, 1);
    rez = rez.concat(bull3);    

    return rez;
   }
}
 
 
/**  
 * Returns the number of positive numbers from specified array
 * 
 * @param {array} arr
 * @return {number}
 * 
 * @example
 *   [ ]          => 0
 *   [ -1, 0, 1 ] => 1
 *   [ 1, 2, 3]   => 3
 *   [ null, 1, 'elephant' ] => 1
 */
function getPositivesCount(arr) {
   if(arr.length == 0){
    return 0;
   }
   let rezArr = arr.filter(function(num){
      if(typeof(num) == 'number' && num > 0){
        return num;
      }      
   });
   return (rezArr.length);
}
 
/** 
 * Sorts digit names
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *   [] => []
 *   [ 'nine','one' ]                 => [ 'one', 'nine' ]
 *   [ 'one','two','three' ]          => [ 'one','two', 'three' ]
 *   [ 'nine','eight','nine','eight'] => [ 'eight','eight','nine','nine']
 *   [ 'one','one','one','zero' ]     => [ 'zero','one','one','one' ]
 */
function sortDigitNamesByNumericOrder(arr) {
   if(arr.length == 0){
    return arr;
   }
   let conv = arr.map(function(str){
    if(str == 'zero'){
      return 0;
    }
    if(str == 'one'){
      return 1;
    }
    if(str == 'two'){
      return 2;
    }
    if(str == 'three'){
      return 3;
    }
    if(str == 'four'){
      return 4;
    }
    if(str == 'five'){
      return 5;
    }
    if(str == 'six'){
      return 6;
    }
    if(str == 'seven'){
      return 7;
    }
    if(str == 'eight'){
      return 8;
    }
    if(str == 'nine'){
      return 9;
    }
   });
   conv = conv.sort();
   let rez = conv.map(function(num){
    if(num == 0){
      return 'zero';
    }
    if(num == 1){
      return 'one';
    }
    if(num == 2){
      return 'two';
    }
    if(num == 3){
      return 'three';
    }
    if(num == 4){
      return 'four';
    }
    if(num == 5){
      return 'five';
    }
    if(num == 6){
      return 'six';
    }
    if(num == 7){
      return 'seven';
    }
    if(num == 8){
      return 'eight';
    }
    if(num == 9){
      return 'nine';
    }
   });
   return rez;
}

/** 
 * Returns the sum of all items in the specified array of numbers
 * 
 * @param {array} arr
 * @return {number}
 * 
 * @example
 *   [] => 0
 *   [ 1, 2, 3 ]           => 6
 *   [ -1, 1, -1, 1 ]      => 0
 *   [ 1, 10, 100, 1000 ]  => 1111
 */
function getItemsSum(arr) {
   if(arr.length == 0){
    return 0;
   }
   let rez = arr.reduce(function(all, valInd){
    return all+valInd;
   });
   return rez;
}
 
/** 
 * Returns the number of all falsy value in the specified array
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *  [] => 0
 *  [ 1, '', 3 ] => 1
 *  [ -1, 'false', null, 0 ] => 2
 *  [ null, undefined, NaN, false, 0, '' ]  => 6
 */
function getFalsyValuesCount(arr) {
   let cont = 0;
   if(arr.length == 0){
    return 0;
   }
   let rezArr = arr.filter(function(num){
    if(!num){
      cont += 1;
    }
   });
   return cont;
}

/**
 * Returns a number of all occurences of the specified item in an array  
 * 
 * @param {array} arr
 * @param {any} item 
 * @return {number}
 * 
 * @example
 *    [ 0, 0, 1, 1, 1, 2 ], 1 => 3
 *    [ 1, 2, 3, 4, 5 ], 0 => 0
 *    [ 'a','b','c','c' ], 'c'=> 2
 *    [ null, undefined, null ], null => 2 
 *    [ true, 0, 1, 'true' ], true => 1
 */
function findAllOccurences(arr, item) {
   let cont = 0;
   if(arr.length == 0){
    return arr;
   }
   let rez = arr.filter(function(val){
    if(val === item){
      cont += 1;
    }
   });
   return cont;
}

/**
 * Concatenates all elements from specified array into single string with ',' delimeter  
 * 
 * @param {array} arr 
 * @return {string}
 * 
 * @example
 *    [0, false, 'cat', NaN, true, '']  => '0,false,cat,NaN,true,'
 *    [1, 2, 3, 4, 5]                   => '1,2,3,4,5'
 *    ['rock', 'paper', 'scissors']     => 'rock,paper,scissors'
 */
function toStringList(arr) {
   return arr.toString();
}


/**
 * Sorts the specified array by country name first and city name (if countries are equal) in ascending order.
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Saint Petersburg' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Belarus', city: 'Brest' }
 *    ]  
 *                      =>
 *    [
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Russia',  city: 'Saint Petersburg' }
 */
function sortCitiesArray(arr) {
   throw new Error('Not implemented');

   /*
   console.log('==========================');
   console.log('input');
   console.log(arr);
   console.log('------------------');

let asc = function (field) { // функция для сортировки в прямом порядке (по возрастанию)
 return function (x, y) {
   if(x[field] >= y[field]){
    return x[field] >= y[field];
   }   
 }
};

/*console.log('step 1');
arr.sort(asc('country'));
console.log(arr);
console.log('------------------');*/



/*
let guf = function (field, field2) { 
 return function (x, y) {
   if(x[field] >= y[field]){
    return x[field2] >= y[field2];
   }
 }
};


console.log('------------------');*/
/*let lol = arr.sort(asc('country')).sort(guf('country', 'city'));

console.log(lol);

return lol;

*/
  
}
/**
 * Creates an indentity matrix of the specified size
 * 
 * @param {number} n
 * @return {array}
 * 
 * @example
 *     1  => [[1]]
 *  
 *     2 => [[1,0],
 *           [0,1]]
 * 
 *          [[1,0,0,0,0],
 *           [0,1,0,0,0],
 *     5 =>  [0,0,1,0,0],
 *           [0,0,0,1,0],
 *           [0,0,0,0,1]]   
 */
function getIdentityMatrix(n) {
  let k = new Array(n);
  k.fill(0);
  let prov = [];
  let count = 0;

  let i = k.map(function(num){
    prov.push(k);
  });

  let x = Array.from(prov);
  let str = ''
  let arg = [];
  let j = prov.map(function(num){
    let lol = 0
    if(count == 0){
      x[count][count] = 1;
    }
    num.map(function(y){        
      if(count>0 && count == lol){
        x[count][count] = 1;
        x[count-1][count-1] = 0;
      }
      lol++;
    });
    count++;
  str += String(num+';');
  });

  let qwe = str.split(';');
  qwe.pop();

  let ror = qwe.map(function(str){
    return str.split(',');
  });

  let asd = ror.map(function(str1){
    return str1.map(function(str2){
      return Number(str2);
    });
  });
  return asd;
}

/**
 * Creates an array of integers from the specified start to end (inclusive)
 * 
 * @param {number} start
 * @param {number} end
 * @return {array}
 * 
 * @example
 *     1, 5  => [ 1, 2, 3, 4, 5 ]
 *    -2, 2  => [ -2, -1, 0, 1, 2 ]
 *     0, 100 => [ 0, 1, 2, ..., 100 ]
 *     3, 3   => [ 3 ]
 */
function getIntervalArray(start, end) {
   let lenArr = end - start + 1;
   let bullArr = new Array(lenArr);
   bullArr.fill(start);
   let plus = -1;
   bullArr = bullArr.map(function(num){
    plus = plus+1;
    return num + (plus);
   });
   return bullArr;
}

/**
 * Returns array containing only unique values from the specified array.
 *
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *   [ 1, 2, 3, 3, 2, 1 ] => [ 1, 2, 3 ]
 *   [ 'a', 'a', 'a', 'a' ]  => [ 'a' ]
 *   [ 1, 1, 2, 2, 3, 3, 4, 4] => [ 1, 2, 3, 4]
 */
function distinct(arr) {
   let rez = arr.filter(function(val, index, arr){
      return arr.indexOf(val) === index;
   });
   return rez;
}

/**
 * Groups elements of the specified array by key.
 * Returns multimap of keys extracted from array elements via keySelector callback
 * and values extracted via valueSelector callback.
 * See: https://en.wikipedia.org/wiki/Multimap
 *
 * @param {array} array
 * @param {Function} keySelector
 * @param {Function} valueSelector
 * @return {Map}
 *
 * @example
 *   group([
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Russia', city: 'Omsk' },
 *      { country: 'Russia', city: 'Samara' },
 *      { country: 'Belarus', city: 'Grodno' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland', city: 'Lodz' }
 *     ], 
 *     item => item.country, 
 *     item => item.city
 *   )
 *            => 
 *   Map {
 *    "Belarus" => ["Brest", "Grodno", "Minsk"],
 *    "Russia" => ["Omsk", "Samara"], 
 *    "Poland" => ["Lodz"]
 *   }
 */
function group(array, keySelector, valueSelector) {
   throw new Error('Not implemented');  
}


/**
 * Projects each element of the specified array to a sequence and flattens the resulting sequences into one array.
 *
 * @param {array} arr
 * @param {Function} childrenSelector, a transform function to apply to each element that returns an array of children
 * @return {array}
 * 
 * @example
 *   [[1, 2], [3, 4], [5, 6]], (x) => x     =>   [ 1, 2, 3, 4, 5, 6 ]
 *   ['one','two','three'], x=>x.split('')  =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */
function selectMany(arr, childrenSelector) {
    let rezArg = [];
    let bullIner = [];
    let funck = arr.map(function(val){
      bullIner = childrenSelector(val);
      rezArg = rezArg.concat(bullIner);
    });
    return rezArg;
}


/**
 * Returns an element from the multidimentional array by the specified indexes.
 *
 * @param {array} arr
 * @param {array} indexes
 * @return {any} element from array
 * 
 * @example
 *   [[1, 2], [3, 4], [5, 6]], [0,0]  => 1        (arr[0][0]) 
 *   ['one','two','three'], [2]       => 'three'  (arr[2]) 
 *   [[[ 1, 2, 3]]], [ 0, 0, 1 ]      => 2        (arr[0][0][1])
 */
function getElementByIndexes(arr, indexes) {
    if(indexes.length == 1){
      return arr[indexes[0]];
    }
    if(indexes.length == 2){
      let bull = arr[indexes[0]];
      let rez = bull[indexes[1]];
      return rez;
    }
    if(indexes.length == 3){
      let bull = arr[indexes[0]];
      let bull2 = bull[indexes[1]];
      let rez = bull2[indexes[2]];
      return rez;
    }
}


/**
 * Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start. 
 * The middle element (if exists) leave on the same position.
 * 
 *  
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/         
 *     head     tail 
 *
 *   [ 1, 2 ]  => [ 2, 1 ] 
 *   [ 1, 2, 3, 4, 5, 6, 7, 8 ]   =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]   
 * 
 */
function swapHeadAndTail(arr) {
    if(arr.length == 1){
      return arr;
    }
    if(arr.length%2 == 0){
      let first = arr.slice(0, arr.length/2);
      let second = arr.slice(arr.length/2, arr.length);
      let rez = second.concat(first);
      return rez;
    }
    if(arr.length%2 != 0){
      let granIndex = (arr.length+1)/2;
      let gran = [];
      gran = gran.concat(arr[granIndex-1]);
      let first = arr.slice(0, granIndex-1);
      let second = arr.slice(granIndex, arr.length);
      let rez = second.concat(gran.concat(first));
      return rez;
    }
}


module.exports = {
    findElement: findElement,
    generateOdds: generateOdds,
    doubleArray: doubleArray,
    getArrayOfPositives: getArrayOfPositives,
    getArrayOfStrings: getArrayOfStrings,
    removeFalsyValues: removeFalsyValues,
    getUpperCaseStrings: getUpperCaseStrings,
    getStringsLength: getStringsLength,
    insertItem: insertItem,
    getHead: getHead,
    getTail: getTail,
    toCsvText: toCsvText,
    toStringList: toStringList,
    toArrayOfSquares: toArrayOfSquares,
    getMovingSum: getMovingSum,
    getSecondItems: getSecondItems,
    propagateItemsByPositionIndex: propagateItemsByPositionIndex,
    get3TopItems: get3TopItems,
    getPositivesCount: getPositivesCount,
    sortDigitNamesByNumericOrder: sortDigitNamesByNumericOrder,
    getItemsSum: getItemsSum,
    getFalsyValuesCount: getFalsyValuesCount,
    findAllOccurences: findAllOccurences,
    sortCitiesArray: sortCitiesArray,
    getIdentityMatrix: getIdentityMatrix,
    getIntervalArray: getIntervalArray,
    distinct: distinct,
    group: group,
    selectMany: selectMany,
    getElementByIndexes: getElementByIndexes,
    swapHeadAndTail: swapHeadAndTail
};
