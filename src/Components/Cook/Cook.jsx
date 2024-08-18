const Cook = ({cookingList}) => {
    return (
        <div className="border-2 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">Want to cook: {cookingList.length}</h2>
            <hr className="w-96 mx-auto" />

            {/* Want to cook table */}
            <table className="text-[#878787]">
                <thead>
                    <tr className="font-medium">
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>

            </table>
        </div>
    );
};

export default Cook;