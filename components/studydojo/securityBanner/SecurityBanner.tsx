import React from "react"

export function SecurityBanner() {
  return (
    <div className="mx-auto my-32 w-full max-w-7xl rounded-2xl bg-gray-900 p-8 pt-16">
      <h2 className="mb-16 mt-2 text-center text-5xl font-bold tracking-tighter text-white">
        Built from the ground up for schools
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-fuchsia-400/20 p-8 text-center text-white">
          <div className="grid size-20 place-items-center rounded-2xl bg-white text-5xl text-fuchsia-600 shadow-xl">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 256 256"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M216,56v56c0,96-88,120-88,120S40,208,40,112V56a8,8,0,0,1,8-8H208A8,8,0,0,1,216,56Z"
                opacity="0.2"
              ></path>
              <path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.27,47,25.53a8,8,0,0,0,4.2,0c1-.26,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0Z"></path>
            </svg>
          </div>
          <h3 className="font-title h3">Data protection</h3>
          <p className="text-lg opacity-60">
            Unlike ChatGPT, we do not use student data to train our models.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 rounded-2xl bg-indigo-400/20 p-8 text-center text-white">
          <div className="grid size-20 place-items-center rounded-2xl bg-white text-5xl text-indigo-600 shadow-xl">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 256 256"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M216,56v56c0,96-88,120-88,120S40,208,40,112V56a8,8,0,0,1,8-8H208A8,8,0,0,1,216,56Z"
                opacity="0.2"
              ></path>
              <path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.27,47,25.53a8,8,0,0,0,4.2,0c1-.26,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0Z"></path>
            </svg>
          </div>
          <h3 className="font-title h3">Student privacy</h3>
          <p className="text-lg opacity-60">
            We do not sell or share any student data with third parties.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 rounded-2xl bg-purple-400/20 p-8 text-center text-white">
          <div className="grid size-20 place-items-center rounded-2xl bg-white text-5xl text-purple-600 shadow-xl">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 256 256"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M80,144v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V128H64A16,16,0,0,1,80,144Zm112-16a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h32V128Z"
                opacity="0.2"
              ></path>
              <path d="M201.89,54.66A104.08,104.08,0,0,0,24,128v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V144a24,24,0,0,0-24-24H40.36A88.12,88.12,0,0,1,190.54,65.93,87.39,87.39,0,0,1,215.65,120H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h24a24,24,0,0,1-24,24H136a8,8,0,0,0,0,16h56a40,40,0,0,0,40-40V128A103.41,103.41,0,0,0,201.89,54.66ZM64,136a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V136Zm128,56a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8h24v56Z"></path>
            </svg>
          </div>
          <h3 className="font-title h3">First class support</h3>
          <p className="text-lg opacity-60">
            We provide a white-glove onboarding experience directly from our
            CEO.
          </p>
        </div>
      </div>
    </div>
  )
}
