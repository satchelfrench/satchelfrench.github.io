
var phrases = [ 
"Happy Valentines Day!",
"Happy Valentines Day!",
"Happy Valentines Day!",
"You're pretty!",
"I'll love you always",
"2 Years (almost) and many more to go :)",
"I'm on cloud 7 when I'm with you! LOL",
"Kitty!",
"Boo!",
"You're sweet. :)",
"You have the most stunning teeth!",
"You're my favorite person!",
"Today is your day!",
"You're like the puppy of people!",
"You're extra cute today!",
"You go girl! - Shiva",
"Kefak Hayati?",
"You don't even need makeup",
"Nice butt.",
"You make my day, everyday.",
"Is there a mirror in your pocket?",
"Me love you long time.",
"You're the Monica to my Chandler.",
"You're my lobster!",
"You're the Pam to my Jim.",
"I love you.",
"You're my sunshine."
];


// fuction to get random index
function getRandomIndex() {
	return Math.round(Math.random() * (phrases.length -1)); 
}

// No repeating random indexes!!
function getCompliment() {

	var index = getRandomIndex();

	// Create clear html inside textDisplay, and append new to DOM
	var node = document.getElementById("textDisplay");
	node.innerHTML = '';
	node.innerHTML = '<p>' + phrases[index] + '</p>';
	console.log(phrases[index])

};

// Listen for click on button	
document.getElementById("generateCompliment").addEventListener("click", getCompliment);

