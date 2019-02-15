var n1 = "Welcome to the 100 bring your own adventure. Choose your character.";
var n2 = "You have chosen Lexa, the Commander of the 13 Clans, she has been faced with the option of either keeping the commandership for herself, or give it up.";
var n3 = "You have chosen Octavia, the blood queen, she as the second of the leader of the Trikru (tree people) she is currently stuck in a bunker and has to gain the peoples trust to make it out.";
var n4 = "You have chosen Bellamy, quite frankly one of the more boring non-sword weilding characters, he has been faced with the trial of becomming the chancelor of the sky people and serve as their leader, or end all of the chancelor reign. ";
var n5 = "";
var n6 = "";
var n7 = "";
var n8 = "";
var n9 = "";
var n10 = "";
var n11 = "";
//N1 ********
var o1 = "Lexa (Commander of all 13 Clans, originates in Trikru";
var o2 = "Octavia (Known as Bloodreina (blood queen), came from space";
var o3 = "Bellamy (Octavias brother, came from space";
//N2 ********
var o4 = "";
var o5 = "";
//N3 ********
var o6 = "";
var o7 = "";
//N4 ********
var o8 = "";
var o9 = "";
var o10 = "";

$(document).ready(function(){

    var button1 = createButton("option1", o1);
    var button2 = createButton("option2", o2);
    var button3 = createButton("option3", o3);
    var button4 = createButton("option4", o4);
    var button5 = createButton("option5", o5);
    var button6 = createButton("option6", o6);
    var button8 = createButton("option8", o8);
    var button9 = createButton("option9", o9);
    var button10 = createButton("option10", o10);
    updateN(n1)






})

var updateN = function(a){

    $("article").text(a);

}

var createButton = function(id, text ){

    return "<button type=button id=" + id + ">" + text + "</button>";
 

}