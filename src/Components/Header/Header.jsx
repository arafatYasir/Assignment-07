const Header = () => {
    return (
        <div className="mt-14 flex justify-between items-center">
            <h1 className="text-3xl font-bold">Recipe Calories</h1>
            <ul className="flex text-xl gap-12 text-[#180c30]">
                <li>Home</li>
                <li>Recipes</li>
                <li>About</li>
                <li>Search</li>
            </ul>
            <div className="flex gap-5 items-center">
                <div className="relative">
                    <input className="text-[#150B2B] rounded-full py-3 pl-14 text-xl border-2 border-black bg-slate-100" type="text" placeholder="Search" />
                    <img src="https://cdn0.iconfinder.com/data/icons/art-designing-glyph/2048/1871_-_Magnifier-512.png" className="w-8 absolute left-5 top-3.5" alt="" />
                </div>

                <div className="w-12 h-12 bg-[#0BE58A] flex items-center justify-center rounded-full">
                    <img className="w-7" src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;