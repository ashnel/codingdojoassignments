function slots(quarters, desiredWinnings) {
    var games = quarters;
    var winnings = 0;
    var win = 50;

    while (quarters > 0) {
        if (Math.floor(Math.random() * 100) + 1 == 50) {
            quarters--;
            winnings = Math.floor(Math.random() * 51) + 50;
            quarters += winnings;
            console.log("WINNER!", "Gains: " + winnings, "New Total: " + quarters + " quarters.");

            if (quarters >= desiredWinnings) {
                console.log("Grats! You've reached your desired goal! Your total winnings are " + quarters + " quarters.");
                break;
            }
        }
        else {
            quarters--;
            console.log("You lose!", "New Total: " + quarters + " quarters.");

            if (quarters === 0) {
                console.log("Sorry, you've lost all your coins! You can't play any more games.");
            }
        }
    }
}