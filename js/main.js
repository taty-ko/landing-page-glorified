'use strict';

window.addEventListener('DOMContentLoaded', () => {
console.log('works');



//TIMER
const deadline = '2022-12-31'; // задем переменную в виде строки, потому что строка нормально парсится.

function getTimeRemaining(endTime) {
    let days, hours, minutes, sec;

    const time = Date.parse(endTime) - Date.parse(new Date());  // парсим строку в дату. Получим кол-во миллисекунд до которого нам нужно дойти.
                                                                //Date.parse(new Date() - сегодняшняя дата.
    if (time <= 0 ) {
        days = 0;
        hours = 0;
        minutes = 0;
        sec = 0;
    } else {
        days = Math.floor(time / (1000*60*60*24)); //Math.floor - округление до ближайшего целого.
        // 1000*60*60*24 - 1000 миллисекунд в минуте, минут в часе, часов в сутках.

        hours = Math.floor((time / (1000*60*60) % 24)); // % 24 - остаток от деления на 24, сутки.
        // 1000 милиссекунд, 60 минуту, на 60 минут в часе.                                            
        minutes = Math.floor((time / 1000 / 60) % 60); // делим на 1000 получаем кол-во секунд и делим  на 60 - получаем кол-во минут, % 60, чтобы получить минуты, не больше 60.

        sec = Math.floor((time / 1000  % 60)); // / делим на 1000 получаем количество секунд в миллисекундах.
    };

    // возвращаем объект с данными, дни, часы, мин, сек. Чтобы потом переиспользовать его значения.
    return {
        'total': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': sec
    };
}


    //Пишем помощник, когда у остается одно число, то вперед нужно будет добавить 0, нуль. чтоб число было записано 09, 03, 01.
    function getZero(num) {
        if (num >= 0 && num < 10) { // чтобы наше число было положительным num >= 0 И меньше 10 (num < 10), т.е 9, 8, 7..
            return `0${num}`; // 0 + num. Числовой тип данных превратили в строку.
        } else {
            return num;
        }
    }


        // Функция, которая устанавливает часы(таймер) на страничку.
    function setClock(selector, endTime) {
        const timer = document.querySelector(selector), //таймер, который первый на странице.
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000); // добавляем интервал обновления функции updateClock каждую секнду(1000 миллисек)

              updateClock(); //запустили функцию, чтобы скрыть мигание значений в счетчике с html файлка и теми, которые устанавливаем мы сейчас.
                       // она просто запустит текущую дату, оновится на страничке.


         // внутри функции пишем функцию, которая будет обновлять наш таймер каждую секунду

         function updateClock() {
            const time = getTimeRemaining(endTime); //присваиваем t - объект, который возвращает функция getTimeRemaining
            
            days.innerHTML = getZero(time.days); // getZero - подставляет нолик перед числом t.days, если оно меньше 10.
            hours.innerHTML = getZero(time.hours);
            minutes.innerHTML = getZero(time.minutes);
            seconds.innerHTML = getZero(time.seconds);
        }
         // чтобы остановить работу функции после даты дедлайна. Пишем условие:
         if (t.total <= 0 ) {
            clearInterval(timeInterval); // если время вышло, т.е дедлайн наступил и уже идет вперед, то фуенкия останавиливает работу. Таймер не обновляется.
        }
    } 
    setClock('.timer', deadline);





    //Slider
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect:'slide',

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
          nextEl: '.next',
          prevEl: '.prev',
        },

      });
});
