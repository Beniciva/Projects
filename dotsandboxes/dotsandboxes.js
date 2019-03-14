


$(document).ready(function(){

    var U = 1
    var D = 2
    var L = 3
    var R = 4


    $("td").click(function(){
        askSide()
        if (response = "U"){
            $(this).css("border-top: 50px solid black");
        }

    })


    var askSide = function(){
         var response = prompt("Please pick: U, D, L, R (Has to be Upper Case)")
        return response;
    }
})