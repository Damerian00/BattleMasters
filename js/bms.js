/* This JavaScript was developed by Patrick S. Price */

// variables for functons
	var dmg;
	var hit;
	var crit;
	var selection;
	var a;
	var enemy;
	var enemyDamage;
	var playerName;
	var display1;
	var display2;
	var display3;
	var playerDamage;
	var playerArmor;
	var playerHealth;
	var enemyHealth;
	var spec;
	var attackTypeOne;
	var attackTypeTwo;
	var playerName;
	var playerClass;
	var armor;
	var player;
	var ctxt;
	var val;
	var flag;
	var describels;
	var playerDefense;
	var enemyDefense;
	var mobility;
	var bonusDmg;
	var enemyAttack;
	var deBuff;
	var flagg;
	var enemyMobility;
	var totalPlayerDmg;
// major functions
function gameStart (){
	display1 = document.getElementById("display1");
	display2 = document.getElementById("display2");
	display3 = document.getElementById("display3");
	begining();
	totalPlayerDmg = 0;
}
function begining(){
//var display1 = document.getElementById("display1");
var para = document.createElement("p");
para.setAttribute("id", "context");
display1.appendChild(para);	
ctxt = document.getElementById("context");	
//var display2 = document.getElementById("display2");	
var btn = document.getElementById("btn");	
btn.parentNode.removeChild(btn);	
ctxt.innerHTML=("Welcome noble champion to Battle Masters a turn based game. This game will allow you the player to choose one of three champion types to battle one of three various enemy types.  Each champion possesses two unique fighting styles and most of them can utilize armor to add protection from their enemy's attacks. Please click on the button to begin");
var button = document.createElement("button");
var node = document.createTextNode("Start Game");
var buttonText = button.appendChild(node);
display2.appendChild(button);
button.setAttribute("id", "Start");	
document.getElementById("Start").addEventListener("click", choosing);	
	
}

function choosing(){
//var display2 = document.getElementById("display2");	
	
	Start.parentNode.removeChild(Start);	
	ctxt.innerHTML = "Before we can begin you will need to choose a Hero Class. The three different classes are warrior, magician, and a thief. Warriors are best at defense, but can also provide some pretty good offense.  A magician doesn't wear armor, but with the potential damage they can cause with their magic it sort of makes up for that minor indiscretion. The thief provides a balance between the two where some armor can be worn, but the damage that can be done is also nothing short of an enigma with their chance to cause fatal damage to an enemy";
	addButtons("Warrior","Warrior");
	document.getElementById("Warrior").addEventListener("click", describeWar);	
	button = document.createElement("button");
	addButtons("Mage","Magician");
	document.getElementById("Mage").addEventListener("click", describeMag);	
	addButtons("Thief","Thief");
	document.getElementById("Thief").addEventListener("click", describeTh);	
	description();
}
function description(){
document.getElementById("selection").addEventListener("click", function() {
		heroSelect(a);
		
	});
}
	
	
function describeWar(){
	var x=document.getElementById("descr");
	x.innerHTML = "";	
	x.innerHTML="The warrior's proficiencies include: sword and shield or two-handed weapons. They can also wear all armor types.";	
	document.getElementById("selection").disabled = false;
	a = 1;	
}
function describeMag(){
	var x=document.getElementById("descr");
	x.innerHTML = "";	
	x.innerHTML="The magician can specialize in one of two schools elemental or nature magic to wreck havoc on their foes. Due to their inate magical prowess they do not wear armor.";	
	document.getElementById("selection").disabled = false;
	a = 2;
}
															 
function describeTh(){
	var x=document.getElementById("descr");
	x.innerHTML = "";	
	x.innerHTML="The thief utilizes quick reflexes light or no armor and can use either a bow and arrow or daggers when fighting.";	
	document.getElementById("selection").disabled = false;
    a=3;
}

