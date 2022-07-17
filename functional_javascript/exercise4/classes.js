let person = {
	personName : "David Rayy", 
	age : "12", 
	get greeting(){
		console.log(`Greetings, my name is ${personName} and I am ${age} years old.`)
	},
	get salute(){
		console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!")
	}
};

console.log(person)

let student = {
	__proto__: person,
	major: "Physics",
	get greeting(){
		return `${this.personName} and I major in ${this.major}`
	}
};

console.log("Student: "+student)
console.log(student.greeting)
student.salute


let professor = {
	__proto__: person,
	personName: "Charles Dex",
	department: "Life Sciences",
	get greeting(){
		return `Good day, my name is ${this.personName} and I am in the ${this.department} department `
	}
};

console.log("Professor: "+professor)
console.log(professor.greeting)
professor.salute

// Part 2

// function person(name, age){
// 	this.name = name;
// 	this.age = age;
// 	this.greeting = greeting
// 	this.salute = salute

// 	function greeting(){
// 		return `Greetings, my name is ${this.name} and I am ${this.age} years old.`
// 	}

// 	function salute(){
// 		return "Good morning!, and in case I dont see you, good afternoon, good evening and good night!"
// 	}

// }


// let person1 = new person("Kwame", 18)
// console.log(person1.greeting)

// let student = new person("Kwadwo", 27)
// student.major = "Math"
// student.greeting = function() {
// 	console.log(`${student.name} and I major in ${student.major}`)
// }

// console.log(student.greeting)
// console.log(student.salute)



// let professor = new person("Carl", 43)
// professor.department = "Science"
// professor.greeting= function(){
// 	return `Good day, my name is ${this.name} and I am in the ${this.department} department `
// }
// console.log(professor.greeting)
// console.log(professor.salute)