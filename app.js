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

    secsBox.innerHTML = seconds;
    minsBox.innerHTML = mins + ': ';
    hoursBox.innerHTML = hours + ': ';
    daysBox.innerHTML = days + ': ';
    console.log(days, hours, mins, seconds);

}

// console.log();

setInterval(countDown, 1000);

