'use strict';

/**************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 **************************************************************************************************/


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
    if(num%3 == 0 && num%5 == 0){
        return 'FizzBuzz';
    }else if(num%3 == 0){
         return 'Fizz';
    }else if(num%5 == 0){
        return 'Buzz';
    }else{
        return num;
    }
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
    if(n == 1){
        return 1;
    }
    while(n>=1){
        return n*getFactorial(n-1);
    }
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
    let sum = n1;
    let count = n1;
    while(count != n2){
        sum += count+1;
        count += 1;
    }
    return sum;
}


/**
 * Returns true, if a triangle can be built with the specified sides a,b,c and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a,b,c) {
    if((a<(b+c)) && (b<(a+c)) && (c<(a+b))){
        return true;
    }else{
        return false;
    }
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object 
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 * 
 *  (5;5)
 *     -------------  
 *     |           | 
 *     |           |  height = 10
 *     ------------- 
 *        width=20    
 * 
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 * 
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 * 
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *  
 */
function doRectanglesOverlap(rect1, rect2) {
    let h = rect1.top+rect1.height;
    let w = rect1.left+rect1.width;

    if(h > rect2.top && w > rect2.left){
        return true;
    }else{
        return false;
    }
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of 
 *  {
 *     center: {
 *       x: 5,       
 *       y: 5
 *     },        
 *     radius: 20
 *  }
 * 
 * Point is object of 
 *  {
 *     x: 5,
 *     y: 5
 *  }
 * 
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *   
 */
function isInsideCircle(circle, point) {
    let xCenter = circle.center.x;
    let yCenter = circle.center.y;
    let radius = circle.radius;
    let xPoint = point.x;
    let yPoint = point.y;
    if(Math.pow(radius,2)>(Math.pow((xPoint-xCenter),2)+Math.pow((yPoint-yCenter),2))){
        return true;
    }else{
        return false;
    }
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
    let argSTR = str.match(/[^\W]/g);
    let clone = Array.from(argSTR);
    let count = 0;
    let argRez = [];
    for(let i=0; i<argSTR.length; i++){
        for(let j=0; j<clone.length; j++){
            if(argSTR[i] == clone[j]){
                count += 1;
            }
        }
        if(count == 1){
            argRez.push(argSTR[i]);
        }
        count = 0;
    }
    if(argRez.length == 0){
        return null;
    }else{
        return argRez[0];
    }
}


/**
 * Returns the string representation of math interval, specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
    if(a < b){
        if(isStartIncluded == true && isEndIncluded == true){
            return `[${a}, ${b}]`;
        }
        if(isStartIncluded == true && isEndIncluded == false){
            return `[${a}, ${b})`;
        }
        if(isStartIncluded == false && isEndIncluded == true){
            return `(${a}, ${b}]`;
        }
        if(isStartIncluded == false && isEndIncluded == false){
            return `(${a}, ${b})`;
        }
    }
    if(a > b){
        if(isStartIncluded == true && isEndIncluded == true){
            return `[${b}, ${a}]`;
        }
        if(isStartIncluded == true && isEndIncluded == false){
            return `[${b}, ${a})`;
        }
        if(isStartIncluded == false && isEndIncluded == true){
            return `(${b}, ${a}]`;
        }
        if(isStartIncluded == false && isEndIncluded == false){
            return `(${b}, ${a})`;
        }
    }
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
    let argSTR = str.match(/[^\d]/g);
    argSTR = argSTR.reverse();
    let i = argSTR.join('');
    return i;
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
    let str = num.toString();
    let argSTR = str.match(/[\w]/g);
    argSTR = argSTR.reverse();
    let i = argSTR.join('');
    return Number(i); 
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
   /* console.log(ccn);
    let str = ccn.toString();
    let ccnStr = str.match(/[\w]/g);
    ccnStr = ccnStr.map((str)=>Number(str));
    let bull = Array.from(ccnStr);
    console.log(ccnStr);
    let lenCCN = ccnStr.length;
    console.log(lenCCN);
    if(lenCCN%2 != 0){
        for(let i=1; i<lenCCN-1; i+=2){
            let bull = ccnStr[i]*2;
            if(bull > 9){
                ccnStr[i] = bull - 9;
            }else{
                ccnStr[i] = bull
            }
            
        }        
        console.log(ccnStr);
        let sum = ccnStr.reduce(function(all, val){
            return all+val;
        });
        console.log(sum);
        if(sum%10 == 0){
            console.log('true');
            console.log('========================');
            return true;
        }else{
            console.log('false');
            console.log('========================');
            return false;
        }
    }
    if(lenCCN%2 == 0){
        for(let i=1; i<lenCCN; i+=2){
            let bull = ccnStr[i]*2;
            if(bull > 9){
                ccnStr[i] = bull - 9;
            }else{
                ccnStr[i] = bull
            }
            
        }        
        console.log(ccnStr);
        let sum = ccnStr.reduce(function(all, val){
            return all+val;
        });
        console.log(sum);
        let strEdenic = sum.toString().match(/[\w]/g);        
        strEdenic = strEdenic.map((str)=>Number(str));
        console.log(strEdenic);
        let edinica = strEdenic[strEdenic.length-1];
        console.log(edinica);
        let x = 0;
        if(edinica == 0){
            x = 0;
        }else{
            x = 10 - edinica;
        }
        console.log(x);
        console.log(bull);

        for(let i=1; i<bull.length; i+=2){
            let bullArr = bull[i]*2;
            if(bullArr > 9){
                bull[i] = bullArr - 9;
            }else{
                bull[i] = bullArr;
            }            
        }        
        console.log(bull);
        let sum2 = bull.reduce(function(all, val){
            return all+val;
        });
        console.log(sum2);
        if((sum2+x)%10 == 0){
            console.log('true');
            console.log('========================');
            return true;
        }else{
            console.log('false');
            console.log('========================');
            return false;
        }
     /*   ccnStr.push(x);
        console.log(ccnStr);

      /*  for(let i=1; i<ccnStr.length-1; i+=2){
            let bull = ccnStr[i]*2;
            if(bull > 9){
                ccnStr[i] = bull - 9;
            }else{
                ccnStr[i] = bull
            }
            
        }        
        console.log(ccnStr);
        let sum2 = ccnStr.reduce(function(all, val){
            return all+val;
        });
        console.log(sum2);
       /* if(sum%10 == 0){
            console.log('true');
            console.log('========================');
            return true;
        }else{
            console.log('false');
            console.log('========================');
            return false;
        }*/
        /*let secret = sum*9;
        let secretStr = secret.toString();
        let x = (secretStr.match(/[\w]/g)).length;
        console.log(x);
        if((sum+x)%10 == 0){
            console.log('true');
            console.log('========================');
            return true;
        }else{
            console.log('false');
            console.log('========================');
            return false;
        }*/
   /* }*/
 throw new Error('Not implemented');
}


