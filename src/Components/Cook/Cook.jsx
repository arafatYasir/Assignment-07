import { useState } from "react";

const Cook = ({ cookingList, currentlyCooking, addTocurrentlyCookingList }) => {
    let time = 0, calories = 0;

    for(const recipe of currentlyCooking) {
        time = time + recipe.preparing_time;
        calories = calories + recipe.calories;
    }

    return (
        <div className="border-2 rounded-2xl h-[685px]">
            <h2 className="text-2xl font-semibold mb-4 text-center mt-8 lg:mx-40">Want to cook: {cookingList.length}</h2>
            <hr className="mx-16" />

            {/* Want to cook table {flex} */}
            <div>
                <div className="text-[#878787] text-xl font-medium flex gap-20 mt-6 mx-16">
                    <p>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                </div>
                <div className="bg-[#2828281b] mt-4 text-[#282828be]">
                    {
                        cookingList.map((cook, indx) => <div key={indx} className="flex ml-6 items-center">
                            <span className="text-lg font-semibold mr-6">{indx + 1}</span>
                            <div className="flex gap-8 items-center">
                                <p className="mr-6 text-lg">{cook.recipe_name}</p>
                                <p className="mr-6 text-lg">{cook.preparing_time}<br /> minutes</p>
                                <p className="text-lg">{cook.calories}<br />Calories</p>
                                <button onClick={() => addTocurrentlyCookingList(cook)} className="px-4 py-2 rounded-full bg-[#0BE58A] text-xl font-medium text-black">Preparing</button>
                            </div>

                        </div>)
                    }
                </div>
            </div>

            {/* Currently cooking table {flex} */}
            <h2 className="text-2xl font-semibold mb-4 text-center mt-8 lg:mx-40">Currently Cooking: {currentlyCooking.length}</h2>
            <hr className="mx-16" />
            <div>
                <div className="text-[#878787] text-xl font-medium flex gap-20 mt-6 mx-16">
                    <p>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                </div>
                <div className="bg-[#2828281b] mt-4 text-[#282828be]">
                    {
                        currentlyCooking.map((cook, indx) => <div key={indx} className="flex ml-6 items-center">
                            <span className="text-lg font-semibold mr-6">{indx + 1}</span>
                            <div className="flex gap-8 items-center">
                                <p className="mr-6 text-lg">{cook.recipe_name}</p>
                                <p className="mr-6 text-lg">{cook.preparing_time}<br /> minutes</p>
                                <p className="text-lg">{cook.calories}<br />Calories</p>
                            </div>

                        </div>)
                    }
                </div>
            </div>

            <div className="text-lg text-[#282828be] font-medium text-right mt-10">
                <p>Total Time = {time} minutes</p>
                <p>Total Calories = {calories} calories</p>
            </div>
        </div>
    );
};

export default Cook;