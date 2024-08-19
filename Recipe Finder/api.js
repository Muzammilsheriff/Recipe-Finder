// api.js (a module)
export async function fetchRecipes(ingredients) {
  try {
    // Fetching the JSON file from the parent folder
    const response = await fetch("./api.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the JSON data
    const data = await response.json();
    // Filter or find specific recipes
    const specificRecipes = filterRecipesByIngredient(
      data.recipes,
      ingredients
    );

    return specificRecipes;
    console.log(specificRecipes);
  } catch (error) {
    console.error("Failed to fetch recipes:", error);
  }
}


function filterRecipesByIngredient(recipes, ingredients) {
  console.log('Ingredients:', ingredients);

  if (!Array.isArray(ingredients)) {
    throw new Error('Ingredients must be an array');
  }

  return recipes.filter(recipe =>
    ingredients.every(ingredient => recipe.ingredients.includes(ingredient))
  );
}

