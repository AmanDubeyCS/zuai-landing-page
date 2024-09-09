import React from "react";

export function NewsLetter() {
  return (
    <div className="bg-red-600 py-10">
      <div className="flex flex-col items-center justify-center light">
        <div className="w-full max-w-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">
            Subscribe to our newsletter
          </h2>

          <form className="flex border bg-white rounded-full p-1">
            <input
              placeholder="Enter your email address"
              className=" text-gray-800 rounded-full p-2 flex-1 focus:outline-none  transition ease-in-out duration-150"
              type="email"
            />

            <button
              className={`w-[100px] h-[40px] bg-[#6947BF] flex items-center justify-center cursor-pointer duration-[0.5s] overflow-hidden shadow-[0px_5px_10px_rgba(0,0,0,0.103)] relative rounded-full border-[none] md:active:duration-[0.5s] md:active:scale-95`}
            >
              <p className="text h-full w-fit flex items-center justify-center text-white z-[1] duration-[0.5s] text-[1.04em] font-normal">
                Subscribe
              </p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
