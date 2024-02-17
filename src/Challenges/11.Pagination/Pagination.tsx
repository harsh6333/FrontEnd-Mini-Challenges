import { useState } from "react";
import { page1, page2, page3 } from "../../pagination";
const Pagination = () => {
  const [page, setPage] = useState<number>(1);
  const totalPages = 3;

  const handlePrevious = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  return (
    <div className="h-[90vh] w-full flex mt-10 flex-col items-center">
      <div className="flex gap-4 justify-center items-center">
        <button
          className="border-2 p-2"
          onClick={handlePrevious}
          disabled={page === 1}
        >
          Previous
        </button>
        <p>
          Page {page} of {totalPages}
        </p>
        <button
          className="border-2 p-2"
          onClick={handleNext}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
      <div className="flex flex-col w-[80%] mt-10">
        <div className="flex justify-between items-center w-[100%] bg-[#f5f5dc]">
          <p className="w-[20%] border-2 flex items-center justify-center h-[40px] font-bold text-lg">
            #
          </p>
          <p className="w-[60%] border-2 flex items-center justify-center h-[40px] font-bold text-lg">
            FOOD
          </p>
          <p className="w-[20%] border-2 flex items-center justify-center h-[40px] font-bold text-lg">
            PRICE
          </p>
        </div>
        {page == 1 &&
          page1.map((item) => (
            <div className="flex justify-between items-center w-[100%]">
              <p className="w-[20%] border-2 flex items-center justify-center h-[40px] text-lg">
                {item.id}
              </p>
              <p className="w-[60%] border-2 flex items-center justify-center h-[40px] text-lg">
                {item.food}
              </p>
              <p className="w-[20%] border-2 flex items-center justify-center h-[40px] text-lg">
                {item.price}
              </p>
            </div>
          ))}
        {page == 2 &&
          page2.map((item) => (
            <div className="flex justify-between items-center w-[100%]">
              <p className="w-[20%] border-2 flex items-center justify-center h-[40px] text-lg">
                {item.id}
              </p>
              <p className="w-[60%] border-2 flex items-center justify-center h-[40px] text-lg">
                {item.food}
              </p>
              <p className="w-[20%] border-2 flex items-center justify-center h-[40px] text-lg">
                {item.price}
              </p>
            </div>
          ))}
        {page == 3 &&
          page3.map((item) => (
            <div className="flex justify-between items-center w-[100%]">
              <p className="w-[20%] border-2 flex items-center justify-center h-[40px] text-lg">
                {item.id}
              </p>
              <p className="w-[60%] border-2 flex items-center justify-center h-[40px] text-lg">
                {item.food}
              </p>
              <p className="w-[20%] border-2 flex items-center justify-center h-[40px] text-lg">
                {item.price}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Pagination;
