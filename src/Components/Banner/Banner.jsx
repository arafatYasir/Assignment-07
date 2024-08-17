const Banner = () => {
    return (

        <div className="mt-14 rounded-3xl hero h-[600px] bg-[url('https://i.postimg.cc/ZqWkm9RJ/Chef-cooking.png')]">
            <div className="hero-overlay bg-opacity-0"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-4xl">
                    <h1 className="mb-6 text-6xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="mb-10 text-xl">
                        Hey chefs! Welcome to our recipe house. Here you can cook whatever you want! Also do not forget to give feedback of your dishes taste.
                    </p>
                    <div>
                        <button className="bg-[#0BE58A] text-black text-xl font-semibold rounded-full px-7 py-4">Explore Now</button>
                        <button className="ml-5 text-white text-xl font-semibold rounded-full px-7 py-4 border-x border-y hover:border-none hover:bg-[#6f31fa]">Your Feedback</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;