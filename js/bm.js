

var dmg;
var hit;
var crit;
var selection;
var a;
var enemy;
var player;
var arm;
var playerName;
var display1 = document.getElementById("display1");
var display2 = document.getElementById("display2");
var display3 = document.getElementById("display3");
var playerDamage;
var playerArmor;

function hero(name,health,damage,armor){
	this.name = name;
	this.health = health;
	this.damage = damage;
	this.armor = armor;
}

var warrior = new hero(playerName, 100, dmg, arm);
var mage = new hero(playerName, 100, dmg, arm);
var thief = new hero(playerName, 100, dmg, arm);
var goblin = new hero("Goblin", 100, dmg, 2);
var ogre = new hero("Ogre", 100, dmg, 4);
var troll = new hero("Troll", 100, dmg, 8);

function startGame(){
var display1 = document.getElementById("display1");
var para = document.createElement("p");
para.setAttribute("id", "context");
display1.appendChild(para);	
var ctxt = document.getElementById("context");	
var display2 = document.getElementById("display2");	
var btn = document.getElementById("btn");	
btn.parentNode.removeChild(btn);	
ctxt.innerHTML=("Welcome noble champion to Battle Masters a turn based game. This game will allow you the player to choose one of three champion types to battle one of three various enemy types.  Each champion possesses two unique fighting styles and most of them can utilize armor to add protection from their enemy's attacks. Please click on the button to begin");
var button = document.createElement("button");
var node = document.createTextNode("Start Game");
var buttonText = button.appendChild(node);
display2.appendChild(button);
button.setAttribute("id", "Start");	
document.getElementById("Start").addEventListener("click", proceed);	
}

function proceed(){
var display2 = document.getElementById("display2");	
Start.parentNode.removeChild(Start);	
document.getElementById("context").innerHTML = "Before we can begin you will need to choose a Hero Class. The three different classes are warrior, magician, and a thief. Warriors are best at deffense, but can also provide some pretty good offense.  A magician doesn't wear armor, but with the potential damage their magic can make up for that indiscretioin. The thief provides a balance between the two where some armor can be worn, but the damage that can be done is also nothing short of an enigma with their chance to cause critical damage to an enemy";
var button = document.createElement("button");
var node = document.createTextNode("Warrior");
var buttonText = button.appendChild(node);
display2.appendChild(button);
button.setAttribute("id", "Warrior");	
document.getElementById("Warrior").addEventListener("click", describeWar);	
button = document.createElement("button");
node = document.createTextNode("Magician");
buttonText = button.appendChild(node);
display2.appendChild(button);
button.setAttribute("id", "Mage");	
document.getElementById("Mage").addEventListener("click", describeMag);	
button = document.createElement("button");
node = document.createTextNode("Thief");
buttonText = button.appendChild(node);
display2.appendChild(button);
button.setAttribute("id", "Thief");	
document.getElementById("Thief").addEventListener("click", describeTh);	
	
}
function describeWar(){
var x=document.getElementById("descr");
x.innerHTML = "";	
x.innerHTML="The warrior's proficiencies include: sword and shield or two-handed weapons and they can also wear all armor types.";	
document.getElementById("selection").disabled = false;
document.getElementById("selection").addEventListener("click", function() {
inputName();	
selectHero(1);
});	
}
function describeMag(){

var x=document.getElementById("descr");
x.innerHTML = "";	
x.innerHTML="The magician can specialize in one of two schools elemental or blood magic to wreck havoc on their foes.";	
document.getElementById("selection").disabled = false;
document.getElementById("selection").addEventListener("click", function() {
	inputName();
    selectHero(2);
});		
}
function describeTh(){
var x=document.getElementById("descr");
x.innerHTML = "";	
x.innerHTML="The thief is a sneaky person.";	
document.getElementById("selection").disabled = false;
document.getElementById("selection").addEventListener("click", function() {
    inputName();
	selectHero(3);
});	
}




function selectEnemy(a){
	if (a=== 1){
enemy = goblin;	
// random number 1-4		
dmg = Math.floor(Math.random() *4)+1;}
else if (a === 2){
enemy = ogre;	
dmg = Math.floor(Math.random() *6)+1;}	
else {
enemy = troll;
dmg = Math.floor(Math.random() *8)+1;
}
}
function selectHero(a){	
var display2 = document.getElementById("display2");	
var x=document.getElementById("descr");
x.innerHTML = "";
document.getElementById("selection").disabled = true;
document.getElementById("Warrior").disabled = true;	
document.getElementById("Mage").disabled = true;
document.getElementById("Thief").disabled = true;
Warrior.parentNode.removeChild(Warrior);	
Mage.parentNode.removeChild(Mage);
Thief.parentNode.removeChild(Thief);
var button = document.createElement("button");
var node = document.createTextNode("Option 1");
var buttonText = button.appendChild(node);
display2.appendChild(button);
button.setAttribute("id", "op1");
button.setAttribute("value", 1);	
button = document.createElement("button");
node = document.createTextNode("Option 2");
buttonText = button.appendChild(node);
display2.appendChild(button);
button.setAttribute("id", "op2");
button.setAttribute("value", 2);	
button = document.createElement("button");
node = document.createTextNode("Option 3");
buttonText = button.appendChild(node);
display2.appendChild(button);
button.setAttribute("id", "op3");
button.setAttribute("value", 3);	
document.getElementById("op3").disabled = true;

	
	if (a=== 1){
document.getElementById("tClass").innerHTML = "Warrior";
document.getElementById("tHealth").innerHTML = "100%";
warMerch();		

	}else if (a === 2){
document.getElementById("tClass").innerHTML = "Magician";
document.getElementById("tHealth").innerHTML = "100%";
magMerch();	

	}else {
document.getElementById("tClass").innerHTML = "Thief";
document.getElementById("tHealth").innerHTML = "100%";
thMerch();	

}
}
function inputName(){
	var name = prompt("Please enter your player's name", "Player");
    if (name !== null) { 
	playerName = name;
	}else if (name == null || name == " "){
	name = "Player";	
	playerName = name;	
	}
	document.getElementById("hideMe").style.display = "table";
	document.getElementById("tName").innerHTML = playerName;	
}
function attackType(){
	if(player== warrior){
		
	}else if (player==mage){
		
	}else{
		
	}
	
}
function warMerch(){
document.getElementById("context").innerHTML = "Welcome to my shop please select which weapon type you will be using in your upcoming battle <br> <br> Sword and shield fighting provides a better defense while the latter provides a better offense. <br> <br> Option 1: Sword and Shield <br> <br>  Option 2: Two-Handed Sword <br> ";
document.getElementById("op1").addEventListener("click", function() {
	
});			
	
}
function magMerch(){
document.getElementById("context").innerHTML ="Welcome to my shop please select a magic class to specialize in for your upcoming battle <br> <br> Elemental are more offensive then Blood Spells <br> <br> Option 1: Elemental <br> <br> Option 2: Blood";
			
}
function thMerch(){
document.getElementById("context").innerHTML = "Welcome to my shop please select which weapon type you will be using in your upcoming battle <br> <br> Daggers offer a quick way to apply damage and Bow's give you the advantage of range <br> <br> Option 1: Daggers <br> <br> Option 2: Bow and Arrow";
		
}
function warFight(a){
	
}		

function magFight(a){
	
}	

function thFight(a){
	
}

//applying dmg 
/*dmg = Math.floor(Math.random() *6)+1;}	1-6
  dmg = Math.floor(Math.random() *4)+1;}    1-4

*/