function addButtons(id,txt,val){
var button = document.createElement("button");
var node = document.createTextNode(txt);
var buttonText = button.appendChild(node);
display2.appendChild(button);
button.setAttribute("id", id);
button.setAttribute("value", val);	
}
// select hero	
function heroSelect(a){	
document.getElementById("Warrior").removeEventListener("click", describeWar);	
document.getElementById("Mage").removeEventListener("click", describeMag);	
document.getElementById("Thief").removeEventListener("click", describeTh);
Warrior.parentNode.removeChild(Warrior);	
Mage.parentNode.removeChild(Mage);
Thief.parentNode.removeChild(Thief);
inputName();	

var x=document.getElementById("descr");
x.innerHTML = "";
document.getElementById("selection").disabled = true;

	if (a=== 1){
playerClass = "Warrior";		
merch(1);		
	}else if (a === 2){
playerClass = "Magician";
merch(2);	
	}else {
playerClass = "Thief";
merch(3);	
}
	playerHealth = 100;
	document.getElementById("tClass").innerHTML = playerClass;
	document.getElementById("tHealth").innerHTML = playerHealth + "%";
}
//  naming character
function inputName(){
	var name = prompt("Please enter your player's name", "Player");
	playerName=name;
    if (name != null) { 
		if(name == ""){
			playerName = "Player";
		}
	}else{
	playerName = "Player";
	}
	document.getElementById("hideMe").style.display = "table";
	document.getElementById("tName").innerHTML = playerName;	
}
// choosing specialization
function merch(a){
	addButtons("op1", "Option 1");
	addButtons("op2", "Option 2");
	if (a===1){
		ctxt.innerHTML = "Welcome to my shop please select which weapon type you will be using in your upcoming battle <br> <br> Sword and shield fighting provides a better defense while the latter provides a better offense. <br> <br> Option 1: Sword and Shield <br> <br>  Option 2: Two-Handed Sword <br> ";
		document.getElementById("op1").addEventListener("click", function() {
		spec= "Sword and Shield";
		attackTypeOne = "Sword Slash";
		attackTypeTwo = "Shield Bash";
		op1.parentNode.removeChild(op1);
		op2.parentNode.removeChild(op2);
		armorSelect();
		});			
		document.getElementById("op2").addEventListener("click", function() {
			spec = "Two-Handed";
			attackTypeOne = "Two-handed Swing";
			attackTypeTwo = "Power Attack";
			op1.parentNode.removeChild(op1);
			op2.parentNode.removeChild(op2);
			armorSelect();
		});	
	
	}else if (a===2){
		ctxt.innerHTML ="Welcome to my shop please select a magic class to specialize in for your upcoming battle <br> <br> Elemental are more offensive then Nature Spells <br> <br> Option 1: Elemental <br> <br> Option 2: Nature";
		document.getElementById("op1").addEventListener("click", function() {
			spec="Elemental";
			attackTypeOne = "Fireball";
			attackTypeTwo = "Artic Freeze";
			op1.parentNode.removeChild(op1);
			op2.parentNode.removeChild(op2);
			armorSelect();
		});			
		document.getElementById("op2").addEventListener("click", function() {
			spec="Nature";
			attackTypeOne = "Wisp Bolt";
			attackTypeTwo = "Leech Health";
			op1.parentNode.removeChild(op1);
			op2.parentNode.removeChild(op2);
			armorSelect();
		});
	
	
	}else if (a===3){			
		ctxt.innerHTML = "Welcome to my shop please select which weapon type you will be using in your upcoming battle <br> <br> Daggers offer a quick way to apply damage and Bow's give you the advantage of range <br> <br> Option 1: Daggers <br> <br> Option 2: Bow and Arrow";
		document.getElementById("op1").addEventListener("click", function() {
			spec = "Dual Wielding Daggers";	
			attackTypeOne = "Dual Swipe";
			attackTypeTwo = "Sweet Spot";
			op1.parentNode.removeChild(op1);
			op2.parentNode.removeChild(op2);	
			armorSelect();	
		});			
		document.getElementById("op2").addEventListener("click", function() {
			spec = "Bow and Arrow";
			attackTypeOne = "Basic Shot";
			attackTypeTwo = "Stunning Shot";
			op1.parentNode.removeChild(op1);
			op2.parentNode.removeChild(op2);
			armorSelect();
		});	
	
	}
	
}

