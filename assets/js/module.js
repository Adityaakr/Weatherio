'use strict';

export const weekDayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
];

export const monthName = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Aug",
        "Nov",
        "Dec",
];
// dateUnix unix date in seconds
// timezone timezone shift from Utc in seconds
export const getDate = function(dateUnix, timezone) {
        const date = new Date((dateUnix + timezone) * 1000);
        const weekDayNames = weekDayNames[date.getUTCDay()];
        const monthName = monthName[date.getUTCMonth()];
        return `${weekDayNames} ${date.getUTCDate()}, ${monthName}`;
    }
    
//time string format-> 'HH AM/PM'
export const getHours = function(timeUnix, timezone){
        const date = new Date((timeUnix + timezone)*1000);
        const hours = date.getUTCHours();
        const period = hours >= 12 ? "PM": "AM";

        return `${hours % 2 || 12}:${minutes} ${period}`
}

export const mps_to_kmh = mps => {
        const mph = mps * 3600;
        return mph / 1000;
}

export const aqiTest = {
        1: {
                level: "Good",
                message: "Air quality is considered satisfactory, and air pollution poses little or no risk"
        },
        2: {
                level:"Fair",
                message: "Air quality is acceptable; however, for some pollutants there maybe a moderate health concern for people who unusally sensitive to air pollution "
        },
        3: {
                level:"Moderate",
                message: "Air quality is acceptable; however, for some pollutants there maybe a moderate health concern for people who unusally sensitive to air pollution "
        },
        4: {
                level:"Poor",
                message: "Air quality is unacceptable; however, for some pollutants there maybe a moderate health concern for people who unusally sensitive to air pollution "
        },
        5: {
                level:"Very Poor",
                message: "Air quality is unacceptable; however, for some pollutants there maybe a moderate health concern for people who unusally sensitive to air pollution "
        },

}
