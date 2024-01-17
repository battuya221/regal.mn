import Layout from "./component/layout";
import { getAllServicePage } from "../lib/api";
import Image from "next/image";

export default function Service({ service }) {
  return (
    <div>
      {" "}
      <Layout>
        {/* <pre>{JSON.stringify(service, null, 2)}</pre> */}
        <div className="py-16 bg-purple-200">
          <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
            <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
              <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                <div className="mb-12 space-y-4">
                  {service.map((service, index) => (
                    <h3
                      key={index}
                      className="text-2xl font-semibold text-purple-900"
                    >
                      {service.servicetitle1}
                    </h3>
                  ))}
                  {service.map((service, index) => (
                    <p key={index} className="mb-6">
                      {service.servicedescription1}
                    </p>
                  ))}
                </div>
                {service.map((service, index) => (
                  <Image
                    key={index}
                    src={service.serviceimage1}
                    className="w-2/3 ml-auto -mb-12"
                    alt="illustration"
                    loading="lazy"
                    width={500}
                    height={500}
                  />
                ))}
              </div>
              <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                <div className="mb-12 space-y-4">
                  {service.map((service, index) => (
                    <h3
                      key={index}
                      className="text-2xl font-semibold text-purple-900"
                    >
                      {service.servicetitle2}
                    </h3>
                  ))}
                  {service.map((service, index) => (
                    <p key={index} className="mb-6">
                      {service.servicedescription2}
                    </p>
                  ))}
                </div>
                {service.map((service, index) => (
                  <Image
                    key={index}
                    src={service.serviceimage2}
                    className="w-2/3 ml-auto -mb-12"
                    alt="illustration"
                    loading="lazy"
                    width={500}
                    height={500}
                  />
                ))}
              </div>
              <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                <div className="mb-12 space-y-4">
                  {service.map((service, index) => (
                    <h3
                      key={index}
                      className="text-2xl font-semibold text-purple-900"
                    >
                      {service.servicetitle3}
                    </h3>
                  ))}
                  {service.map((service, index) => (
                    <p key={index} className="mb-6">
                      {service.servicedescription3}
                    </p>
                  ))}
                  {/* <a href="#" className="block font-medium text-purple-600">Know more</a> */}
                </div>
                {service.map((service, index) => (
                  <Image
                    key={index}
                    src={service.serviceimage3}
                    className="w-2/3 ml-auto -mb-12"
                    alt="illustration"
                    loading="lazy"
                    width={500}
                    height={500}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>{" "}
      </Layout>{" "}
    </div>
  );
}
export const getServerSideProps = async () => {
  const service = await getAllServicePage();

  return {
    props: {
      service,
    },
  };
};