//select armor type 
function armorSelect(){
	document.getElementById("tSpec").innerHTML = spec;
			
		if (playerClass === "Warrior"){
		addButtons("arm1","Option 1", 1);
		addButtons("arm2","Option 2", 2);	
		addButtons("arm3", "Option 3", 3);	
		ctxt.innerHTML = "Now that you have decided on your weapon specialization you must choose one of three armor types to wear for your next battle. <br> <br> You have the choice of <br><br> Option 1: Heavy <br><br> Option 2: Light <br><br> Option 3: None";
		document.getElementById("arm1").addEventListener("click", function() {
			playerArmor = "Heavy";
			mobility = 0;
			armor = 4;
			enemySelect();
		});
		document.getElementById("arm2").addEventListener("click", function() {
			playerArmor = "Light";
			mobility = 1;
			armor = 3;
			enemySelect();
		});
		document.getElementById("arm3").addEventListener("click", function() {
			playerArmor = "None";
			enemySelect();
			mobility = 2;
			armor = 1;
		});
			
	}else if (playerClass === "Thief"){
		addButtons("arm2","Option 1", 1);
		addButtons("arm3", "Option 2", 2);
		ctxt.innerHTML = "Now that you have decided on your weapon specialization you have the choice of two armor types to wear for your next battle. <br> <br> You have the choice of <br><br> Option 1: Light <br><br> Option 2: None";
		document.getElementById("arm2").addEventListener("click", function() {
			playerArmor = "Light";
			mobility = 4;
			armor = 3;
			enemySelect();
		});
		document.getElementById("arm3").addEventListener("click", function() {
			playerArmor = "None";
			armor = 1;
			mobility = 5;
			enemySelect();
		});
		
	}else if (playerClass ==="Magician"){
		playerArmor = "None";
		enemySelect();
		armor = 0;
		mobility = 3;
	}	
}

//select enemy
function enemySelect(){
	enemyHealth = 100;
	describels = document.getElementById("descr");
		if (playerClass === "Thief"){
	arm2.parentNode.removeChild(arm2);	
	arm3.parentNode.removeChild(arm3);
		}else if (playerClass === "Warrior"){
	arm1.parentNode.removeChild(arm1);
	arm2.parentNode.removeChild(arm2);	
	arm3.parentNode.removeChild(arm3);	
	}
	addButtons("gob","Goblin");
	addButtons("ogre", "Ogre");
	addButtons("troll", "Troll");	
	ctxt.innerHTML = "Congratulations " + playerName + " for your selection of a " + playerClass+ " that specializes with " + spec + " now the time has come to choose your opponent to battle. <br><br> You may choose between a goblin, ogre, or troll.";
	document.getElementById("tArm").innerHTML = playerArmor;
	document.getElementById("gob").addEventListener("click", function() {
		enemy = "Goblin";
		enemyMobility = 4;
		describels.innerHTML="Enemy: " + enemy + "<br><br> Health: " + enemyHealth +"%";
		fighting();
});	
	document.getElementById("ogre").addEventListener("click", function() {
		enemy = "Ogre";
		enemyMobility = 2;
		describels.innerHTML="Enemy: " + enemy + "<br><br> Health: " + enemyHealth +"%";
		fighting();
});	
	document.getElementById("troll").addEventListener("click", function() {
		enemy = "Troll";
		enemyMobility = 0;
		describels.innerHTML="Enemy: " + enemy + "<br><br> Health: " + enemyHealth +"%";
		fighting();
});	
			enemyHealth=100;
}
//starts and resets fight
function fighting(){
	ctxt.innerHTML="";
	gob.parentNode.removeChild(gob);
	ogre.parentNode.removeChild(ogre);
	troll.parentNode.removeChild(troll);

	addButtons("attk1",attackTypeOne);
	addButtons("attk2",attackTypeTwo);
	document.getElementById("attk1").addEventListener("click", hitOne);
	document.getElementById("attk2").addEventListener("click", hitTwo);	
	flagg =1;
	playerAttack();
	flag = 1;
	bonusDmg = 0;
}
//est attck options
function playerAttack(){
	document.getElementById("tHealth").innerHTML = playerHealth + "%";
	if (flagg == 1){
		if (playerHealth >=0 & enemyHealth >=0){
			ctxt.appendChild(document.createElement("br"));	
			ctxt.appendChild(document.createTextNode("What means do you wish to use to vanquish your foe?"));
		}else{
			winLoss();
			
		}
	}
}

