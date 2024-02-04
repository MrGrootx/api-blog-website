const Search = () => {
  return (
    <>
      <section className="w-full">
        <div className="">
          <div className=" flex max-w-[900px]  mx-auto gap-x-2 relative px-3 md:px-0">
            <input
              type="text"
              name="search"
              placeholder="Search Blogs"
              className="w-full border border-gray-200 rounded outline-none px-2 md:py-2 font-bold relative"
            />

            <button
              type="submit"
              className="bg-red-500 md:px-4 px-2 md:py-2 py-1 rounded font-bold text-gray-100 hover:bg-red-600"
            >
              Search
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
