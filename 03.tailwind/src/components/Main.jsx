import React from 'react'

const Main = () => {
  return (
    <main className="w-full mt-60 flex flex-col justify-center items-center">
      <h1 className="text-5xl py-auto flex flex-col text-center justify-center items-center font-bold">
        The best way to{" "}
        <div className="p-7">
          <span className="bg-amber-300 rounded-xl px-3">review</span> creative
          assets
        </div>
      </h1>
      <p className="text-center text-gray-500 p-5 max-w-xl">
        Store, collaborate and share your marketing materials Ship
        high-performing creative 10x faster.
      </p>
      <button className="rounded-xl bg-red-200 p-1.5">Join waitlist</button>
    </main>
  )
}

export default Main