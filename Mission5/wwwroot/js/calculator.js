$(function () {

    var rate = $("#rate").val();

    $("#calcBtn").click(function () {
        var hours = $("#hours").val();

        if (hours <= 0 || hours === "") {
            $("#error").text("Enter a positive number");
            $("#total").val("");
        } else {
            $("#error").text("");
            $("#total").val(hours * rate);
        }
    });

});
