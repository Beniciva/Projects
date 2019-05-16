var U = 1
var D = 2
var L = 3
var R = 4

$(document).ready(function(){

    var askSide = function(){
        var response = prompt("Please pick: U, D, L, R (Has to be Upper Case)")
       return response;
   }

    $("td").click(function(){
        askSide()
        if (response = "U"){
            $(this).css("border-top: 50px solid black");
        }
        if (response = "L"){
            $(this).css("border-left: 50px solid black");
        }
        if (response = "R"){
            $(this).css("border-right: 50px solid black");
        }
        if (response = "D"){
            $(this).css("border-bottom: 50px solid black");
        }
    })


   
})