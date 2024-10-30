console.log("Dom Array");

// push & pop method

var movies= ["avatar", "Mwogli", "Xena", "Nobody"]

movies.push("Spartacus"); // Adds one or more items at the end of an array

console.log("pushed items", movies);

const subjects= ["Maths", "English","Geology", "Biology", "PHE"]

subjects.pop("4"); // removes an item at the end of an array

console.log("popped items", subjects);


// shift method

let boys1= ["Ben", "Prince", "Patrick", "Jeff", "Oliver"]

boys1.shift();

console.log("shifted item", boys1); // Removes the first item in the array!

// unshift method

let boys2= ["Ben", "Prince", "Patrick", "Jeff", "Oliver"]

boys2.unshift("Brad");

console.log("unshifted item", boys2); // adds an item at the beginning of the array


 // .length method
console.log(boys2.length)  // shows the length of an array


// .splice method
let groceries= ["Bread", "carrots", "butter", "chips", "biscuits", "notebook", "cake", "onions"]

let groceries2=groceries.splice(2, 4,); 

console.log(groceries); // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(groceries2)

// .slice method
let groceries1= ["Bread", "carrots", "butter", "chips", "biscuits", "notebook", "cake", "onions"]

let groceries4=groceries.slice(2, 4,); 

console.log(groceries); // returns a copy of an array by displaying only the items within decl scope
console.log(groceries1)


// .concat method
const fruits= ['mango', 'orange', 'apple'] 
const people= ['Dom', 'peter', 'Fave']
const morePeople=['vitalis', 'tever', 'bem']
const allPeople= morePeople.concat(people, fruits); // Combines two or more arrays. This method returns a new array without modifying any existing arrays.

 console.log(allPeople);

// .join method
 const girls= ["mary","amina", "sewe", "joy", "queen", "amina", "manasseh", "jessica"]
 const allGirls= girls.join(", ");
 console.log(allGirls);

 // .indexOf method
function findGirl(girl){
    return girls.indexOf(girl); //Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
}

console.log(findGirl("sewe")); // returns the index of sewe from the first occurrence
console.log(findGirl("jessica"));
console.log(findGirl("queen"));
console.log(findGirl("joy"));
console.log(findGirl("manasseh"));
console.log(findGirl("amina"));


function reverseFindGirl(girl){
    return girls.lastIndexOf(girl); //Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.


}

console.log(reverseFindGirl("mary"));  // will return the index mary from the last occurrence
console.log(reverseFindGirl("amina"));




let contacts = [];
let editingIndex = - 1;

function addContact() {
    let name= document.getElementById ("name").value;
    let phone= document.getElementById ("phone").value;

    document.getElementById ("nameWarning").innerText ="";
    document.getElementById ("phoneWarning").innerText ="";


    if (!name) {
        document.getElementById ("nameWarning").innerText ="name can not be empty!";
    }


    if (!phone) {
    document.getElementById ("phoneWarning").innerText ="phone can not be empty!";
}
    if (name && phone) {
        if (editingIndex === - 1) {
            //Add contact
            contacts.push ({name, phone});
        }else {
            // updating existing contact
            contacts[editingIndex] = {name, phone};
            editingIndex = -1;
        
        }
            

        document.getElementById ("nameWarning").innerText ="";
        document.getElementById ("phoneWarning").innerText ="";
        displayContacts();

    }
}


        function displayContacts(){
            let contactList = document.getElementById('contactList');
            let emptyState = document.getElementById('emptyState');

            contactList.innerHTML = "";

            if (contacts.length === 0) {
                emptyState.style.display = "block";
                contactList.style.display = "none";
            } else {
                emptyState.style.display = "none";
                contactList.style.display = "block";
                contacts.forEach ((contact, index) => {
                    let listItem = document.createElement ('li');
                    listItem.innerHTML =`
                    <div class="contact-info">
                    <span class="contact-name">${contact.name}</span>
                    <span>${contact.phone}</span>
                    </div>
                    <button class="edit-btn"
                    onclick="editContact {()=>(${index})}">Edit</button>
                    <button class="delete-btn"
                    onclick="deleteContact {()(${index})}">Delete</button>

                    `;
                    contactList.appendChild(listItem);
                }

                );
            }
        }

        function editContact (index) {
            let contact = contacts [index];

            document.getElementById("name").value = contact.name;
            document.getElementById("phone").value = contact.phone;
            editingIndex = index;

        }

        function deleteContact (index) {
            contacts.splice(index, 1);
            displayContacts();

        }

        // Initial display
        displayContacts();







