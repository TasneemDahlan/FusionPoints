$(document).ready( function(){

    $("#checkbtn").click(function () {
        $(".details-container").fadeIn(400);
    });
    $("#check-btn").click(function () {
        $(".details-container").fadeIn(400);
    });
    $("#chargebtn").click(function () {
        $("#confirm-msg").fadeIn(400);
    });
    $("#chargebtn").click(function () {
        $("#confirm-msg").fadeIn(600);
    });
    $(".confirmbtn, .cancelbtn").click(function(){
        $(".details-container").fadeOut(400);
        $("#confirm-msg").fadeOut(200);
        $("#code-msg").fadeOut(400);
    });
    $(".confirmbtn").click(function(){
        $("#success-container").fadeIn(400);
    });
    $("#withdrawbtn").click(function(){
        $("#code-msg").fadeIn(400);
        
    });
});