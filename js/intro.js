//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function() {
   
    $("#Box").hide();

    $("#Button").click(function(){
        $("#Box").toggle();

    });

    $("#Box").click(function(){
        $("#Box").css("background-color", "blue");

    });

    $("#Name").click(function(){
        $("#Box").css("border", "5px solid red");

    });

    $("#Image").click(function(){
        location.reload(true);

    });

});