/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
    let str = num.toString();    
    let argStr = str.match(/[\w]/g);
    argStr = argStr.map((str)=>Number(str));
    let sum = argStr.reduce(function(all, val){
            return all+val;
        });
    let forIf = sum.toString();
    let bull = forIf.match(/[\w]/g);
    if(bull.length > 1){
        return getDigitalRoot(sum);
    }else{
        return sum;
    }

}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true 
 */
function isBracketsBalanced(str) {
    //throw new Error('Not implemented');
    //console.log(str);
   /* if(str == ''){
        return true;
    }
    //let argStr = str.match(/[^\w]/g);
    let str2 = '{[(<{[]}>)]}';
    let argStr = str2.match(/[^\w]/g);
    console.log(argStr);
    console.log('len - '+argStr.length);

    if(argStr.length%2 != 0){
        return false;
    }

   /* let contL_kvadr = 0;
    let contR_kvadr = 0;
    let firstIndex_Lkvadrat = 0;
    let firstIndex_Rkvadrat = 0;

    let contL_fig = 0;
    let contR_fig = 0;
    let firstIndex_Lfig = 0;
    let firstIndex_Rfig = 0;

    let contL_circl = 0;
    let contR_circl = 0;
    let firstIndex_Lcircl = 0;
    let firstIndex_Rcircl = 0;

    let contL_ygol = 0;
    let contR_ygol = 0;
    let firstIndex_Lygol = 0;
    let firstIndex_Rygol = 0;*/

  //  console.log('----------------------------------------');
    //while(argStr.length == 0 || )

  /*  let contL_kvadr = 0;

    function kvadrat(mass){
        for(let i=0; i<mass.length; i++){
            if(mass[i] == '[' && mass[i+1] == ']'){              
                let lol = mass.splice(i,2);
                return kvadrat(mass);
            }else {
                return mass;
            }
        }
        
    }

   // kvadrat(argStr);
    for(let i=0; i<argStr.length; i++){
        if(argStr[i] == '['){
            contL_kvadr += 1;
        }
    }
    console.log('count *[* - '+contL_kvadr);
    let c = 0;
    while(c < contL_kvadr){
        kvadrat(argStr);
        c += 1;
    }
    console.log(argStr);
    //console.log(argStr);

    /*if(argStr.length > 0){

       /* let bull = argStr.map(function(str){
            
            if(str == '['){
                contL_kvadr += 1;
            }
            if(str == ']'){
                contR_kvadr += 1;
            }
        });*/

      /*  for(let i=0; i<argStr.length; i++){
            let leftIndex = 0;
            let rightIndex = 0;
            if(argStr[i] == '['){
                leftIndex = i;
            }else if(argStr[i] == ']'){
                rightIndex = i;
            }
        }

        firstIndex_Lkvadrat = argStr.indexOf('[');
        firstIndex_Rkvadrat = argStr.indexOf(']');
        console.log('count *[* - '+contL_kvadr);
        console.log('count *]* - '+contR_kvadr);
        console.log('first index *[* - '+firstIndex_Lkvadrat);
        console.log('first index *]* - '+firstIndex_Rkvadrat);
        console.log('==========================================');*/

        /*if(firstIndex_Lkvadrat <= firstIndex_Rkvadrat && contL_kvadr == contR_kvadr){
            
            let bull2 = argStr.map(function(str){
                if(str == '{'){
                    contL_fig += 1;
                }
                if(str == '}'){
                    contR_fig += 1;
                }
            });

            firstIndex_Lfig = argStr.indexOf('{');
            firstIndex_Rfig = argStr.indexOf('}');
            console.log('count *{* - '+contL_fig);
            console.log('count *}* - '+contR_fig);
            console.log('first index *{* - '+firstIndex_Lfig);
            console.log('first index *}* - '+firstIndex_Rfig);
            console.log('==========================================');

            if(firstIndex_Lfig <= firstIndex_Rfig && contL_fig == contR_fig){

                let bull3 = argStr.map(function(str){
                    if(str == '('){
                        contL_circl += 1;
                    }
                    if(str == ')'){
                        contR_circl += 1;
                    }
                });

                firstIndex_Lcircl = argStr.indexOf('(');
                firstIndex_Rcircl = argStr.indexOf(')');
                console.log('count *(* - '+contL_circl);
                console.log('count *)* - '+contR_circl);
                console.log('first index *(* - '+firstIndex_Lcircl);
                console.log('first index *)* - '+firstIndex_Rcircl);
                console.log('==========================================');

                if(firstIndex_Lcircl <= firstIndex_Rcircl && contL_circl == contR_circl){

                    let bull4 = argStr.map(function(str){
                        if(str == '<'){
                            contL_ygol += 1;
                        }
                        if(str == '>'){
                            contR_ygol += 1;
                        }
                    });

                    firstIndex_Lygol = argStr.indexOf('<');
                    firstIndex_Rygol = argStr.indexOf('>');
                    console.log('count *<* - '+contL_ygol);
                    console.log('count *>* - '+contR_ygol);
                    console.log('first index *<* - '+firstIndex_Lygol);
                    console.log('first index *>* - '+firstIndex_Rygol);
                    console.log('==========================================');

                    return true;

                }else{
                    return false;
                }

            }else{
                return false;
            }

        }else{
            return false;
        }*/
   /* }*/
    throw new Error('Not implemented');
}


