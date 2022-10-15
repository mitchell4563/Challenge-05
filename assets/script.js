//variables for the current day p tag
var currentDayEl = $('#currentDay');
var containerEl = $('.container');
var currentHour = moment().hour();
var today = new Date;
var month = today.toLocaleString('default', { month: 'long'});
var day = today.toLocaleString('default', { day: 'numeric' });
var year = today.toLocaleString('default', { year: 'numeric' });
var currentDay = month + ' ' + day + ',' + ' ' + year;
document.getElementById('currentDay').innerHTML = currentDay

