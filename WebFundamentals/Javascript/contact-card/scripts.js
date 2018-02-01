$(document).on("click", ".submit", function () {
    // Setup the contact card
    var firstName = $("#firstname").val();
    var lastName = $("#lastname").val();
    var description = $("textarea").val();

    var cardText = "<div class='new-card'><h1>" + firstName + " " + lastName + "</h1><h3>Click for description!</h3></div>";

    $("#cards").append(cardText);

    $(document).on("click", "h3", function () {
        cardText = "<p class='description'>" + description + "</p>";
        $(this).html(cardText);
        console.log(5);
    });
});