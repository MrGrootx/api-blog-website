import { Link } from "react-router-dom";
import Social_media from "./Social_media";
import TrendingArticles from "./TrendingArticles";
import Footer from "../Components/Footer";

const BlogSection = () => {
  return (
    <>
      <section className=" container mx-auto md:p-5 md:px-6 px-2 mt-6 border">
        <div className="border-b-2 border-black">
          <Link className="text-xl font-bold text-white bg-gray-950 inline-block px-3 py-1">
            LATEST ARTICLES
          </Link>
        </div>

        <div className="md:grid grid-cols-2 mt-3 gap-x-6 ">
          <section className="">
            <div className="p-2">
              <div className="grid grid-cols-1 gap-3">
                <div className="border  bg-gray-100 rounded ">
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
          <section className="hidden md:block">
            <div className="max-w-96 mx-auto p-2">
              <div className=" border-b border-black">
                <span className="bg-gray-900 text-white px-2 py-1">
                  STAY CONNECTED
                </span>
              </div>
              <Social_media />
              <TrendingArticles />
            </div>
              
          </section>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default BlogSection;
