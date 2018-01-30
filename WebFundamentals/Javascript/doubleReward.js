function doubleReward() {
    var rewardTotal;
    var pennies = 1;
    var infinitePennies = 1;

    for (var i = 1; i < 30; i++) {
        pennies += pennies * 2;

        if (pennies * 0.01 >= 10000 && pennies * .01 < 20000) {
            console.log("It took " + i + " days to make just over $10,000! The current total is $" + pennies * .01);
        }
    }

    rewardTotal = pennies * .01;
    console.log("At the end of 30 days, the servant made $" + rewardTotal + "!");

    for (var x = 1; x <= Infinity; x++) {
        infinitePennies += infinitePennies * 2;

        if (Number.isFinite(infinitePennies * 0.01) === false) {
            console.log("It took " + x + " days (or " + Math.round((x / 12)) + " years) " + "to reach an infinite amount of money!");
            break;
        }
    }
}