/*

mon => 7am
tue - thurs => 4am
fri => 9am
sat - sun => 8am

*/

let day = "Monday";

switch(day){
	case "Monday":
		console.log("Wake up at 7am");
		break;

	case "Tuesday":
	case "Wednesday":
	case "Thursday":
		console.log("Wake up at 4am");
		break;

	case "Friday":
		console.log("Wake up at 9am");
		break;

	case "Saturday":
	case "Sunday":
		console.log("Wake up at 8am");
		break;
}

console.log("GOOD MORNING 🌞");