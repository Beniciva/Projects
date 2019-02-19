var Flame = false; 
var isChancellor = false;
var Command = false; 

$(document).ready(function(){

    updateN(n1);
    $("footer").html(createButton("button1", o1)+createButton("button2", o2)+createButton("button3", o3));

    $("#button1").click(function(){

        if("#button1").text===o1){
            updateN(n2)
            updateButtons(o4, o5);
        }
        else if()

    

    $("#button1").click(function(){

        if("#button1").text===o4){
            updateN(n5)
        }
    
    

    $("#button2").click(function(){

        if("#button2").text===o5){
            updateN(n6)
        }
        
});

var updateN = function(a){

    $("article").text(a);

}

var createButton = function(id, text ){

    return "<button type=button id=" + id + ">" + text + "</button>";
 

}

var updateButtons = function(a, b){

    $("#button1").text(a);
    $("#button2").text(b);
    $("#button3").text(c);

}
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
//N1 ********
var o1 = "Lexa (Commander of all 13 Clans, originates in Trikru)";
var o2 = "Octavia (Known as Bloodreina (blood queen), came from space)";
var o3 = "Bellamy (Octavia's brother, came from space)";
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