/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the folliwing rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
function timespanToHumanString(startDate, endDate) {
    let millsec = endDate - startDate;
    if(millsec > 0 && millsec <= 45000){
        return 'a few seconds ago';
    }
    if(millsec > 45000 && millsec <= 90000){
        return 'a minute ago';
    }
    if(millsec > 90000 && millsec <= 120000){
        return '2 minutes ago';
    }
    if(millsec > 120000 && millsec <= 2.7e+6){
        let min = Math.trunc((millsec/1000)/60);
        return `${min} minutes ago`;
    }
    if(millsec > 2.7e+6 && millsec <= 5.4e+6){
        return `an hour ago`;
    }
    if(millsec > 5.4e+6 && millsec <= 7.2e+6){
        return `2 hours ago`;
    }
    if(millsec > 7.2e+6 && millsec <= 16200000){
        let hours = Math.trunc(((millsec/1000)/60)/60);
        return `${hours} hours ago`;
    }
    if(millsec == 16200001){
        return `5 hours ago`;
    }
    if(millsec > 16200001 && millsec <= 7.92e+7){
        let hours = Math.trunc(((millsec/1000)/60)/60);
        console.log(hours);
        return `${hours} hours ago`;
    }
    if(millsec > 7.92e+7 && millsec <= 1.296e+8){
        return `a day ago`;
    }
    if(millsec > 1.296e+8 && millsec <= 1.728e+8){
        return `2 days ago`;
    }
    if(millsec > 1.728e+8 && millsec <= 2160000000){
        let days = Math.trunc((((millsec/1000)/60)/60)/24);
        return `${days} days ago`;
    }
    if(millsec == 2160000001){
        return `a month ago`;
    }
    if(millsec > 2160000001 && millsec <= 3.888e+9){
        return `a month ago`;
    }
    if(millsec > 3.888e+9 && millsec <= 5.184e+9){    
        return `2 months ago`;
    }
    if(millsec > 5.184e+9 && millsec <= 2.981e+10){    
        let month = Math.round(((((millsec/1000)/60)/60)/24)/30);
        return `${month} months ago`;
    }
    if(millsec > 2.981e+10 && millsec <= 4.709e+10){    
        return `a year ago`;
    }
    if(millsec > 4.709e+10 && millsec <= 6.307e+10){    
        return `2 years ago`;
    }
    if(millsec > 6.307e+10){    
        let year = Math.round((((((millsec/1000)/60)/60)/24)/30)/12);
        return `${year} years ago`;
    }

}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n<=10) representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {

    const for2 = '01';
    const for3 = '012';
    const for4 = '0123';
    const for5 = '01234';
    const for6 = '012345';
    const for7 = '0123456';
    const for8 = '01234567';
    const for9 = '012345678';

    let rez = '';

    let mas;

    function StrReverse(s){
      return s.split("").reverse().join("");
     }

    if(n == 2){
        mas = for2.slice(0,n);
    }
    if(n == 3){
        mas = for3.slice(0,n);
    }
    if(n == 4){
        mas = for4.slice(0,n);
    }
    if(n == 5){
        mas = for5.slice(0,n);
    }
    if(n == 6){
        mas = for6.slice(0,n);
    }
    if(n == 7){
        mas = for7.slice(0,n);
    }
    if(n == 8){
        mas = for8.slice(0,n);
    }
    if(n == 9){
        mas = for9.slice(0,n);
    }
    if(n == 10){
       return num;
    }

    while(num > 0){
      rez = String(rez) + mas[num%n];
      num = Math.floor(num/n);
    }
    return StrReverse(rez);
}


