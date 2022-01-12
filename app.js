const daysBox = document.querySelector('#days');
const hoursBox = document.querySelector('#hours');
const minsBox = document.querySelector('#mins');
const secsBox = document.querySelector('#secs');

// count-down function
const newYear = '17 Feb 2022';
const countDown = () => {
    const newYearDate = new Date(newYear);
    const newYearSec = newYearDate.getTime();
    const currentDate = new Date();
    const currentDateSec = currentDate.getTime();

    // difference btw the two date
    const durration = newYearSec - currentDateSec;

    // getting the durrations in secs
    const durrationSec = Math.floor(durration / 1000);
    const seconds = Math.floor(durrationSec % 60)
    const mins = Math.floor(durrationSec / 60) % 60;
    const hours = Math.floor(durrationSec / 3600 ) % 24;
    const days = Math.floor((durrationSec / 3600 ) / 24);

    // add the values in the html elements

    secsBox.innerHTML = formatTime(seconds);
    minsBox.innerHTML = formatTime(mins) + ': ';
    hoursBox.innerHTML = formatTime(hours) + ': ';
    daysBox.innerHTML = days + ': ';
    console.log(days, hours, mins, seconds);

    // this function checks when the time is less than 10 and add 0 to time instead of a unit number
    

}

const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
}

// console.log();

setInterval(countDown, 1000);

