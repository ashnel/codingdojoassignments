function tellTime(hour, minutes, period) {
    if (hour == 12 && minutes === 0) {
        if (period == "AM") {
            console.log("It's midnight.");
        }
        else if (period == "PM") {
            console.log("It's noon.");
        }
    }

    if (hour >= 1 && hour < 6) {
        period = " in the afternoon.";
    }
    else if (hour > 5 && hour < 12 && period == "PM") {
        period = " at night.";
    }
    else if (period == "AM") {
        period = " in the morning.";
    }
    else if (period == "PM") {
        period = " in the evening."
    }

    if (minutes < 30) {
        if (minutes == 15) {
            console.log("It's a quarter after " + hour);
        }
        else if (minutes == 5) {
            console.log("It's 5 after " + hour + ".");
        }
        else if (hour != 12) {
            console.log("It's just after " + hour + period)
        }
    }
    else if (minutes > 30) {
        console.log("It's almost " + (hour + 1) + period);
    }
    else if (minutes == 30) {
        console.log("It's half past " + hour + ".");
    }
}