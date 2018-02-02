$(document).ready(function () {
    $('form').submit(function () {
        var city = $("#city").val();
        //console.log(city);

        function ascii(a) { return String.fromCharCode(a); }

        $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&&appid=46d3d3694155d4226e50de140a0d9c11", function (weather) {
            var tempK = weather["main"]["temp"];
            var tempF = Math.round(tempK * 1.8 - 459.67);
            $("h1").text("Temperature: ");
            $("h1").append(tempF + ascii(176));
        }, "json");
        return false;
    });
});
