import img1 from "../assets/home/1.jpg";
import img2 from "../assets/home/2.jpg";
import img3 from "../assets/home/3.jpg";
import img4 from "../assets/home/4.jpg";

const Home = () => {
  return (
    <>
      <section>
        <main className="container mx-auto md:p-5   md:px-6">
          <div className="bg-whiteh-full py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 xl:gap-4">
                <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                  <img
                    src={img1}
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    <div>
                      <span className="bg-gray-700 px-2 py-1 text-sm rounded opacity-80 hover:opacity-100">
                        Tranding Now
                      </span>
                      <p className="text-sm text-gray-100 mt-2 opacity-85">
                        WordPress News Magazine Charts the Most Chic and
                        Fashionable Women of New York City
                      </p>
                      <span className="text-sm">Abishek Oct 21 2005</span>
                    </div>
                  </div>
                </div>

                <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                  <img
                    src={img2}
                    loading="lazy"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    <div>
                      <span className="bg-gray-700 px-2 py-1 text-sm rounded opacity-80 hover:opacity-100">
                        GADGETS
                      </span>
                      <p className="text-sm text-gray-100 mt-2 opacity-85">
                        Game Changing Virtual Reality Console Hits the Market
                      </p>
                      <span className="text-sm">Mr Groot Oct 21 2005</span>
                    </div>
                  </div>
                </div>

                <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                  <img
                    src={img3}
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    <div>
                      <span className="bg-gray-700 px-2 py-1 text-sm rounded opacity-80 hover:opacity-100">
                        TRAVEL
                      </span>
                      <p className="text-sm text-gray-100 mt-2 opacity-85">
                        Discover the Most Magical Sunset in Santorini
                      </p>
                      <span className="text-sm">Mr Groot Oct 21 2005</span>
                    </div>
                  </div>
                </div>

                <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                  <img
                    src={img4}
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  <div className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    <div>
                      <span className="bg-gray-700 px-2 py-1 text-sm rounded opacity-80 hover:opacity-100">
                        REVIEWS
                      </span>
                      <p className="text-sm text-gray-100 mt-2 opacity-85">
                      Computer Filters Noise to Make You a Better Listener
                      </p>
                      <span className="text-sm">Maverick Oct 21 2002</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Home;
