$(document).ready(function () {
    
    var str = "";

    // Loops through up until the max number of images I want and inputs it into the wraper's HTML
    for (var i = 0; i < 5; i++) {
        str += "<img id='" + i + "' src='images/ninja" + i + ".png' />";
    }
    $("#wrapper").html(str);

    // Inputs proper information based on the img's ID to properly change images
    $("img").click(function () {
        var i = $(this).attr("id");
        var src = $(this).attr("src");
        if (src == 'images/ninja' + i + '.png') {
            $(this).attr("src", "images/cat" + i + ".png");
        }
        else {
            $(this).attr("src", "images/ninja" + i + ".png");
        }
    })
});