import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="container md:mx-auto">
      <div className=" flex flex-wrap place-items-center ">
        {/* desktop */}
        <section className="">
          <nav className="flex  md:justify-end  text-black w-screen">
            <div className="px-5  py-6 flex w-full items-center">
              <Link href="/">
                <a className="text-3xl font-bold font-heading">
                  <Image
                    className="ml-4 sm:ml-16 md:ml-4 xl:ml-24 h-12 "
                    src={`https://cdn.sanity.io/images/559i1aem/production/b140508a8e5d9731f489032062d8533753b33bf1-730x266.png`}
                    alt="logo"
                    width={162}
                    height={60}
                  />
                </a>
              </Link>

              {/* desktop */}
              <ul className="hidden md:flex md:flex-wrap px-4 mx-auto font-semibold font-heading sm:space-x-4 md:space-x-8 ">
                <li>
                  <Link href="/home">
                    <a className="hover:text-gray-200">Нүүр</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="hover:text-gray-200">Бидний тухай</a>
                  </Link>
                </li>
                <li>
                  <Link href="/service">
                    <a className="hover:text-gray-200">Үйлчилгээ</a>
                  </Link>
                </li>
                <li>
                  <Link href="/news">
                    <a className="hover:text-gray-200">Мэдээ мэдээлэл</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="hover:text-gray-200">Холбоо барих</a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* burger menu  */}
            <div className="navbar-burger pr-12 self-center md:hidden">
              <div
                className="HAMBURGER-ICON space-y-2"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <span className="block h-0.5 w-8 animate-pulse bg-gray-900"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-900"></span>
                <span className="block h-0.5 w-8  animate-pulse bg-gray-900"></span>
              </div>
              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                <div
                  className="absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)}
                >
                  <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className="flex flex-col items-center justify-between min-h-[250px]">
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <Link href="/home">
                      <a>Нүүр</a>
                    </Link>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <Link href="/about">
                      <a>Бидний тухай</a>
                    </Link>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <Link href="/service">
                      <a>Үйлчилгээ</a>
                    </Link>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <Link href="/news">
                      <a>Мэдээ мэдээлэл</a>
                    </Link>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
      </div>

      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
