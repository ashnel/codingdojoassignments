function daysUntilMyBirthday(days) {
    for (var i = days; i <= days; i--) {
        if (i > 30) {
            console.log(i + " days until my birthday. Such a long time... :()");
        }
        else if (i < 30 && i > 5) {
            console.log("Only " + i + " days until my birthday; getting closer!");
        }
        else if (i <= 5 && i !== 0 && i != 1) {
            console.log(i + " DAYS UNTIL MY BIRTHDAY!!!");
        }
        else if (i == 1) {
            console.log(i + " DAY UNTIL MY BIRTHDAY!!!");
        }
        else if (i === 0) {
            console.log("+:+:+:+:+:+ HAPPY BIRTHDAY!!! +:+:+:+:+:+");
            break;
        }
    }
}