// option 1
function hitOne(){
	
	dmg =0;
	playerDamage = 0;
	ctxt.innerHTML= " ";
	var z = Math.floor(Math.random() *20)+1;
	var hit = 10 + enemyMobility;
		if (attackTypeOne ==="Fireball"){
				dmg = Math.floor(Math.random() *8)+1;
				playerDamage = dmg;
				dmg = Math.floor(Math.random() *8)+1;
				playerDamage = playerDamage + dmg;
			if (bonusDmg != 0){
				var c = bonusDmg;
				bonusDmg = Math.floor(Math.random() *3)+1;
				bonusDmg = bonusDmg + c;
				
			}else{
				bonusDmg = Math.floor(Math.random() *3)+1;	
			}
			playerDamage = playerDamage + bonusDmg;
			ctxt.appendChild(document.createElement("br"));
			ctxt.appendChild(document.createTextNode("A spark forms with in " + playerClass +"'s hand and then it soon forms into a ball of fire that is hurled at the " +enemy+ " setting the " + enemy + " ablaze causing " +playerDamage+ " points of damage which includes " +bonusDmg+ " points of burning damage."));
		}else if (attackTypeOne ==="Wisp Bolt"){
			dmg = Math.floor(Math.random() *6)+1;
			playerDamage = playerDamage + dmg; 
			ctxt.appendChild(document.createElement("br"));
			ctxt.appendChild(document.createTextNode("As you reach out with your hand a magical essence explodes from it towards the " + enemy + " hitting it almost instantly causing " + playerDamage + " points of damage to it."));
		}else{
			if (z >= hit){
				if (attackTypeOne ==="Sword Slash"){
					playerDamage =	Math.floor(Math.random() *8)+1;
					ctxt.appendChild(document.createElement("br"));
					ctxt.appendChild(document.createTextNode("Your strike the " + enemy + " with your long sword causing " + playerDamage +" points of damage to it's health."));
				}else if (attackTypeOne ==="Two-handed Swing"){
					playerDamage =	Math.floor(Math.random() *10)+1;
					ctxt.appendChild(document.createElement("br"));
					ctxt.appendChild(document.createTextNode("With your mighty GreatSword you swing at the " + enemy + " causing " + playerDamage +" points of damage to it's health."));
				}else if (attackTypeOne ==="Dual Swipe"){
					var d = Math.floor(Math.random() *4)+1;
					playerDamage = d;
					d = Math.floor(Math.random() *4)+1;
					playerDamage = playerDamage + d; 
					ctxt.appendChild(document.createElement("br"));
					ctxt.appendChild(document.createTextNode("Brandishing your dual daggers you swipe at the  " + enemy + " causing " +playerDamage+ " points of damage to it."));
				}else if (attackTypeOne ==="Basic Shot"){
					playerDamage =	Math.floor(Math.random() *6)+1;
					ctxt.appendChild(document.createElement("br"));
					ctxt.appendChild(document.createTextNode("Skillfully your knock your arrow then release it at the " + enemy + "  causing " + playerDamage +" points of damage to it's health."));
				}
			}else{
				ctxt.appendChild(document.createElement("br"));
				ctxt.appendChild(document.createTextNode("Your attack was not successful."));
				playerDamage=0;
			}
		} 
			totalPlayerDmg = totalPlayerDmg + playerDamage;
			enemyHealth = enemyHealth - playerDamage;
			enemyAttack(1);
			flag = 1;
}
//option 2
function hitTwo(){
	ctxt.innerHTML= " ";
	if (flag = 1){
	if (attackTypeTwo ==="Shield Bash"){
		flag = 0;
		dmg = Math.floor(Math.random() *4)+1;
		ctxt.appendChild(document.createElement("br"));
		ctxt.appendChild(document.createTextNode("Quickly you bash your enemy with your shield which stuns them, however you will need to wait before attempting it again. You caused " + dmg + " points of damage to the " + enemy+ "."));
		//ctxt "Quickly you bash your enemy with your shield which stuns them for a turn, but saps your strength some which will require some time to replenish causing ";
		document.getElementById("attk2").disabled = true;
		 
	}else if (attackTypeTwo ==="Power Attack"){
		flag = 0;
		document.getElementById("attk2").disabled = true;
		dmg = Math.floor(Math.random() *20)+10;
		if (bonusDmg != 0){
				var c = bonusDmg;
				bonusDmg = Math.floor(Math.random() *3)+1;
				bonusDmg = bonusDmg + c;
				
			}else{
				bonusDmg = Math.floor(Math.random() *3)+1;	
			}
		ctxt.appendChild(document.createElement("br")); 
		ctxt.appendChild(document.createTextNode("You leap into the air and come down with a powerful blow upon the " + enemy + " causing " + dmg + " points of damage and making them bleed out for " + bonusDmg + " points of damage"));
		
	}else if (attackTypeTwo ==="Artic Freeze"){
		flag = 0;
		bonusDmg = 0;
		ctxt.appendChild(document.createElement("br"));
		ctxt.appendChild(document.createTextNode("By concentrating on the molecules in the air you manage to lower the temperature causing them to crystalize around the " + enemy +"."));
		document.getElementById("attk2").disabled = true;
		dmg = Math.floor(Math.random() *6)+4; 
	}else if (attackTypeTwo ==="Leech Health"){
		flag = 0;
		document.getElementById("attk2").disabled = true;
		dmg = Math.floor(Math.random() *10)+4; 
		bonusDmg = Math.round(dmg*1.1);
		ctxt.appendChild(document.createElement("br"));
		ctxt.appendChild(document.createTextNode("Through some concentration you have managed to sap the life force from your enemy and you transfered " + bonusDmg + " to yourself also causing " + dmg + " points of damage to the " + enemy + "."));
		playerHealth = playerHealth + bonusDmg;
		if (playerHealth > 100){
			playerHealth = 100;
		}
	}else if (attackTypeTwo ==="Sweet Spot"){
		flag = 0;
		document.getElementById("attk2").disabled = true;
		dmg = Math.floor(Math.random() *12)+8;
		if (bonusDmg != 0){
				var c = bonusDmg;
				bonusDmg = Math.floor(Math.random() *3)+1;
				bonusDmg = bonusDmg + c;
				
			}else{
				bonusDmg = Math.floor(Math.random() *3)+1;	
			}
		ctxt.appendChild(document.createElement("br"));
		ctxt.appendChild(document.createTextNode("Every foe you face has a sweet spot allowing you to to cause some serious damage. You caused " + dmg + " points of damage and the " + enemy + " is bleeding causing additional " + bonusDmg + " points of damage."));
	} else if (attackTypeTwo ==="Stunning Shot"){
		flag = 0;
		dmg = Math.floor(Math.random() *4)+1;
		ctxt.appendChild(document.createElement("br"));
		ctxt.appendChild(document.createTextNode("You quickly blunt your arrow head so that it's purpose is to stun and not kill, but prepping your arrows for this takes time to make. You caused " + dmg + " to the " + enemy + "."));
		document.getElementById("attk2").disabled = true;
	}
		
	} 
		playerDamage = dmg + bonusDmg;
		totalPlayerDmg = totalPlayerDmg + playerDamage;
		enemyHealth = enemyHealth - playerDamage;
		enemyAttack(2);
}

