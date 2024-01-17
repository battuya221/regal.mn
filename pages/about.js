import Layout from "./component/layout";
import { getAllAboutPage } from "../lib/api";
import { getAllbanner } from "../lib/api";
import Image from "next/image";
const BlockContent = require("@sanity/block-content-to-react");
const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

export default function About({ about, banner }) {
  return (
    <div>
      {/* <pre>{JSON.stringify(banner, null, 2)}</pre> */}
      <Layout>
        {banner.map((banner, index) => {
          if (index < 1) {
            return ( 
              <Image
            key={index}
            src={banner.image}
            alt="apartment design"
            width={2000}
            height={600}
            priority
            objectFit="cover"
            layout="fixed"
            

          />
            )
          }
       
})}
      

        <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12">
                {about.map((about, index) => (
                  <Image
                    key={index}
                    src={about.aboutimage}
                    alt="image"
                    loading="lazy"
                    width={550}
                    height={500}
                  />
                ))}
                
              </div>
              <div className="md:7/12 lg:w-6/12">
                {about.map((about, index) => (
                  <h2
                    key={index}
                    className="text-2xl text-gray-900 font-bold md:text-4xl"
                  >
                    {about.abouttitle}
                  </h2>
                ))}
                 <div className="w-16 border border-b-2 border-red-500 mt-4"></div>
                {about.map((about, index) => (
                  <p key={index} className="mt-6 text-gray-600">
                    {about.content}{" "}
                  </p>
                  // <p  key={index}  className="mt-6 text-gray-600"> <BlockContent blocks={about.content} serializers={serializers} imageOptions={{w: 320, h: 240,}} /></p>
                ))}
              </div>
            </div>
          </div>
        </div>

{/* section 2  */}

        <div className="py-16 bg-gray-100">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:7/12 lg:w-6/12">
                {about.map((about, index) => (
                  <h2
                    key={index}
                    className="text-2xl text-gray-900 font-bold md:text-4xl"
                  >
                    Бид юу хийдэг вэ?
                    {/* {about.abouttitle} */}
                  </h2>
                  
                ))}
                 <div className="w-16 border border-b-2 border-red-500 mt-4"></div>
                {about.map((about, index) => (
                  <p key={index} className="mt-6 text-gray-600">
                    {about.content}{" "}
                  </p>
                  // <p  key={index}  className="mt-6 text-gray-600"> <BlockContent blocks={about.content} serializers={serializers} imageOptions={{w: 320, h: 240,}} /></p>
                ))}
              </div>
              <div className="md:5/12 lg:w-5/12">
                {about.map((about, index) => (
                  <Image
                    key={index}
                    src={about.aboutimage}
                    alt="image"
                    loading="lazy"
                    width={550}
                    height={500}
                  />
                ))}
                
              </div>
              
            </div>
          </div>
        </div>
        {/* section  */}

        <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12">
                {about.map((about, index) => (
                  <Image
                    key={index}
                    src={about.aboutimage}
                    alt="image"
                    loading="lazy"
                    width={550}
                    height={500}
                  />
                ))}
                
              </div>
              <div className="md:7/12 lg:w-6/12">
                {about.map((about, index) => (
                  <h2
                    key={index}
                    className="text-2xl text-gray-900 font-bold md:text-4xl "
                  >
                    Бид юуг зорьдог вэ?
                    {/* {about.abouttitle} */}
                  </h2>
                  
                ))}
                <div className="w-16 border border-b-2 border-red-500 mt-4"></div>
                {about.map((about, index) => (
                  <p key={index} className="mt-6 text-gray-600">
                    {about.content}{" "}
                  </p>
                  // <p  key={index}  className="mt-6 text-gray-600"> <BlockContent blocks={about.content} serializers={serializers} imageOptions={{w: 320, h: 240,}} /></p>
                ))}
              </div>
            </div>
          </div>
        </div>



{/* 
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12 xl:px-32">
            <div className="mb-16 text-center">
              {about.map((about, index) => (
                <h2
                  key={index}
                  className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl"
                >
                  {about.leadershiptitle}
                </h2>
              ))}
              {about.map((about, index) => (
                <p key={index} className="text-gray-600 lg:w-8/12 lg:mx-auto">
                  {about.leadershipdescription}
                </p>
              ))}
            </div>
            <div className="grid gap-12 items-center md:grid-cols-3">
              <div className="space-y-4 text-center">
                {about.map((about, index) => (
                  <Image
                    key={index}
                    className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                    src={about.founderimage1}
                    alt="profile"
                    loading="lazy"
                    width={500}
                    height={400}
                  />
                ))}
                <div>
                  {about.map((about, index) => (
                    <h4 key={index} className="text-2xl">
                      {about.founder1}
                    </h4>
                  ))}
                  {about.map((about, index) => (
                    <span key={index} className="block text-sm text-gray-500">
                      {about.foundersub1}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-4 text-center">
                {about.map((about, index) => (
                  <Image
                    key={index}
                    className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
                    src={about.founderimage2}
                    alt="image"
                    loading="lazy"
                    width={640}
                    height={667}
                  />
                ))}
                <div>
                  {about.map((about, index) => (
                    <h4 key={index} className="text-2xl">
                      {about.founder2}
                    </h4>
                  ))}
                  {about.map((about, index) => (
                    <span key={index} className="block text-sm text-gray-500">
                      {about.foundersub2}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-4 text-center">
                {about.map((about, index) => (
                  <Image
                    key={index}
                    className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                    src={about.founderimage3}
                    alt="image"
                    loading="lazy"
                    width={500}
                    height={400}
                  />
                ))}
                <div>
                  {about.map((about, index) => (
                    <h4 key={index} className="text-2xl">
                      {about.founder3}
                    </h4>
                  ))}
                  {about.map((about, index) => (
                    <span key={index} className="block text-sm text-gray-500">
                      {about.foundersub3}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="py-16 bg-white">
          <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
            <div className="m-auto text-center lg:w-7/12">
              <h2 className="text-2xl text-gray-700 font-bold md:text-4xl">
              ХАМТРАГЧ БАЙГУУЛЛАГУУД
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              <div className="p-4">
                <Image
                  src={
                    "https://tailus.io/sources/blocks/company-site/preview/images/clients/airbnb.svg"
                  }
                  width={96}
                  height={52}
                  className=""
                  alt=""
                />
              </div>
              <div className="p-4">
                <Image
                  src={
                    "https://tailus.io/sources/blocks/company-site/preview/images/clients/client-8.png"
                  }
                  width={96}
                  height={52}
                  className="w-32 "
                  alt=""
                />
              </div>
              <div className="p-4">
                <Image
                  src={
                    "https://tailus.io/sources/blocks/company-site/preview/images/clients/client-3.png"
                  }
                  width={96}
                  height={52}
                  className="w-32 "
                  alt=""
                />
              </div>
              <div className="p-4">
                <Image
                  src={
                    "https://tailus.io/sources/blocks/company-site/preview/images/clients/client-1.png"
                  }
                  width={96}
                  height={52}
                  className="w-32 "
                  alt=""
                />
              </div>
              <div className="p-4">
                <Image
                  src={
                    "https://tailus.io/sources/blocks/company-site/preview/images/clients/tailus.svg"
                  }
                  width={96}
                  height={52}
                  className="w-32"
                  alt=""
                />
              </div>
              <div className="p-4">
                <Image
                  src={
                    "https://tailus.io/sources/blocks/company-site/preview/images/clients/microsoft.svg"
                  }
                  width={96}
                  height={52}
                  className="w-32"
                  alt=""
                />
              </div>
              <div className="p-4">
                <Image
                  src={
                    "https://tailus.io/sources/blocks/company-site/preview/images/clients/coty.svg"
                  }
                  width={96}
                  height={52}
                  className="w-20"
                  alt=""
                />
              </div>
              <div className="p-4">
                <Image
                  src={
                    "https://tailus.io/sources/blocks/company-site/preview/images/clients/client-4.png"
                  }
                  width={96}
                  height={52}
                  className="w-24"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        
      </Layout>
    </div>
  );
}

export const getServerSideProps = async () => {
  const about = await getAllAboutPage();
  const banner = await getAllbanner();

  return {
    props: {
      about,
      banner,
    },
  };
};
