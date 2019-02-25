var Flame = false; 
var isChancellor = false;
var Command = false; 

$(document).ready(function(){

    updateN(n1);

    $("footer").html(createButton("button1", o1)+createButton("button2", o2)+createButton("button3", o3));

// Lexa section
    $("#button1").click(function(){

        if($("#button1").text()===o1){
            deleteButton("#button3")
            updateN(n2)
            updateButtons(o4, o5);
        }
       

        $("#button1").click(function(){

             if($("#button1").text()===o4){
                updateN(n5)
                Flame = true;
                deleteButton("#button2")
             }
        })

        

        $("#button2").click(function(){

             if($("#button2").text()===o5){
                updateN(n6)
               deleteButton("#button1")
             }
        })   
    });
/**************************************************/
// Octaiva section
    $("#button2").click(function(){

        if($("#button2").text()===o2){
            deleteButton("#button3")
            updateN(n3)
            updateButtons(o6, o7)
            
        }
        $("#button1").click(function(){

            if($("#button1").text()===o6){
               updateN(n7)
               deleteButton("#button2")
            }
       })
       $("#button2").click(function(){

            if($("#button2").text()===o7){
                updateN(n8)
                deleteButton("#button1")
            }
        })
    })
/**************************************************/
//Bellamy Section
    $("#button3").click(function(){
        if($("#button3").text()===o3){
            deleteButton("#button3")
            updateN(n4)
            updateButtons(o8, o9)
            
        }
    })
/**************************************************/
});

var updateN = function(a){

    $("article").text(a);

}

var createButton = function(id, text ){

    return "<button type=button id=" + id + ">" + text + "</button>";
 

}

var deleteButton= function(a){
    $(a).hide()
}

var updateButtons = function(a, b){

    $("#button1").text(a);
    $("#button2").text(b);
    $("#button3").text(c);

}
var n1= "Welcome to the 100 bring your own adventure. Choose your character.";
var n2= "You have chosen Lexa, the Commander of the 13 Clans, she has been faced with the option of either keeping the commandership for herself, or give it up. So she...";
var n3= "You have chosen Octavia, the blood queen, she is the second of the leader of the Trikru (tree people) she has been stuck in a bunker for the past 6 years and its ready to come out. Not everyone is wanting to leave because they don't know the conditions.  She has to either leave by herself, or convince her people to go with her. So she...";
var n4= "You have chosen Bellamy, quite frankly one of the more boring non-sword weilding characters, he has been faced with the trial of becomming the chancelor of the sky people and serve as their leader, or end all of the chancelor reign. So he...";
var n5 = "has chosen to keep command, leading to her domination and rule over everyone, you have won? I mean you didn't die so thats a plus"
var n6 = "Givin up the flame she has died, peace has been brought back, so if you wanted piece, you won?"
var n7 = "Goes by herself, she makes it out alive by herself, she was always known to be the lone wolf, she meets with the commander and kills her, making her the new commander. MWAHAHAHAHAHA";
var n8 = "Leaving with her people caused them to be nothing but a weight. They took up all the supplies and were burdons. They got ambushed later that night and they all died. Tragic";
var n9 = "He decides to try and revolt at the spot. He attacks the current chancellor and the chancellors men kill him.";
var n10 = "becomes chancellor and makes a successful leader for the people he was with before";
//N1 ********
var o1 = "Lexa (Commander of all 13 Clans, originates in Trikru)";
var o2 = "Octavia (Known as Bloodreina (blood queen), came from space)";
var o3 = "Bellamy (Octavia's brother, came from space)";
//N2 ********
var o4 = "Keep the flame"
var o5 = "Give it up"
//N3 ********
var o6 = "By herself";
var o7 = "With her people";
//N4 ********
var o8 = "Fight back";
var o9 = "Serve";
