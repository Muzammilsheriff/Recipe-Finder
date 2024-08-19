
import { fetchRecipes } from './api.js';

import {displayRecipes} from './display.js'

export async function getRecipes(ingredients) {
  const recipes = await fetchRecipes(ingredients);
  console.log(recipes);
  
  displayRecipes(recipes)
}
