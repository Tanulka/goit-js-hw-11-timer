import refs from './refs.js';
const { daysContent, hoursContent, minsContent, secsContent } = refs;

const finishDate = new Date('13 Sep 2021').getTime();
function start() {
  setInterval(() => {
    let currentDate = Date.now();

    let time = finishDate - currentDate;
    //  разбиваем результат на дни, чассы, минуты и секунды

    let days = getDaysCount(time);
    let hours = getHoursCount(time);
    let mins = getMinsCount(time);
    let seconds = getSecCount(time);

    //  приводим значение в 2х значный вид
    days = padValue(days, 2, '0');
    hours = padValue(hours, 2, '0');
    mins = padValue(mins, 2, '0');
    seconds = padValue(seconds, 2, '0');

    // отобразить в разметке встроить
    insertDate(daysContent, days);
    insertDate(hoursContent, hours);
    insertDate(minsContent, mins);
    insertDate(secsContent, seconds);
  }, 1000);
}

// start();

function insertDate(place, value) {
  place.textContent = value;
}

function padValue(value, quantity, symbol) {
  return String(value).padStart(quantity, symbol);
}

function getDaysCount(time) {
  return Math.floor(time / (1000 * 60 * 60 * 24));
}

function getHoursCount(time) {
  return Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
}

function getMinsCount(time) {
  return Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
}

function getSecCount(time) {
  return Math.floor((time % (1000 * 60)) / 1000);
}
