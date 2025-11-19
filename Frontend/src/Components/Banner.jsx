import React from "react";

export default function Banner() {
  return (
    <>
      <div className="max w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-9">
        <div className="w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1">
          <div className="space-y-12">
            {" "}
            <h1 className="text-4xl font-bold">
              Hello,welcome here to learn something{" "}
              <span className="text-pink-600 ">new everyday!!!</span>
            </h1>
            <p className="text-xl font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              praesentium. Architecto delectus inventore sit commodi officiis ea
              corporis, animi deserunt, perspiciatis nihil soluta. Repellat
              porro et harum veniam neque inventore.
            </p>
            <div className="join">
  <div>
    <label className="input validator join-item">
      <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </g>
      </svg>
      <input type="email" placeholder="mail@site.com" required />
    </label>
    <div className="validator-hint hidden">Enter valid email address</div>
  </div>
  <button className="btn btn-neutral join-item bg-pink-500 text-black hover:bg-white ">Join</button>
</div>
          </div>
        </div>
        <div className="w-full md:w-1/2 order-1">
        <img className=" " src=" /book2.png" alt="" /></div>
      </div>
    </>
  );
}