/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
    let arg = pathes.map(function(val){
        return val.split('/');
    });
    let sravn = Array.from(arg[0]);
    sravn.shift();
    sravn.unshift('/');
    sravn = sravn.map(function(str){
        if(str == '/'){
            return str;
        }else{
            return str+'/';
        }
    });
    let strbool = '';
    for(let i=0; i<sravn.length; i++){
        let cont = 0;
        for(let j=0; j<pathes.length; j++){
            if(i == 0){
                if(pathes[j].charAt(0) == '/'){
                    cont += 1;
                }
            }
            if(pathes[j].includes(sravn[i])==true && i>0){
                cont += 1;
            }        
        }
        if(cont == pathes.length){
            strbool += sravn[i];
        }
    }
    return strbool;
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {

    let rowsM1 = m1.length;
    let colsM1 = m1[0].length;
    let rowsM2 = m2.length;
    let colsM2 = m2[0].length;
    let rezMatrica = [];

    if(colsM1 != rowsM2){
        return false;
    } 
    for(let i = 0; i < rowsM1; i++){
       rezMatrica[i] = []; 
    } 
    for (let k = 0; k < colsM2; k++){
         for (let i = 0; i < rowsM1; i++){
            let t = 0;
            for (let j = 0; j < rowsM2; j++){
                t += m1[i][j]*m2[j][k];
                 rezMatrica[i][k] = t;
            }
         }
    } 
    return rezMatrica;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
    if((position[0][0] == 'X' && position[0][1] == 'X' && position[0][2] == 'X')||
        (position[1][0] == 'X' && position[1][1] == 'X' && position[1][2] == 'X')||
        (position[2][0] == 'X' && position[2][1] == 'X' && position[2][2] == 'X')||
        (position[0][0] == 'X' && position[1][0] == 'X' && position[2][0] == 'X')||
        (position[0][1] == 'X' && position[1][1] == 'X' && position[2][1] == 'X')||
        (position[0][2] == 'X' && position[1][2] == 'X' && position[2][2] == 'X')||
        (position[0][0] == 'X' && position[1][1] == 'X' && position[2][2] == 'X')||
        (position[0][2] == 'X' && position[1][1] == 'X' && position[2][0] == 'X')){
        return 'X';
    }
    if((position[0][0] == '0' && position[0][1] == '0' && position[0][2] == '0')||
        (position[1][0] == '0' && position[1][1] == '0' && position[1][2] == '0')||
        (position[2][0] == '0' && position[2][1] == '0' && position[2][2] == '0')||
        (position[0][0] == '0' && position[1][0] == '0' && position[2][0] == '0')||
        (position[0][1] == '0' && position[1][1] == '0' && position[2][1] == '0')||
        (position[0][2] == '0' && position[1][2] == '0' && position[2][2] == '0')||
        (position[0][0] == '0' && position[1][1] == '0' && position[2][2] == '0')||
        (position[0][2] == '0' && position[1][1] == '0' && position[2][0] == '0')){
        return '0';
    }
}


module.exports = {
    getFizzBuzz: getFizzBuzz,
    getFactorial: getFactorial,
    getSumBetweenNumbers: getSumBetweenNumbers,
    isTriangle: isTriangle,
    doRectanglesOverlap: doRectanglesOverlap,
    isInsideCircle: isInsideCircle,
    findFirstSingleChar: findFirstSingleChar,
    getIntervalString : getIntervalString,
    reverseString: reverseString,
    reverseInteger: reverseInteger,
    isCreditCardNumber: isCreditCardNumber,
    getDigitalRoot: getDigitalRoot,
    isBracketsBalanced: isBracketsBalanced,
    timespanToHumanString : timespanToHumanString,
    toNaryString: toNaryString,
    getCommonDirectoryPath: getCommonDirectoryPath,
    getMatrixProduct: getMatrixProduct,
    evaluateTicTacToePosition : evaluateTicTacToePosition
};
