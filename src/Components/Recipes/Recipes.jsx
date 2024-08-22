import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import Cook from "../Cook/Cook";

const Recipes = ({addToCookingList, cookingList}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("recipes.json")
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);
    return (
        <div className="flex gap-10 items-start">
            <div className="grid grid-cols-2 gap-24">
                {
                    recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe} addToCookingList={addToCookingList}></Recipe>)
                }
            </div>
            <Cook cookingList={cookingList}></Cook>
        </div>
    );
};

export default Recipes;