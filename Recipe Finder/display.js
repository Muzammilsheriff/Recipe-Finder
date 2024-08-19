export function displayRecipes(recipes) {
    const tableBody = document.querySelector('#recipeTable tbody');
    tableBody.innerHTML = ''; // Clear any existing rows
  
    recipes.map(recipe => {
      const row = document.createElement('tr');
  
      // Create a cell for the title
      const titleCell = document.createElement('td');
      titleCell.textContent = recipe.title;
      row.appendChild(titleCell);
  
      // Create a cell for the ingredients
      const ingredientsCell = document.createElement('td');
      ingredientsCell.textContent = recipe.ingredients.join(', ');
      row.appendChild(ingredientsCell);
  
      // Create a cell for the instructions
      const instructionsCell = document.createElement('td');
      instructionsCell.textContent = recipe.instructions;
      row.appendChild(instructionsCell);
  
      // Append the row to the table body
      tableBody.appendChild(row);
    });
  }