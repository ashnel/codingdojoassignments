$(document).ready(function () {
    var str = "";

    // Loops through up until the max number of images I want and inputs it into the wraper's HTML
    for (var i = 1; i <= 151; i++) {
        str += "<img id='" + i + "' src='http://pokeapi.co/media/img/" + i + ".png' />";
    }
    $("#pokemon").html(str);

    $("img").click(function () {
        $.get("https://pokeapi.co/api/v2/pokemon/" + $(this).attr("id") + "/", function (pokeName) {
            $("#info-box h1").html((pokeName.forms[0].name).toUpperCase());
        }, "json");

        $("#info-box img").attr("src", "http://pokeapi.co/media/img/" + $(this).attr("id") + ".png");

        $.get("https://pokeapi.co/api/v2/pokemon/" + $(this).attr("id") + "/", function (pokeType) {
            $("#type").text("Types");
            $("ul").html("");
            for (var i = 0; i < pokeType.types.length; i++) {
                var html = "";
                html = "<li>" + pokeType.types[i]["type"]["name"] + "</li>"
                $("ul").append(html);
            }
        }, "json");

        $.get("https://pokeapi.co/api/v2/pokemon/" + $(this).attr("id") + "/", function (pokeHeight) {
            $("#height").text("Height");
            $(".heightp").html(pokeHeight.height);
        }, "json");

        $.get("https://pokeapi.co/api/v2/pokemon/" + $(this).attr("id") + "/", function (pokeHeight) {
            $("#weight").text("Weight");
            $(".weightp").html(pokeHeight.weight);
        }, "json");
    })
});