$(document).ready(function () {
    var pacman = {
        x: 1,
        y: 1,
        position: "right"
    }

    var direction = {
        up: "up",
        right: "right",
        down: "down",
        left: "left",
    }

    var score = 0;

    var world = [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 3, 1, 0, 2, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 2, 2, 2, 0, 1, 2],
        [2, 1, 0, 1, 1, 1, 2, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 2, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 2, 1, 1, 2],
        [2, 1, 1, 1, 2, 2, 2, 1, 1, 2],
        [2, 1, 1, 1, 2, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 2, 2, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    ];

    // Initializes the world
    function createWorld() {
        var output = "";

        for (var y = 0; y < world.length; y++) {
            output += "<div class='row'>";
            for (var x = 0; x < world[y].length; x++) {
                if (world[y][x] == 3) {
                    // If pacman's position is left, face him to the left
                    if (pacman.position == "left") {
                        output += "<div id='pacman' class='" + pacman.position + "'></div>";
                    }
                        // If pacman's position is right, face him to the right
                    else if (pacman.position == "right") {
                        output += "<div id='pacman'></div>";
                    }
                        // If pacman's position is up, face him up
                    else if (pacman.position == "up") {
                        output += "<div id='pacman' class='" + pacman.position + "'></div>";
                    }
                        // If pacman's position is down, face him down
                    else if (pacman.position == "down") {
                        output += "<div id='pacman' class='" + pacman.position + "'></div>";
                    }
                }
                else if (world[y][x] == 2) {
                    output += "<div class='brick'></div>";
                }
                else if (world[y][x] == 1) {
                    output += "<div class='coin'></div>";
                }
                else if (world[y][x] == 0) {
                    output += "<div class='empty'></div>";
                }
            }
            output += "</div>";
        }
        $("#world").html(output);
    }

    function drawScore() {
        $("#score .tally").html(score);
    }
    drawScore();

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    $(document).on("keydown", "body", function (event) {
        var output = "";
        var trueOrFalse = getRandomInt(3);

        // Left
        if (event["keyCode"] === 37 && world[pacman.y][pacman.x - 1] != 2) {
            if (world[pacman.y][pacman.x - 1] == 1) {
                score++;
                world[pacman["y"]][pacman["x"]] = 0;
                pacman["x"]--;
                world[pacman["y"]][pacman["x"]] = 3;
                pacman.position = direction.left;
            }
            else {
                world[pacman["y"]][pacman["x"]] = 0;
                pacman["x"]--;
                world[pacman["y"]][pacman["x"]] = 3;
                pacman.position = direction.left;
            }
        }
        // Up
        if (event["keyCode"] === 38 && world[pacman.y - 1][pacman.x] != 2) {
            if (world[pacman.y - 1][pacman.x] == 1) {
                score++;
                world[pacman["y"]][pacman["x"]] = 0;
                pacman["y"]--;
                world[pacman["y"]][pacman["x"]] = 3;
                pacman.position = direction.up;
            }
            else {
                world[pacman["y"]][pacman["x"]] = 0;
                pacman["y"]--;
                world[pacman["y"]][pacman["x"]] = 3;
                pacman.position = direction.up;
            }
        }
        // Right
        if (event["keyCode"] === 39 && world[pacman.y][pacman.x + 1] != 2) {
            if (world[pacman.y][pacman.x + 1] == 1) {
                score++;
                world[pacman["y"]][pacman["x"]] = 0;
                pacman["x"]++;
                world[pacman["y"]][pacman["x"]] = 3;
                pacman.position = direction.right;
            }
            else {
                world[pacman["y"]][pacman["x"]] = 0;
                pacman["x"]++;
                world[pacman["y"]][pacman["x"]] = 3;
                pacman.position = direction.right;
            }
        }
        // Down
        if (event["keyCode"] === 40 && world[pacman.y + 1][pacman.x] != 2) {
            if (world[pacman.y + 1][pacman.x] == 1) {
                score++;
                world[pacman["y"]][pacman["x"]] = 0;
                pacman["y"]++;
                world[pacman["y"]][pacman["x"]] = 3;
                pacman.position = direction.down;
            }
            else {
                world[pacman["y"]][pacman["x"]] = 0;
                pacman["y"]++;
                world[pacman["y"]][pacman["x"]] = 3;
                pacman.position = direction.down;
            }
        }
        createWorld();
        drawScore();
    })

    // Create the world
    createWorld();
});
