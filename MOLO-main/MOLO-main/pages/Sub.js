import React, { useState } from "react";
import Head from "next/head";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";
function Sub() {
  const [month, setmonth] = useState(true);
  return (
    <>
      <Head>
        <title>Hulu-2 </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="  bg-[url('https://i.imgur.com/xwOnPTi.png')] bg-opacity-100 bg-cover bg-center ">
        {/* <Header /> */}
        <section className="text-white body-font">
          <div className="container mx-auto flex flex-col px-5  justify-center items-center">
            <Image
              className="lg:w-9/12 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              layout=""
              width={1200}
              height={250}
              src="https://www.hulu.com/static/hitch/s3/attachments/ckdz36xqi7zz019ym0b2seyqk-dplus-logo-0-1-2-0.full.png"
            />
            <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
              <h1 className="title-font sm:text-6xl text-4xl mb-4 font-semibold tracking-wide text-[#ffffff]">
                Select Your Plan
              </h1>
              <div className="mb-8 text-white text title-font sm:text-xl text-xl leading-relaxed">
                No hidden fees, equipment rentals, or installation appointments.
                <br />
                <p className="font-bold ">
                  {" "}
                  Switch plans or cancel anytime.^^.{" "}
                </p>
              </div>
            </div>
          </div>
          <section className="text-white body-font overflow-hidden">
            <div className="container px-5  mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <div className="flex mx-auto border-4 group text-2xl border-[#0000FF] rounded overflow-hidden mt-6">
                  <button
                    onClick={() => setmonth(month ? month : !month)}
                    className="py-1 px-4 bg-[#0000FF] hover:bg-black text-white focus:outline-none"
                  >
                    Monthly
                  </button>
                  {/* {console.log(month)} */}
                  <button
                    onClick={() => setmonth(month ? !month : month)}
                    className="py-1 px-4 hover:bg-[#0000FF]  focus:outline-none"
                  >
                    Annually
                  </button>
                </div>
              </div>
              {month ? (
                <div className="flex  flex-row space-x-32 mb-12 justify-center">
                  <div className="p-4 xl:w-1/4 transition duration-200 ease-in-out transform sm:hover:scale-105   md:w-1/2 w-full">
                    <div className="h-full     p-6 rounded-lg border-4 border-gray-300 hover:border-[#00BF00]  flex flex-col relative overflow-hidden">
                      <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                        BASIC
                      </h2>
                      <h1 className="text-5xl text-whi pb-4 mb-4 border-b border-gray-200 leading-none">
                        ₹149
                      </h1>
                      <p className="flex items-center text-white mb-2 text-xl">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        Streaming Library with thousands of TV episodes and
                        movies
                      </p>
                      <p className="flex items-center text-white text-xl mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        Most new episodes the day after they air^
                      </p>
                      <p className="flex items-center text-whi mb-6">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        Number of devices that can be logged in -2
                      </p>
                      <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-whi rounded">
                        Continue
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-4 h-4 ml-auto"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className=" xl:w-1/4 transition duration-200 ease-in-out transform sm:hover:scale-105 md:w-1/2 w-full">
                    <div className="h-full   p-10 rounded-lg border-4 border-[#0000FF] flex flex-col relative overflow-hidden">
                      <span className="bg-[#0000FF] text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                        POPULAR
                      </span>
                      <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                        SUPER
                      </h2>
                      <h1 className="text-5xl text-whi leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                        <span>₹250</span>
                        <span className="text-lg ml-1 font-normal text-whi">
                          /mo
                        </span>
                      </h1>
                      <p className="flex items-center text-white text-xl mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        Streaming Library with thousands of TV episodes and
                        movies
                      </p>
                      <p className="flex items-center text-white text-xl mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        Most new episodes the day after they air^
                      </p>
                      <p className="flex items-center text-white text-xl mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        Hexagon neutra unicorn
                      </p>
                      <p className="flex items-center text-whi mb-6">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        Mixtape chillwave tumeric
                      </p>
                      <button className="flex items-center mt-auto text-white bg-[#0000FF] border-0 py-2 px-4 w-full focus:outline-none hover:bg-[#2530fff7] rounded">
                        Continue
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-4 h-4 ml-auto"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="p-4 xl:w-1/4 transition duration-200 ease-in-out transform sm:hover:scale-105 md:w-1/2 w-full">
                    <div className="h-full   p-6 rounded-lg border-4 border-gray-300 hover:border-[#00BF00] flex flex-col relative overflow-hidden">
                      <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                        PREMIUM
                      </h2>
                      <h1 className="text-5xl text-whi leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                        <span>₹400</span>
                        <span className="text-lg ml-1 font-normal text-whi">
                          /mo
                        </span>
                      </h1>
                      <p className="flex items-center text-white text-xl mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        Streaming Library with thousands of TV episodes and
                        movies
                      </p>
                      <p className="flex items-center text-white text-xl mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        Most new episodes the day after they air^
                      </p>
                      <p className="flex items-center text-white text-xl mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        Hexagon neutra unicorn
                      </p>
                      <p className="flex items-center text-white text-xl mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        Streaming Library with thousands of TV episodes and
                        movies
                      </p>
                      <p className="flex items-center text-whi mb-6">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        Mixtape chillwave tumeric
                      </p>
                      <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-whi rounded">
                        Continue
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-4 h-4 ml-auto"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-row space-x-32 mb-12 justify-center">
                  <div className="p-4 xl:w-1/4 transition duration-200 ease-in-out transform sm:hover:scale-105   md:w-1/2 w-full">
                    <div className="h-full    p-6  rounded-lg border-4 border-gray-300 hover:border-[#00BF00] flex flex-col relative overflow-hidden">
                      <h2 className="text-sm  tracking-widest title-font mb-1 font-medium">
                        BASIC
                      </h2>
                      <h1 className="text-5xl text-whi pb-4 mb-4 border-b border-gray-200 leading-none">
                        ₹149
                      </h1>
                      <p className="flex items-center text-white mb-2 text-xl">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        Streaming Library with thousands of TV episodes and
                        movies
                      </p>
                      <p className="flex items-center text-white text-xl mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        Most new episodes the day after they air^
                      </p>
                      <p className="flex items-center text-whi mb-6">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        Mixtape chillwave tumeric
                      </p>
                      <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-whi rounded">
                        Continue
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-4 h-4 ml-auto"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className=" xl:w-1/4 transition duration-200 ease-in-out transform sm:hover:scale-105 md:w-1/2 w-full">
                    <div className="h-full   p-10 rounded-lg border-4 border-[#0000FF] flex flex-col relative overflow-hidden">
                      <span className="bg-[#0000FF] text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                        POPULAR
                      </span>
                      <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                        SUPER
                      </h2>
                      <h1 className="text-5xl text-whi leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                        <span> ₹ {250 * 11}</span>
                        <span className="text-lg ml-1 font-normal text-whi">
                          /Year
                        </span>
                      </h1>
                      <p className="flex items-center text-white text-xl mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        Streaming Library with thousands of TV episodes and
                        movies
                      </p>
                      <p className="flex items-center text-white text-xl mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        Most new episodes the day after they air^
                      </p>
                      <p className="flex items-center text-white text-xl mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        Hexagon neutra unicorn
                      </p>
                      <p className="flex items-center text-whi mb-6">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        Mixtape chillwave tumeric
                      </p>
                      <button className="flex items-center mt-auto text-white bg-[#0000FF] border-0 py-2 px-4 w-full focus:outline-none hover:bg-[#2530fff7] rounded">
                        Continue
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-4 h-4 ml-auto"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="p-4 xl:w-1/4 transition duration-200 ease-in-out transform sm:hover:scale-105 md:w-1/2 w-full">
                    <div className="h-full   p-6 rounded-lg border-4 border-gray-300 hover:border-[#00BF00] flex flex-col relative overflow-hidden">
                      <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                        PREMIUM
                      </h2>
                      <h1 className="text-5xl text-whi leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                        <span>₹{400 * 11}</span>
                        <span className="text-lg ml-1 font-normal text-whi">
                          /Year
                        </span>
                      </h1>
                      <p className="flex items-center text-white text-xl mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        Streaming Library with thousands of TV episodes and
                        movies
                      </p>
                      <p className="flex items-center text-white text-xl mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        Most new episodes the day after they air^
                      </p>
                      <p className="flex items-center text-white text-xl mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        Hexagon neutra unicorn
                      </p>
                      <p className="flex items-center text-white text-xl mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        Streaming Library with thousands of TV episodes and
                        movies
                      </p>
                      <p className="flex items-center text-whi mb-6">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        Mixtape chillwave tumeric
                      </p>
                      <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-whi rounded">
                        Continue
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-4 h-4 ml-auto"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </section>
      </div>
    </>
  );
}

export default Sub;
