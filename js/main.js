
var zodiac = [
{
	sign: "Aquarius",
	character: "Progressive, Original, Independent, Humanitarian",
	image: "img/aquarius.png"
},
{
	sign: "Aries",
	character: "Courageous, Determined, Confident, Enthusiastic, Optimistic, Honest, Passionate",
	image: "img/aries.png"
},
{
	sign: "Cancer",
	character: "Tenacious, Highly Imaginative, Loyal, Emotional, Sympathetic, Persuasive",
	image: "img/cancer.png"
},
{
	sign: "Capricorn",
	character: "Responsible, Disciplined, has great Self-Control, would be a Great Manager",
	image: "img/capricorn.png"
},
{
	sign: "Gemini",
	character: "Gentle, Affectionate, Curious, Adaptable, Quick learner",
	image: "img/gemini.png"
},
{
	sign: "Leo",
	character: "Creative, Passionate, Generous, Warm-Hearted, Humorous",
	image: "img/leo.png"
},
{
	sign: "Libra",
	character: "Cooperative, Diplomatic, Gracious, Fair-minded, Social",
	image: "img/libra.png"
},
{
	sign: "Pisces",
	character: "Compassionate, Artistic, Intuitive, Gentle, Wise, Musical",
	image: "img/pisces.png"
},
{
	sign: "Sagittarius",
	character: "Generous, Idealistic, Humorous",
	image: "img/sagittarius.png"
},
{
	sign: "Scorpio",
	character: "Resourceful, Brave, Passionate, Stubborn, a great friend",
	image: "img/scorpio.png"
},
{
	sign: "Taurus",
	character: "Reliable, Patient, Practical, Devoted, Responible, Stable",
	image: "img/taurus.png"
},
{
	sign: "Virgo",
	character: "Loyal, Analytical, Kind, Hardworking, Practical",
	image: "img/virgo.png"
}
];

var btn = document.getElementById("userinfo");
btn.addEventListener("keypress", function enterKey(e) {
	if(e.keyCode == 13) {
		getInfo();
	};
},	false);

function getInfo() {
	var userinfo = document.getElementById("userinfo");

	console.log(userinfo);
	console.log("users value is: " + userinfo.value);

	for(var i = 0; i < zodiac.length; i = i + 1) {

		console.log("users value lowercase is: " + userinfo.value.toLowerCase());

		console.log("current zodiac sign in loop is: " + zodiac[i].sign);

		if(userinfo.value.toLowerCase() === zodiac[i].sign.toLowerCase()) {
			console.log("if statement ran");

			console.log("users typed in: " + userinfo.value);
			console.log("current image value is: " + zodiac[i].image);
			console.log("current character value is: " + zodiac[i].character);

			document.getElementById("yourSign").textContent = userinfo.value;

			document.getElementById("zodiac").src = zodiac[i].image;
			
			document.getElementById("yourCharacter").textContent = ("These are your strenghts: " + zodiac[i].character);

			return;
		};

		console.log("no matches were found, user failed to type in correct zodiac sign");


		document.getElementById("yourSign").textContent = "Not one of the signs. Try again!";
		document.getElementById("zodiac").textContent = "";
		document.getElementById("yourCharacter").src = "";
	};
};














