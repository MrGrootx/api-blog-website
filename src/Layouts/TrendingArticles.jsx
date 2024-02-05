import { Link } from "react-router-dom";

const TrendingArticles = () => {
  return (
    <>
      <section>
        <div className="border-b border-black">
          <Link className="uppercase text-white bg-gray-950 inline-block px-3 py-1">
            Trending Articles
          </Link>
        </div>

        <div className="p-2 h-[400px] overflow-auto mt-2">
          <div className=" border-b py-2">
            <span className="text-blue-800 text-xs">HEALTH</span>
            <p>
              Users of New Weight Loss Drug Had Lower Blood Pressure in Study
            </p>
          </div>

          <div className=" border-b py-2">
            <span className="text-blue-800 text-xs">HEALTH</span>
            <p>
              Users of New Weight Loss Drug Had Lower Blood Pressure in Study
            </p>
          </div>

          <div className=" border-b py-2">
            <span className="text-blue-800 text-xs">HEALTH</span>
            <p>
              Users of New Weight Loss Drug Had Lower Blood Pressure in Study
            </p>
          </div>

          <div className=" border-b py-2">
            <span className="text-blue-800 text-xs">HEALTH</span>
            <p>
              Users of New Weight Loss Drug Had Lower Blood Pressure in Study
            </p>
          </div>

          <div className=" border-b py-2">
            <span className="text-blue-800 text-xs">HEALTH</span>
            <p>
              Users of New Weight Loss Drug Had Lower Blood Pressure in Study
            </p>
          </div>

          <div className=" border-b py-2">
            <span className="text-blue-800 text-xs">HEALTH</span>
            <p>
              Users of New Weight Loss Drug Had Lower Blood Pressure in Study
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingArticles;
