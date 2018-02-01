$(document).ready(function () {
    $(".submit").click(function () {
        var firstName = $("#firstname").val();
        var lastName = $("#lastname").val();
        var email = $("#email").val();
        var contactNum = $("#contact").val();

        var numRows = $("tbody").find("tr").length;

        var newRow = $('<tr><td></td><td></td><td></td><td></td></tr>');
        var cols = newRow.children();

        cols.eq(0).text(firstName);
        cols.eq(1).text(lastName);
        cols.eq(2).text(email);
        cols.eq(3).text(contactNum);
        newRow.appendTo('tbody');

        //alert("Her first name is " + firstName + " and her last name is " + lastName
        //+ " and her email is " + email + " and she can be reached at " + contactNum
        //+ ".");
    })

});