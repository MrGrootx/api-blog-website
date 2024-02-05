import { Link } from "react-router-dom";
import blogImg from "../assets/blog/1.jpg";

const BlogSection = () => {
  return (
    <>
      <section className="border container mx-auto md:p-5 md:px-6 mt-6">
        <div className="border-b-2 border-black">
          <Link className="text-xl font-bold text-white bg-gray-950 inline-block px-3 py-1">
          LATEST ARTICLES
          </Link>
        </div>

        <div className="grid grid-cols-2 mt-3 gap-x-6">
          <section className="">
            <div className="p-2">
              <div className="grid grid-cols-2  gap-3">

                <div className="border  bg-gray-100 rounded">
                  <img
                    src={blogImg}
                    alt="blogImg"
                    className="max-h-48 w-full"
                  />

                  <div className="mt-1 p-2">
                    <ul>
                      <li className="mt-1 bg-[#4F4A45] inline-block text-white px-2 rounded mr-1">
                        Tamil
                      </li>
                      <li className="mt-1 bg-[#4F4A45] inline-block text-white px-2 rounded mr-1">
                        English
                      </li>
                    </ul>

                    <div className="mt-3">
                      <h3 className="font-semibold inline-block  cursor-pointer hover:text-gray-500">
                        Heat and Wildfire Smoke Are Even More Harmful When
                        Combined, a Study Says
                      </h3>
                      <div className="mt-4 text-[#C70039]">
                        <span className="font-semibold">
                          By Armin Vans - August 7, 2019

                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border  bg-gray-100 rounded">
                  <img
                    src={blogImg}
                    alt="blogImg"
                    className="max-h-48 w-full"
                  />

                  <div className="mt-1 p-2">
                    <ul>
                      <li className="mt-1 bg-[#4F4A45] inline-block text-white px-2 rounded mr-1">
                        Tamil
                      </li>
                      <li className="mt-1 bg-[#4F4A45] inline-block text-white px-2 rounded mr-1">
                        English
                      </li>
                    </ul>

                    <div className="mt-3">
                      <h3 className="font-semibold inline-block  cursor-pointer hover:text-gray-500">
                        Heat and Wildfire Smoke Are Even More Harmful When
                        Combined, a Study Says
                      </h3>
                      <div className="mt-4 text-[#C70039]">
                        <span className="font-semibold">
                          By Armin Vans - August 7, 2019

                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border  bg-gray-100 rounded">
                  <img
                    src={blogImg}
                    alt="blogImg"
                    className="max-h-48 w-full"
                  />

                  <div className="mt-1 p-2">
                    <ul>
                      <li className="mt-1 bg-[#4F4A45] inline-block text-white px-2 rounded mr-1">
                        Tamil
                      </li>
                      <li className="mt-1 bg-[#4F4A45] inline-block text-white px-2 rounded mr-1">
                        English
                      </li>
                    </ul>

                    <div className="mt-3">
                      <h3 className="font-semibold inline-block  cursor-pointer hover:text-gray-500">
                        Heat and Wildfire Smoke Are Even More Harmful When
                        Combined, a Study Says
                      </h3>
                      <div className="mt-4 text-[#C70039]">
                        <span className="font-semibold">
                          By Armin Vans - August 7, 2019

                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                

              </div>
            </div>
          </section>
          <section className="border border-black max-h-96">2</section>
        </div>
      </section>
    </>
  );
};

export default BlogSection;
