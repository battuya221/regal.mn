import styles from "../styles/Home.module.css";
import { getAllPots } from "../lib/api";
import { getAllbanner } from "../lib/api";
import { getBenetech } from "../lib/api";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "./component/layout";
import Link from "next/link";
import Image from "next/image";
import { getLogo } from "../lib/api";

export default function Home({ Posts, banner, benetech, logo }) {
  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };
  return (
    <div className={styles.container}>
        {/* <pre>{JSON.stringify(logo, null, 2)}</pre> */}
      <Layout>
        <Slider {...settings}>
          {banner.map((banner, index) => (
            <div    key={index} className="w-[500]">
            <Image       
               src={banner.image}
              alt="image"
              width="2000"
              height="600"
              objectFit="center"
              layout="responsive"
            />
            </div>
          ))}
        </Slider>

        {/* <pre>{JSON.stringify(benetech, null, 2)}</pre> */}
        <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
          <div className="lg:flex items-center justify-between">
            <div className="lg:w-1/3">
              {benetech.map((benetech, index) => (
                <h1
                  key={index}
                  className="text-4xl font-semibold leading-9 m-4 text-gray-800"
                >
                  {benetech.benetechTitle}
                </h1>
              ))}
              {benetech.map((benetech, index) => (
                <p
                  key={index}
                  className="text-base leading-6 m-4 text-gray-600"
                >
                  {benetech.benetechdesc}
                </p>
              ))}
            </div>
            <div className="lg:w-7/12 lg:mt-0 mt-8">
              <div className="w-4/5 h-full  mx-auto">
                {benetech.map((benetech, index) => (
                  <Image
                    key={index}
                    src={benetech.benetechimage1}
                    alt="apartment design"
                    className=" w-full sm:block hidden "
                    width={1100}
                    height={400}
                    objectFit="cover"
                    layout="responsive"
                    
             
                  />
                ))}
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4 w-4/5 mx-auto h-[300px] 	object-fit: scale-down;">
                {benetech.map((benetech, index) => (
                  <Image
                    key={index}
                    src={benetech.benetechimage2}
                    className="w-full"
                    alt="kitchen"
                    width={350}
                    height={350}
                    objectFit="cover"
                  />
                ))}
                {benetech.map((benetech, index) => (
                  <Image
                    key={index}
                    src={benetech.benetechimage3}
                    className="w-full"
                    alt="sitting room"
                    width={350}
                    height={350}
                    objectFit="cover"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* section */}
        <section className=" container mx-auto py-16 bg-white ">
          <h1 className="text-center font-bold text-2xl text-indigo-500">
            Мэдээ мэдээлэл
          </h1>

          <div className="grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 my-10">
            {Posts.slice(0, 4).map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden"
              >
                {/* <Link href={`/${post.slug}`}>
                  <a> */}
                <Image
                  className="h-56 lg:h-60 w-full object-cover"
                  src={post.news_image}
                  alt=""
                  width={500}
                  height={350}
                />
                <div className="p-3">
                  <span className="text-sm text-primary">
                    {post._createdAt}
                  </span>
                  <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                    {post.title}
                  </h3>
                  <p className="paragraph-normal text-gray-600">
                    {post.description}
                  </p>
                  <div className="mt-3 block"> </div>
                </div>
                {/* </a>
                </Link> */}
              </div>
            ))}

           
          </div>
        </section>
        {/* section */}
        <div className="pb-16">
          <section className="max-w-8xl mx-auto container bg-white pt-16">
            <div>
              <div
                role="contentinfo"
                className="flex items-center flex-col px-4"
              >
             
                <h1
                  tabIndex="0"
                  className="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 pt-4"
                >
                 Бидний давуу тал
                </h1>
              </div>
              <div
                tabIndex="0"
                aria-label="group of cards"
                className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4"
              >
                <div
                  tabIndex="0"
                  aria-label="card 1"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                >
                  <div className="w-20 h-20 relative mr-5">
                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                    <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <Image
                        src={
                          "https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG1.svg"
                        }
                        alt="drawer"
                        width={35}
                        height={35}
                      />
                    </div>
                  </div>
                  <div className="w-10/12">
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-lg font-bold leading-tight text-gray-800"
                    >
                      Туршлага
                    </h2>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                     Бид таньд дулаан хангамжийн  салбарт ажлын дадлага туршлагатай хамт олон үйлчилж байна.
                    </p>
                  </div>
                </div>
                <div
                  tabIndex="0"
                  aria-label="card 2"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                >
                  <div className="w-20 h-20 relative mr-5">
                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                    <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <Image
                        src={
                          "https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg"
                        }
                        alt="check"
                        width={35}
                        height={35}
                      />
                    </div>
                  </div>
                  <div className="w-10/12">
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                    >
                    Найдвартай
                    </h2>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                      Харилцагч таны санхүүгийн амжилтын төлөө хамтдаа.
                    </p>
                  </div>
                </div>
                <div
                  tabIndex="0"
                  aria-label="card 3"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                >
                  <div className="w-20 h-20 relative mr-5">
                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                    <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <Image
                        src={
                          "https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG3.svg"
                        }
                        alt="html tag"
                        width={35}
                        height={35}
                      />
                    </div>
                  </div>
                  <div className="w-10/12">
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                    >
                      Чанартай бүтээгдэхүүн
                    </h2>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                      Бид харилцагч бүртээ хамгийн сайн бүтээгдэхүүн үйлчилгээг хүргэхийг зорин ажилладаг.
                    </p>
                  </div>
                </div>
                <div
                  tabIndex="0"
                  aria-label="card 4"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                >
                  <div className="w-20 h-20 relative mr-5">
                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                    <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <Image
                        src={
                          "https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG4.svg"
                        }
                        alt="monitor"
                        width={35}
                        height={35}
                      />
                    </div>
                  </div>
                  <div className="w-10/12">
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                    >
                      Хурдан шуурхай
                    </h2>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                      Бид таны хүсэлтийг хамгийн түргэн шуурхай шийдвэрлэнэ болно.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>

      {/* <pre>{JSON.stringify(Posts, null, 2)}</pre>
      <pre>{JSON.stringify(banner, null, 2)}</pre> */}
    
    </div>
  );
}
export const getServerSideProps = async () => {
  const Posts = await getAllPots();
  const banner = await getAllbanner();
  const benetech = await getBenetech();
  const logo = await getLogo();
  
  return {
    props: {
      Posts,
      banner,
      benetech,
      logo,
    },
  };
};
