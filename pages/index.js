import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default function Landing() {
  return (
    <main>
      <Head>
        <title>Regalengineering LLC </title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Зуух, хэмжүүр,  " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <div className="bg-gray-100 h-screen content-center">
        <div className="container mx-auto flex flex-col items-center py-36 sm:py-36  content-center h-[90%] ">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10 content-center ">
            <Image
              src={`https://cdn.sanity.io/images/559i1aem/production/b140508a8e5d9731f489032062d8533753b33bf1-730x266.png`}
              alt="apartment design"
              width={365}
              height={133}
            />
          </div>
          <div className="flex justify-center items-center content-center">
            <Link href="/home">
              <a>
                <button className="text-[16px] lg:text-2xl uppercase transition duration-150 ease-in-out hover:bg-red-800     text-red-900 hover:text-white px-4 sm:px-10   py-2 sm:py-4  border-r-2 border-red-900 hover:border-red-800">
                  Вэб сайтаар зочиллох
                </button>
              </a>
            </Link>
            <Link href="http://shop.regal.mn/">
              <a>
                <button className="text-[16px] lg:text-2xl uppercase transition duration-150 ease-in-out hover:bg-red-800     text-red-900 hover:text-white px-4 sm:px-10  hover:border-red-900 py-2 sm:py-4">
                  Онлайн дэлгүүр
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className="flex justify-center  ">
          <p className=" text-md leading-none text-gray-800 mt-4  font-medium ">
            Regalengineering LLC © 2022.
          </p>
        </div>
      </div>
    </main>
  );
}
