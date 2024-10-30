
//excercise 1
function multiplyNumbers(){
    let num1 = parseInt(prompt("Enter the first number:"));
    let num2 = parseInt(prompt("Enter the second number:"));
  
    if (!isNaN(num1) && !isNaN(num2)) {
      let product = num1 * num2;
      console.log("The product of " + num1 + " and " + num2 + " is: " + product);
    } else {
      console.log("Please enter valid numbers.");
    }
  }

  // excercise 2
  function displayColors() {
    const colors = ["red", "green", "blue", "yellow", "purple"];

    for (let i = 0; i < colors.length; i++) {
      console.log(colors[i]);
    }
}

  //excercise
const student = {
    name: "Gabriel Noble",
    age: 20,
    course: "Computer Science"
  };
  
  function displayStudentInfo() {
    alert("Name: " + student.name + "\nCourse: " + student.course);
  }



  const  foodStuffs= ["beans", "rice","yam", ["oil", "spices", "seasoning"]];
   console.log("foodStuffs:", foodStuffs[3][1]);

   console.log ("foodStuffs:", foodStuffs[2])

   const nobleGab=["24", "student", "software developer",["not married", "tall", "lightskinned"]]
   console.log ("nobleGab:", nobleGab[2])
   console.log ("nobleGab:", nobleGab[0])
   console.log ("nobleGab:", nobleGab[3][0])
   console.log ("nobleGab:", nobleGab[3][2])


   let person= {
    name: "Sandra",
    age: 24,
    employed: true,
    isloggedIn: false,
    isStudent: "student",
    address: {
        country: "Nigeria",
        State: "Ogun",
        town: "Ilaro"

    }


   }
   
   console.log(person.address);
   console.log(person.isloggedIn);
   console.log(person.address.town);



   var boy = {
    name: "Peter",
    surname: "Pan",
    isStudent: "student",
    age: 17,
    address: {
      country: "Ghana",
      town: "Kumasi",
      houseNo:"27, Random street",
    },
    classMates: ["Jon", "Dan", "Paul", "Matthew"]

   }

   console.log(boy.name);
   console.log(boy ["address"] ["houseNo"]);
   console.log(boy.classMates[2]);
   



