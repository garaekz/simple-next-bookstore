function SingleProductSkeleton() {
  return (
    <div className="md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl w-full mx-auto flex flex-wrap">
      <div className="2xl:-mx-[50px] w-full flex flex-wrap">
        {/* Image */}
        <div className="w-full lg:w-1/2 lg:px-[50px] px-[15px] mb-10">
          <div className="h-full">
            <div className="sticky top-[100px] z-0">
              <div className="relative">
                <div className="relative block">
                  <div className="w-full rounded-md xl:h-[800px] h-[450px] xl:w-[450px]mx-auto bg-gray-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="w-full lg:w-1/2 lg:px-[50px] px-[15px] mb-10">
          <div className="h-full">
            <div className="sticky top-[100px] z-0">
              <div className="block">
                <div>
                  <h2 className="text-dark font-bold text-[26px] md:text-[30px] mb-4">
                    <div className="w-[250px] h-[30px] bg-gray-200 rounded-full" />
                  </h2>
                  <h6 className="mb-5 font-medium text-[20px] text-body">
                    <div className="w-[150px] h-[20px] bg-gray-200 rounded-full" />
                  </h6>
                  <div className="pb-[10px] border-b-0 flex items-center font-medium text-[20px] md:text-[24px] mb-5 mr-4">
                    <div className="w-[100px] h-[30px] bg-gray-200 rounded-full" />
                  </div>
                  <div className="flex justify-between mb-10">
                    <button className="block relative w-full text-gray-200 bg-gray-200 py-[15px] rounded-md">
                      .
                    </button>
                  </div>
                  <div className="border-b border-light my-[30px] pb-[30px] flex flex-col items-center lg:justify-between lg:flex-row">
                    <div className="flex mb-5 w-full">
                      <div className="bg-gray-200 h-6 w-[100px] rounded-full mr-4"></div>
                      <div className="bg-gray-200 h-6 w-40 rounded-full"></div>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="bg-gray-200 h-6 w-[100px] rounded-full mr-4"></div>
                      <div className="bg-gray-200 h-6 w-40 rounded-full"></div>
                    </div>
                  </div>
                  <div className="mt-[80px]">
                    <div className="bg-gray-200 h-8 w-40 rounded-full mb-20"></div>
                    {
                      // loop arbitrary number of times
                      [...Array(5)].map((item, index) => (
                        <div
                          key={index}
                          className="w-full h-[20px] bg-gray-200 rounded-full mb-3"
                        />
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductSkeleton;
