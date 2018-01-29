function daysUntilMyBirthday(days) {
    while (days <= 60) {
        if (days > 30) {
            console.log(days + " days until my birthday. Such a long time... :()");
            days--;
        }
        else if (days <= 30 && days > 5) {
            console.log("Only " + days + " days until my birthday; getting closer!");
            days--;
        }
        else if (days <= 5 && days !== 0 && days != 1) {
            console.log(days + " DAYS UNTIL MY BIRTHDAY!!!");
            days--;
        }
        else if (days == 1) {
            console.log(days + " DAY UNTIL MY BIRTHDAY!!!");
            days--;
        }
        else if (days === 0) {
            console.log("+:+:+:+:+:+ HAPPY BIRTHDAY!!! +:+:+:+:+:+");
            break;
        }
    }
}