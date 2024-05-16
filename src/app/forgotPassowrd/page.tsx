"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Forgetpass = () => {
  const router = useRouter();

  return (
    <>
      <div className="bg-grey-lighter min-h-screen flex flex-col bg-[url('https://asianfoodnetwork.com/content/dam/afn/global/en/homepage/new-content-carousel/AFN_Food_Made_Good_HK_Awards_good_to_go_award_mobile.jpg.transform/desktop-img/img.jpg')]">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center font-semibold">
              Reset Password
            </h1>
            <input
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="email"
              required
            />

            <button
              onClick={() => {
                console.log("send email");
              }}
              type="submit"
              className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1"
            >
              Send email
            </button>
          </div>

          <div className="text-white mt-6">
            Remember your password?
            <a
              className="no-underline border-b border-blue text-blue-500 font-semibold hover:cursor-grab"
              onClick={() => {
                router.push("/#/login");
              }}
            >
              Log in
            </a>
            .
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgetpass;
