// Array to hold registered pets
let pets = [
    {
        name: "Buddy",
        age: 5,
        gender: "Male",
        service: "Bath & Grooming",
        breed: "Labrador Retriever"
    },
    {
        name: "Molly",
        age: 3,
        gender: "Female",
        service: "Haircut & Styling",
        breed: "Poodle"
    },
    {
        name: "Max",
        age: 2,
        gender: "Male",
        service: "Nail Trimming",
        breed: "German Shepherd"
    }
];

// Function to display registered pets count
function displayPetCount() {
    const countElement = document.getElementById("count");
    countElement.textContent = pets.length;
}

// Function to display pet names
function displayPetNames() {
    const namesList = document.getElementById("namesList");
    namesList.innerHTML = ""; // Clear existing list

    pets.forEach(pet => {
        const listItem = document.createElement("li");
        listItem.textContent = pet.name;
        namesList.appendChild(listItem);
    });
}

// Call functions to initialize the display
displayPetCount();
displayPetNames();

