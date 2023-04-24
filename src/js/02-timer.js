import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const dateInput = document.querySelector('#datetime-picker');
console.log(dateInput);

const startButton = document.querySelector('button[data-start]')
console.log(startButton);

const daysTime = document.querySelector('.value[data-days]');
console.log(daysTime);

const hoursTime = document.querySelector('.value[data-hours]');
console.log(hoursTime);

const minutesTime = document.querySelector('.value[data-minutes]');
console.log(minutesTime);

const secondsTime = document.querySelector('.value[data-seconds]');
console.log(secondsTime);

let timerId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        console.log(new Date())

        if (selectedDates[0] < new Date()) {
            startButton.disabled = true;
            //window.alert("Please choose a date in the future");
            Notiflix.Notify.failure('Please choose a date in the future');
        } else {
            startButton.disabled = false;
            startButton.addEventListener('click', () => { changeTimerValue(selectedDates[0]) });

        }
    },
};

flatpickr(dateInput, options);

function changeTimerValue(selectedTime) {
    let timer = setInterval(() => {
        let countdownTimer = new Date(dateInput.value) - new Date;
        startButton.disabled = true;
        dateInput.disabled = true;
        console.log(countdownTimer)
        if (countdownTimer >= 0) {
            const timerData = convertMs(countdownTimer);
            daysTime.textContent = timerData.days;
            hoursTime.textContent = timerData.hours;
            minutesTime.textContent = timerData.minutes;
            secondsTime.textContent = timerData.seconds;
        } else {
            clearInterval(timer);
        }
    }, 1000);
}


// function pad(value) {
//     return String(value).padStart(2, "0");
// }

function convertMs(ms) {

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);

    const hours = Math.floor((ms % day) / hour);

    const minutes = Math.floor(((ms % day) % hour) / minute);

    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}



// flatpickr(dateInput, options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//         if (selectedDates < options.defaultDate) {
//             return "Please choose a date in the future";
//         }
//         console.log(selectedDates[0]);

//     }
// });

// function convertMs(ms) {

//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     const days = Math.floor(ms / day);
//     const hours = Math.floor((ms % day) / hour);
//     const minutes = Math.floor(((ms % day) % hour) / minute);
//     const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//     daysTime.textContent = days < 10 ? `0${days}` : days;
//     hoursTime.textContent = hours < 10 ? `0${days}` : hours;
//     minutesTime.textContent = minutes < 10 ? `0${days}` : minutes;
//     secondsTime.textContent = seconds < 10 ? `0${days}` : seconds;

//     return { days, hours, minutes, seconds };
// }
// console.log(convertMs(30000000005555));
// // console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// // console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// //console.log(convertMs(999999)); // {days: 0, hours: 6 minutes: 42, seconds: 20}



// document.addEventListener('DOMContentLoaded', function () {
//     const deadline = new Date(2023, 06, 01);
//     let timerId = null;
//     function declensionNum(num, words) {
//         return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
//     }
//     function countdownTimer() {
//         const diff = deadline - new Date();
//         if (diff <= 0) {
//             clearInterval(timerId);
//         }
//         const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
//         const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
//         const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
//         const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
//         $days.textContent = days < 10 ? '0' + days : days;
//         $hours.textContent = hours < 10 ? '0' + hours : hours;
//         $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
//         $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
//         $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
//         $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
//         $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
//         $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
//     }
//     const $days = document.querySelector('.value[data-days]');
//     const $hours = document.querySelector('.value[data-hours]');
//     const $minutes = document.querySelector('.value[data-minutes]');
//     const $seconds = document.querySelector('.value[data-seconds]');

//     countdownTimer();
//     timerId = setInterval(countdownTimer, 1000);
// });