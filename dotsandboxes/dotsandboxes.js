var Up = 1
var Down = 2
var Left = 3
var Right = 4



$(document).ready(function(){

    $("td").click(function(){
        askSide()
        if (askSide = 1){
            $("").css("border-top: 5px solid black");
        }

    })


    var askSide = function(){
        prompt("Please pick Up, Down, Left, Right (capital first letter)")
        return;
    }
})