var quotes = [	"Be yourself; everyone else is already taken.",
	"Two things are infinite: the universe and human stupidity; and I am not sure about the universe.",
	"You know you are in love when you can\'t fall asleep because reality is finally better than your dreams.",
	"Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself . . .'",
	"Don’t walk in front of me… I may not follow, Don’t walk behind me… I may not lead, Walk beside me… just be my friend.",
	"No one can make you feel inferior without your consent. ",
	"A friend is someone who knows all about you and still loves you.",
	"Live as if you were to die tomorrow. Learn as if you were to live forever.",
	"In order to succeed, we must first believe that we can.",
	"Keep your eyes on the stars, and your feet on the ground.",
	"Always do your best. What you plant now, you will harvest later.",
	"It always seems impossible until it's done."
];

var author = [ "Oscar Wilde.",
	"Albert Einstein.",
	"Dr. Seuss.",
	"C.S. Lewis.",
	"Albert Camus.",
	"Eleanor Roosevelt.",
	"Elbert Hubbard.",
	"Mahatma Gandhi.",
	"Nikos Kazantzakis.",
	"Theodore Roosevelt.",
	"Og Mandino.",
	"Nelson Mandela."
];


var color = ["#b2dfee", "#6dc066", "#ffd264", "#f17c67", "#7575a3", "#aa7286", "#32a2a2"];

$("#text").html(quotes[0]);
$("#author").html(author[0]);
document.body.style.backgroundColor = color[0];

$("#new_quote").on( "click", function () {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	var randomColor = Math.floor(Math.random() * (color.length));
		$("#text").html(quotes[randomNumber]).fadeOut("400").fadeIn("400");
		$("#author").html(author[quotes.indexOf(quotes[randomNumber])]).fadeOut("400").fadeIn("400");
		$(document.body).css("background-color", color[randomColor]);
});
