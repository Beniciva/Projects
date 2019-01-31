$(document).ready(function(){

    $("#q1").click(function(){
        q1();
    })

    $("#q2").click(function(){
        q2();
    })

    $("#q3").click(function(){
        q3();
    })

    $("#q4").click(function(){
        q4();
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
    var gratuityR;
    var subtotal;

    var subtotal = $("#number2").val();
    var gratuity = $("#number3").val();

    subtotal = parseInt(subtotal);
    gratuity = parseInt(gratuity);

    gratuityR = gratuity/10;
    total = subtotal + gratuityR;

    $("#output1").text("Your gratuity is $" + gratuityR + " Your total is $" + total)
}

var q3 = function(){

    var kilograms;
    var meters; 
    var bmi;
    var pow;

    var weight = $("#number4").val();
    var height = $("#number5").val();

    kilograms = weight * .45359237;
    meters = height * .0254;
    pow = Math.pow(meters, 2);
    bmi = kilograms / pow;

    $("#output2").text("Your BMI is " + bmi + ".")
}

var q4 = function(){

    var input = $("number6").val()

    var hrs = Math.floor(input/60)%60;
    var minutes = input % 60;

    $("#output3").text("The time is " + hrs + " hours and " + minutes + " minutes")

}