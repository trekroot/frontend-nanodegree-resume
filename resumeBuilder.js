console.log("sup?");
var firstName = "Travis";
var lastName = "Kroot";
var skills = ["Basic JavaScript", "MS Office"]
var emailIdexx = "travis-kroot@idexx.com"
var awesomeThoughts = "I am Travis and I am AWESOME";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

// var formattedName = HTMLheaderName.replace("%data%", name);
// var formattedRole = HTMLheaderRole.replace("%data%", role);


var bio = {
	"name": "Travis Kroot",
	"role": "Software Quality Assurance",
	"contactInfo": {
		"mobile": "207-233-3995",
		"email": emailIdexx,
		"github": "trekroot",
		"location": "Portland, ME"
	},
	"skills": ["Breaking Stuff", "QA King", "MS Office", "JavaScript"],
	"pictureURL": "images/travis_kroot.jpg",
	"welcomeMessage": "Hello World! Welcome to my not yet awesome Resume!"
}

var work = {}
work.position = "Software Testing Analyst I";
work.employer = "IDEXX";
work.duration = "2.5 Years";
work.city = "Westbrook, ME";

// var education = {};
education["university"] = "University of Rochester";
education["years"] = "2007-2011";
education["cityState"] = "Rochester, NY";

console.log(bio.contactInfo.email);
console.log(bio["role"]);
$('#header').append(HTMLheaderName.replace("%data%", bio.name));
$('#header').append(HTMLheaderRole.replace("%data%", bio.role));
$('#header').prepend(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
$('#lets-connect').append(HTMLmobile.replace("%data%", bio.contactInfo.mobile));
$('#lets-connect').append(HTMLemail.replace("%data%", bio.contactInfo.email));
$('#lets-connect').append(HTMLgithub.replace("%data%", bio.contactInfo.github));
$('#lets-connect').append(HTMLlocation.replace("%data%", bio.contactInfo.location));
$('#main').append(HTMLbioPic.replace("%data%", bio.pictureURL));
// console.log(bio("contactInfo"));