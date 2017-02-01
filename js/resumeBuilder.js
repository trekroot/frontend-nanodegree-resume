console.log("sup?");
var firstName = "Travis";
var lastName = "Kroot";
var name = firstName + " " + lastName;
var role = "Junior Developer";
console.log(name);
var emailIdexx = "travis-kroot@idexx.com"
var awesomeThoughts = "I am Travis and I am AWESOME";
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
console.log(funThoughts);
$('#main').append(funThoughts);
var formattedName = HTMLheaderName.replace("%data%", name);
$('#header').append(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$('#header').append(formattedRole);
