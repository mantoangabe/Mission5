$(function () {

    var rate = $("#rate").val();

    $("#calcBtn").click(function () {
        var hours = $("#hours").val();
        // Check for negative values
        if (hours <= 0 || hours === "") {
            $("#error").text("Enter a positive number");
            $("#total").val("");
        } 
        // Calculation 
        else {
            $("#error").text("");
            $("#total").val(hours * rate);
        }
    });

});
