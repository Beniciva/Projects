
$(document).ready(function(){

    $("#button").click(function(){
 
       showInfo();
 
    })
    
 })

var color;  
var superlative;
var adj;
var bodyPt;
var bodyPt2;
var noun;
var animal;
var adj1;
var adj2;
var adj3;   
var name;

function getInfo() {
    color = $("#color").val();
    superlative = $("#superlative").val();
    adj = $("#adj").val();
    bodyPt = $("#bodyPt").val();
    bodyPt2 = $("#bodyPt2").val();
    noun = $("#noun").val();
    animal = $("#animal").val();
    adj1 = $("#adj1").val();
    adj2 = $("#adj2").val();
    adj3 = $("#adj3").val();
    name = $("#name").val();
}

function showInfo() {
    getInfo();

    var madlib = "Meet " + name + ".This " + color + " Dragon is the " + superlative + " Dragon of all. It has " + adj + bodyPt + ", and a " + bodyPt2 + " shaped like a " + noun + ". It loves to eat " + animal +", although it will feast on nearly anything. It is " + adj1 + " and " + adj2 + ". You must be " + adj3 + " around it, or you may end up as it's meal!";

    $("#output").text(madlib).animate({"font-size":"35px", "opacity":"1"}, 3000)
 }