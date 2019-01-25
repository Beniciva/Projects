$(document).ready(function(){

    $("#q1").click(function(){
        q1();
    })

})

var q1 = function(){

    var minutes;
    var yearsR;
    var daysR;
    var days;
    var years;

    var input = $("#number1").val()

    days = Math.floor(input/1440);
    daysR = Math.floor(days%365);
    years = Math.floor(days/365);
   
    $("#output").text(input + " minutes is equal to " + years + " years, " + daysR + " days.");

}

var q2 = function(){

    var total;
    var gratuity;

    var input = $("#number2").val();
    var input = $("#number3").val();

    var gratuity = 
}