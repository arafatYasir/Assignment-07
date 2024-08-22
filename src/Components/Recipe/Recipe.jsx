import "./Recipe.css"
import { FaRegClock } from "react-icons/fa6";
import { FaFireAlt } from "react-icons/fa";


const Recipe = ({ recipe, addToCookingList }) => {
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;
    const [first, second, third] = ingredients;
    return (
        <div className="border-2 max-w-96 rounded-2xl p-6">
            <div className="">
                {/* image */}
                <img className="h-52 w-96 rounded-2xl mb-6" src={recipe_image} alt="" />

                {/* recipe details */}
                <h2 className="text-2xl font-semibold mb-4 text-[#282828]">{recipe_name}</h2>
                <p className="text-lg text-[#878787] mb-4">{short_description}</p>
                <hr />
                <h3 className="text-xl font-medium text-[#282828] mt-6">Ingredients: {ingredients.length}</h3>

                {/* ingredients */}
                <ul className="my-4 text-[#878787] decoration">
                    <li className="ingredients">{first}</li>
                    <li className="ingredients">{second}</li>
                    <li className="ingredients">{third}</li>
                </ul>

                <hr />

                {/* time and calories */}
                <div className="my-6 flex gap-5">
                    {/* Preparing Time */}
                    <div className="flex items-center gap-2">
                        <FaRegClock />
                        <p className="text-[#282828]">{preparing_time} minutes</p>
                    </div>
                    {/* Calories */}
                    <div className="flex items-center gap-2">
                        <FaFireAlt />
                        <p className="text-[#282828]">{calories} calories</p>
                    </div>
                </div>

                {/* Cook btn */}
                <button onClick={() => addToCookingList(recipe)} className="bg-[#0BE58A] text-black text-xl font-semibold rounded-full px-7 py-3">Want to Cook</button>
            </div>
        </div>
    );
};

export default Recipe;