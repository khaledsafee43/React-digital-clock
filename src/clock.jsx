import React, { useState } from "react";

function DigitalClock() {
    // Using the toLocaleTimeString to show the time on screen
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    // Using the toLocaleDateString to show the date on screen
    const [months, setMonths] = useState(new Date().toLocaleDateString());
    // Using the getDay to show the days of  the week on screen
    const days = new Date();
    const dd = days.getDay();
    const names_of_days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const convertToDay = names_of_days[dd];
    const [day, setDay] = useState(convertToDay);
    // React getDay useEffect to return the days 
    React.useEffect(function () {
        setInterval(function () {
            setDay(convertToDay);
        });
    });
    // React toLocaleDateString useEffect to return the toLocaleDateString
    React.useEffect(function () {
        setInterval(function () {
            setMonths(new Date().toLocaleDateString());
        });
    });
    // React toLocaleTimeString useEffect to return the toLocaleTimeString
    React.useEffect(function () {
        setInterval(function () {
            setTime(new Date().toLocaleTimeString())
        })
    })
    return (
        // this tags take data from functions of the above and the data of these tags are hour,munit,second,day of the week and date
        <div class="container">
            <span id="hours">{time}</span>

            <div class="weak-day-container">
                <span id="weak-day">{day}</span>
            </div>

            <div class="date-container">
                <span id="months">{months}</span>
            </div>
        </div>
    )
}


export default DigitalClock;
