import React from "react"

export function NewsLetter() {
  return (
    <div
      style={{
        background:
          "linear-gradient(140deg, #6846BE 13.99%, #351094 85.83%), #6947BF",
      }}
      className="mx-auto max-w-[992px] rounded-[16px] py-10"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-md rounded-lg p-6">
          <h2 className="mb-4 text-center text-2xl font-bold text-white">
            Subscribe to our newsletter
          </h2>

          <form className="flex rounded-full border bg-white p-1">
            <input
              placeholder="Enter your email address"
              className="flex-1 rounded-full p-2 text-gray-800 transition duration-150 ease-in-out focus:outline-none"
              type="email"
            />

            <button
              className={`relative flex h-[40px] w-fit cursor-pointer items-center justify-center overflow-hidden rounded-full border-[none] bg-[#6947BF] px-3 shadow-[0px_5px_10px_rgba(0,0,0,0.103)] duration-[0.5s] md:active:scale-95 md:active:duration-[0.5s]`}
            >
              <p className="text z-[1] flex h-full w-fit items-center justify-center text-[1.04em] font-normal text-white duration-[0.5s]">
                Subscribe
              </p>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