function enemyAttack(a){
	if (enemy === "Goblin"){
		enemyDamage = Math.floor(Math.random() *5)+1;
	}else if (enemy === "Ogre"){
		enemyDamage = Math.floor(Math.random() *15)+5;
	}else if (enemy=== "Troll"){
		enemyDamage = Math.floor(Math.random() *20)+10;
			}
	if (armor > 0){
		enemyDamage = enemyDamage - armor;	
	}
	document.getElementById("tHealth").innerHTML = playerHealth + "%";
	describels.innerHTML="Enemy: " + enemy + "<br><br> Health: " + enemyHealth +"%";
	if (a== 2){
		if (attackTypeTwo ==="Shield Bash" || attackTypeTwo ==="Artic Freeze"|| attackTypeTwo ==="Stunning Shot"){
		if (attackTypeTwo ==="Shield Bash"){
		ctxt.appendChild(document.createElement("br"));
		ctxt.appendChild(document.createTextNode("Thanks to your shield bash technique the " + enemy + " is to busy seeing stars to retaliate at the moment."));
			
	}else if (attackTypeTwo ==="Artic Freeze"){
		ctxt.appendChild(document.createElement("br"));
		ctxt.appendChild(document.createTextNode("The " + enemy + " is frozen in place and will be spending its time trying to free itself to bad the extreme cold temperature negates any bonus fire damage."));
	} else if (attackTypeTwo ==="Stunning Shot"){
		ctxt.appendChild(document.createElement("br"));
		ctxt.appendChild(document.createTextNode("That well blunted arrow put the " + enemy + " in a state of disarray preventing it from taking action at this time."));
	}	
		deBuff =100;
		}else{
		deBuff = 2;
		}
		document.getElementById("attk2").disabled = true;
	}else{
		deBuff = 0;
		
	}
	 if (deBuff == 100){
		ctxt.appendChild(document.createElement("br"));	
		ctxt.appendChild(document.createTextNode("The " + enemy +" is unable to attack you."));
		document.getElementById("attk2").disabled = true;
		enemyDamage = 0;
	}else{
		var z = Math.floor(Math.random() *20)+10;
		hit = mobility + deBuff;
		hit = hit + 10;	
			if (hit <= z){
				if (enemyDamage <= 0){
			ctxt.appendChild(document.createElement("br"));	
			ctxt.appendChild(document.createTextNode("The " + enemy +" attacks, but all the damage is absorbed by your armor."));
			enemyDamage=0;	
				}else{				
			ctxt.appendChild(document.createElement("br"));	
			ctxt.appendChild(document.createTextNode("The " + enemy +" attacks and causes " + enemyDamage +" damage to you."));
				}
			}else{
			ctxt.appendChild(document.createElement("br"));	
			ctxt.appendChild(document.createTextNode("The " + enemy + " swings at you, but fails to hit. Lucky you!!!..."));
			enemyDamage = 0;
			}	
		if (flag == 1){
			document.getElementById("attk2").disabled = false;
		}
	}
	playerHealth = playerHealth - enemyDamage;
	playerAttack();
}
	
function winLoss(){
	if (playerHealth <= 0){
		document.getElementById("tHealth").innerHTML ="Dead";
		ctxt.innerHTML= "You have been defeated. But do not fret as you did " +totalPlayerDmg + " points of damage to the " + enemy +". Do you wish to try again?";
		attk1.parentNode.removeChild(attk1);
		attk2.parentNode.removeChild(attk2);
		addButtons("restart", "Play Again");
	}else if (enemyHealth <=0){
		describels.innerHTML="Enemy: " + enemy + "<br><br> Health: Vanquished";
		ctxt.innerHTML= "Congratulations you are victorious and you did " + totalPlayerDmg + " points of damage to the " + enemy +". Would you like to play again?";
		attk1.parentNode.removeChild(attk1);
		attk2.parentNode.removeChild(attk2);
		addButtons("restart", "Play Again");
		
	}
	document.getElementById("restart").addEventListener("click", function(){
		window.location.reload();
	});
	
}	

	


//applying dmg 
/*dmg = Math.floor(Math.random() *6)+1;}	1-6
  dmg = Math.floor(Math.random() *4)+1;}    1-4
*/



