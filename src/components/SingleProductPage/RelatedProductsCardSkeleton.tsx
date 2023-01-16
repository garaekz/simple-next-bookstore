function RelatedProductCardSkeleton() {
  return (
    <div className="group relative mb-8 text-center md:text-left w-full mx-4">
      <div className="relative w-full">
        <div className="block bg-gray-200 rounded-lg overflow-hidden relative h-[300px] w-full p-10 w-full">
          <div className="rounded-lg max-h-[500px] h-full w-auto mx-auto object-cover group-hover:scale-110 transition duration-300"></div>
        </div>
      </div>
      <div className="py-6 relative">
        <div className="text-lg mb-2.5"></div>
        <div className="h-5 mb-4 rounded-full w-32 bg-gray-200"></div>
        <div className="h-5 mb-4 rounded-full bg-gray-200"></div>
        <div className="h-6 mb-4 w-1/3 rounded-full bg-gray-200"></div>
      </div>
    </div>
  );
}

export default RelatedProductCardSkeleton;
