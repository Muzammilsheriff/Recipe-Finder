import { getRecipes } from "./main.js";

document.getElementById("searchButton").addEventListener("click", () => {
  const userInput = document.getElementById("ingredientInput").value;
  const ingredientsArray = convertUserInputToArray(userInput);

    console.log(ingredientsArray);
    
  getRecipes(ingredientsArray);
});

function convertUserInputToArray(userInput) {
  // Trim any extra spaces and split the string by commas
  return userInput
    .split(",")
    .map((ingredient) => ingredient.trim())
    .filter(Boolean);
}
