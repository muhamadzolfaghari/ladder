import inquirer from "inquirer";

const {name} = await inquirer.prompt([
	{
		type: "input",
		name: "name",
		message: "What is your name?",
	},
]);

const {gender} = await inquirer.prompt([
	{
		type: "list",
		name: "gender",
		message: "What is your gender?",
		choices: [
			{name: "Female", value: "female"},
			{name: "Male", value: "male"},
		],
	}
]);


console.log(name, gender)