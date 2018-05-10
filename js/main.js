
var zodiac = [
{
	sign: "aquarius",
	character: "funny",
	image: "img/aquarius.png"
},
{
	sign: "aries",
	character: "funny",
	image: "img/aries.png"
},
{
	sign: "cancer",
	character: "funny",
	image: "img/cancer.png"
},
{
	sign: "capricorn",
	character: "funny",
	image: "img/capricorn.png"
},
{
	sign: "gemini",
	character: "funny",
	image: "img/gemini.png"
},
{
	sign: "leo",
	character: "funny",
	image: "img/leo.png"
},
{
	sign: "libra",
	character: "funny",
	image: "img/libra.png"
},
{
	sign: "pisces",
	character: "funny",
	image: "img/pisces.png"
},
{
	sign: "sagittarius",
	character: "funny",
	image: "img/sagittarius.png"
},
{
	sign: "scorpio",
	character: "funny",
	image: "img/scorpio.png"
},
{
	sign: "taurus",
	character: "funny",
	image: "img/taurus.png"
},
{
	sign: "virgo",
	character: "funny",
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

		if(userinfo.value.toLowerCase() === zodiac[i].sign) {
			console.log("if statement ran");

			console.log("users typed in: " + userinfo.value);
			console.log("current image value is: " + zodiac[i].image);
			console.log("current character value is: " + zodiac[i].character);

			document.getElementById("yourSign").textContent = userinfo.value;

			document.getElementById("zodiac").src = zodiac[i].image;
			
			document.getElementById("yourCharacter").textContent = ("Your best attributes are: " + zodiac[i].character);

			return;
		};

		console.log("no matches were found, user failed to type in correct zodiac sign");


		document.getElementById("yourSign").textContent = "Not one of the signs. Try again!";
		document.getElementById("zodiac").textContent = "";
		document.getElementById("yourCharacter").src = "";
	};
};














