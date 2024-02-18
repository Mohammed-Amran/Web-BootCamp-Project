document.addEventListener("DOMContentLoaded", function() {
    // Function to add a new food section
    function addFoodSection() {
        var main = document.getElementById("new1");

        // Create section element
        var section = document.createElement("section");
        section.classList.add("sec-food");

        // Create input for food name
        var foodNameInput = document.createElement("input");
        foodNameInput.type = "text";
        foodNameInput.placeholder = "Enter food name";
        foodNameInput.classList.add("food-name-input");

        // Create input for food image URL
        var foodImageInput = document.createElement("input");
        foodImageInput.type = "text";
        foodImageInput.placeholder = "Enter image URL";
        foodImageInput.classList.add("food-image-input");

        // Create button to add the food
        var addButton = document.createElement("button");
        addButton.textContent = "Add Food";
        addButton.classList.add("add-food-button");

        // Add event listener to the button
        addButton.addEventListener("click", function() {
            var foodName = foodNameInput.value;
            var imageUrl = foodImageInput.value;

            // Create h3 element for food name
            var foodNameElement = document.createElement("h3");
            foodNameElement.textContent = foodName;

            // Create img element for food image
            var foodImageElement = document.createElement("img");
            foodImageElement.src = imageUrl;

            // Append food name and image to the section
            section.appendChild(foodNameElement);
            section.appendChild(foodImageElement);

            // Clear input fields
            foodNameInput.value = "";
            foodImageInput.value = "";

            // Hide the input fields and button
            foodNameInput.style.display = "none";
            foodImageInput.style.display = "none";
            addButton.style.display = "none";
        });

        // Append input fields and button to the section
        section.appendChild(foodNameInput);
        section.appendChild(foodImageInput);
        section.appendChild(addButton);

        // Append the new section to the main element
        main.appendChild(section);
    }

    // Add event listener to a button or any element to trigger the addition of a new food section
    var addButton = document.getElementById("add-food-button");
    addButton.addEventListener("click", addFoodSection);
});
