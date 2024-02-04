import img1 from "../assets/home/1.webp";
import img2 from "../assets/home/2.webp";
import img3 from "../assets/home/3.webp";

const Home = () => {
  return (
    <>
      <section>
        <main className="container mx-auto md:p-5 border  md:px-6">
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

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                  <div className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    VR
                  </div>
                </div>

                <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                  <img
                    src={img2}
                    loading="lazy"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                  <div className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    Tech
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
                    Dev
                  </div>
                </div>

                <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                  <img
                    src={img3}
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  <div className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    <button>test</button>
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
