'use strict';

/********************************************************************************************
 *                                                                                          *
 * Plese read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#Date_object
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date    *
 *                                                                                          *
 ********************************************************************************************/


/**
 * Parses a rfc2822 string date representation into date value
 * For rfc2822 date specification refer to : http://tools.ietf.org/html/rfc2822#page-14
 *
 * @param {string} value
 * @return {date}
 *
 * @example:
 *    'December 17, 1995 03:24:00'    => Date()
 *    'Tue, 26 Jan 2016 13:48:02 GMT' => Date()
 *    'Sun, 17 May 1998 03:00:00 GMT+01' => Date()
 */
function parseDataFromRfc2822(value) {
   let date = new Date(value);
   return date;
}

/**
 * Parses an ISO 8601 string date representation into date value
 * For ISO 8601 date specification refer to : https://en.wikipedia.org/wiki/ISO_8601
 *
 * @param {string} value
 * @return {date}
 *
 * @example :
 *    '2016-01-19T16:07:37+00:00'    => Date()
 *    '2016-01-19T08:07:37Z' => Date()
 */
function parseDataFromIso8601(value) {
   let date = new Date(value);
   return date;
}


/**
 * Returns true if specified date is leap year and false otherwise
 * Please find algorithm here: https://en.wikipedia.org/wiki/Leap_year#Algorithm
 *
 * @param {date} date
 * @return {bool}
 *
 * @example :
 *    Date(1900,1,1)    => false
 *    Date(2000,1,1)    => true
 *    Date(2001,1,1)    => false
 *    Date(2012,1,1)    => true
 *    Date(2015,1,1)    => false
 */
function isLeapYear(date) {
   let year = new Date(date).getFullYear();
   if((year%4 == 0 && year%100 != 0) || (year%400 == 0)){
     return true;
   }else{
    return false;
   }
}


/**
 * Returns the string represention of the timespan between two dates.
 * The format of output string is "HH:mm:ss.sss"
 *
 * @param {date} startDate
 * @param {date} endDate
 * @return {string}
 *
 * @example:
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,11,0,0)   => "01:00:00.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,30,0)       => "00:30:00.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,0,20)        => "00:00:20.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,0,0,250)     => "00:00:00.250"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,15,20,10,453)   => "05:20:10.453"
 */
function timeSpanToString(startDate, endDate) {
   
   let milSecStart = new Date(startDate).getMilliseconds();
   let milSecEnd = new Date(endDate).getMilliseconds();
   let rezMillSec = 0;
   if(milSecStart > milSecEnd){
      rezMillSec = milSecEnd - milSecStart - 999;
   }else {
     rezMillSec = milSecEnd - milSecStart;
     if(rezMillSec == 0){
       rezMillSec = '000';
     }else{
        for(let i=1; i<10; i++){
          if(rezH == i){
            rezH = '00'+rezH;
          }
        }
        for(let i=10; i<99; i++){
          if(rezH == i){
            rezH = '0'+rezH;
          }
        }
        rezMillSec = ''+rezMillSec;
     }
   }
   let SecStart = new Date(startDate).getSeconds();
   let SecEnd = new Date(endDate).getSeconds();     
   let rezSec = 0;
   if(SecStart > SecEnd){
      rezSec = SecEnd - SecStart - 60;
   }else {
     rezSec = SecEnd - SecStart;
     if(rezSec == 0){
       rezSec = '00';
     }else{
        for(let i=1; i<10; i++){
          if(rezH == i){
            rezH = '0'+rezH;
          }
        }
        rezSec = ''+rezSec;
     }
   }
   let MinStart = new Date(startDate).getMinutes();
   let MinEnd = new Date(endDate).getMinutes();     
   let rezMin = 0;
   if(MinStart > MinEnd){
      rezMin = MinEnd - MinStart - 60;
   }else {
     rezMin = MinEnd - MinStart;
     if(rezMin == 0){
       rezMin = '00';
     }else{
        for(let i=1; i<10; i++){
          if(rezH == i){
            rezH = '0'+rezH;
          }
        }
        rezMin = ''+rezMin;
     }
   }
   let HStart = new Date(startDate).getHours();
   let HEnd = new Date(endDate).getHours();     
   var rezH = 0;
   if(HStart > HEnd){
      rezH = HEnd - HStart - 24;
   }else {
     rezH = HEnd - HStart;
     if(rezH == 0){
       rezH = '00';
     }else{
        for(let i=1; i<10; i++){
          if(rezH == i){
            rezH = '0'+rezH;
          }
        }
        rezH = ''+rezH;
     }
   }
   var str = rezH+':'+rezMin+':'+rezSec+'.'+rezMillSec;
   return str.toString();
}


/**
 * Returns the angle (in radians) between the hands of an analog clock for the specified Greenwich time.
 * If you have problem with solution please read: https://en.wikipedia.org/wiki/Clock_angle_problem
 * 
 * @param {date} date
 * @return {number}
 *
 * @example:
 *    Date.UTC(2016,2,5, 0, 0) => 0
 *    Date.UTC(2016,3,5, 3, 0) => Math.PI/2
 *    Date.UTC(2016,3,5,18, 0) => Math.PI
 *    Date.UTC(2016,3,5,21, 0) => Math.PI/2
 */
function angleBetweenClockHands(date) {

    var hour = new Date(date).getHours();
    var min = new Date(date).getMinutes();
    var count = 0;
    var argHours = [];

    if(hour == 0){
      hour = 21;
    }else if(hour == 1){
      hour = 22;
    }else if(hour == 2){
      hour = 23;
    }else {
      hour = hour-3;
    }

    for(var i=13; i<=24; i++){
      argHours[count] = i;
      count += 1;
    }
    for(var i=0; i<argHours.length; i++){
      if(hour == argHours[i]){
        hour = i+1;
      }
    }

    var angel = 0.5*(60*hour-11*min);
    if(angel < 0){
      angel = angel-2*angel;
    }
    if(angel <= 180){
      return Math.PI*(angel/180);
    }
    if(angel > 180){
      angel = 360 - angel;
      return Math.PI*(angel/180);
    }
}


module.exports = {
    parseDataFromRfc2822: parseDataFromRfc2822,
    parseDataFromIso8601: parseDataFromIso8601,
    isLeapYear: isLeapYear,
    timeSpanToString: timeSpanToString,
    angleBetweenClockHands: angleBetweenClockHands
};
