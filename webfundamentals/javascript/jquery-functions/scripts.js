$(document).ready(function () {
    // Box1 Functions
    $("#hide").click(function () {
        $("#box1").hide();
    })

    $("#show").click(function () {
        $("#box1").show();
    })

    // Box2 Functions
    $("#toggle").click(function () {
        $("#box2").toggle(function () {
            $("#box1").hide();
        }, function () {
            $("#box1").show();
        })
    });

    // Box3 Functions
    $("#slideup").click(function () {
        $("#box3").slideUp("slow", function () {
            // Animation complete.
        })
    })

    $("#slidedown").click(function () {
        $("#box3").slideDown("slow", function () {
            // Animation complete.
        })
    })

    // Box4 Functions
    $("#slidetoggle").click(function () {
        $("#box4").slideToggle("slow", function () {
            // Animation complete.
        })
    })

    // Box5 Functions
    $("#fadein").click(function () {
        $("#box5").fadeIn("slow", function () {
            // Animation complete
        })
    })

    $("#fadeout").click(function () {
        $("#box5").fadeOut("slow", function () {
            // Animation complete.
        })
    })

    // Box6 Functions
    $("#addclass").click(function () {
        $("#box6").addClass("red-text");
    })

    // Box7 Functions
    $("#before").click(function () {
        $("#box7").before("<h2>Before</h2>");
    })

    $("#after").click(function () {
        $("#box7").after("<h2>After</h2>");
    })

    // Box8 Functions
    $("#append").click(function () {
        $("#box8").append("<strong>This is the end of the paragraph!</strong>");
    })

    // Box9 Functions
    $("#box9").click(function () {
        var box9HTML = $(this).html();
        $(this).text(box9HTML);
    })

    // Box10 Functions
    $("#attr").click(function () {
        var style = $("em").attr("style");
        $("h5").text(style);
    })

    // Box11 Functions
    $(".val").click(function () {
        var text = $(this).text();
        $("input").val(text);
    })

    // Box12 Functions
    $("#text").click(function () {
        $("#box12").text("You changed the text! Great job. :)");
    });
});