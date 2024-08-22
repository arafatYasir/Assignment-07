const Cook = ({ cookingList }) => {
    return (
        <div className="border-2 rounded-2xl h-[685px] max-h-[900px]">
            <h2 className="text-2xl font-semibold mb-4 text-center mt-8 lg:mx-40">Want to cook: {cookingList.length}</h2>
            <hr className="mx-20 mx-auto" />

            {/* Want to cook table {flex} */}
            <div className="text-[#878787] text-xl flex gap-16">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>
        </div>
    );
};

export default Cook;