import Layout from "./component/layout";
import emailjs from "emailjs-com";
import Image from "next/image";
import Link from "next/link";
import { getAllContactPage } from "../lib/api";

export default function Contact({ contact }) {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2ql6waj",
        "template_v97hbpl",
        e.target,
        "qPLwK4Kr5Xb-xPedU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      {" "}
      <Layout>
        {contact.map((contact, index) => (
          <Image
            key={index}
            src={contact.contactbanner}
            alt="banner image"
            objectFit="cover"
            width={2000}
            height={600}
          />
        ))}
        <div className="container mx-auto text-center pt-8">
          <div className="font-medium ">
            {contact.map((contact, index) => (
              <h1
                key={index}
                className="text-slate-700  text-2xl font-semibold md:my-8"
              >
                {contact.contacttitle}
              </h1>
            ))}
          </div>
        </div>
        {/* <pre>{JSON.stringify(contact, null, 2)}</pre> */}
        <div className="container md:columns-2 mx-auto p-4">
          <div className="container mx-auto lg:flex lg:bg-slate-100 py-12 lg:p-0   lg:m-0  xl:ml-16 lg:mt-0 md:mb-96 md:h-[500px] ">
            {contact.map((contact, index) => (
              <Image
                key={index}
                className="ml-24"
                src={contact.contactimage}
                alt=""
                loading="lazy"
                objectFit="cover"
                width={500}
                height={300}
              />
            ))}
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <div>
                {contact.map((contact, index) => (
                  <p key={index} className="text-lg font-medium max-w-2xl">
                    {contact.contacdescription}
                  </p>
                ))}
              </div>

              <div className="flex gap-2">
                <div className="pt-1 ">
                  <svg
                    width="18"
                    height="17"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" />
                  </svg>
                </div>
                {contact.map((contact, index) => (
                  <div key={index}>{contact.contactphone}</div>
                ))}
              </div>
              <div className="flex gap-2">
                <div className="pt-1 ">
                  <svg
                    width="18"
                    height="17"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" />
                  </svg>
                </div>
                {contact.map((contact, index) => (
                  <div key={index}>{contact.contactemail}</div>
                ))}
              </div>
              <div className="flex gap-2">
                <div className="pt-1 ">
                  <svg
                    width="18"
                    height="17"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" />
                  </svg>
                </div>
                <div>
                  {contact.map((contact, index) => (
                    <div key={index}>{contact.contactaddress}</div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-x-4 mt-12">
                {contact.map((contact, index) => (
                  <Link key={index} href={contact.facebook}>
                    <a>
                      <button
                        aria-label="facebook"
                        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center"
                      >
                        <svg
                          width="30"
                          height="30"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                        >
                          <path fillRule="evenodd" clipRule="evenodd"></path>
                          <path
                            fill="#fff"
                            d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                          ></path>
                        </svg>
                      </button>
                    </a>
                  </Link>
                ))}

                {contact.map((contact, index) => (
                  <Link key={index} href={contact.instagram}>
                    <a>
                      <button
                        aria-label="instagram"
                        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center"
                      >
                        <svg
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.00081 0.233398C6.68327 0.233398 6.39243 0.243215 5.48219 0.283343C4.57374 0.323644 3.95364 0.462973 3.41106 0.667403C2.84981 0.87855 2.37372 1.161 1.8994 1.62066C1.42473 2.08016 1.13317 2.54137 0.914502 3.08491C0.702944 3.61071 0.558942 4.2116 0.518053 5.09132C0.477342 5.97311 0.466675 6.25504 0.466675 8.50015C0.466675 10.7453 0.476986 11.0262 0.518231 11.9079C0.560009 12.788 0.703833 13.3887 0.914679 13.9144C1.13282 14.4581 1.42437 14.9193 1.89887 15.3788C2.37301 15.8386 2.8491 16.1218 3.40999 16.3329C3.95293 16.5373 4.57321 16.6767 5.48148 16.717C6.39171 16.7571 6.68238 16.7669 8.99974 16.7669C11.3175 16.7669 11.6074 16.7571 12.5176 16.717C13.4261 16.6767 14.0469 16.5373 14.5898 16.3329C15.1509 16.1218 15.6263 15.8386 16.1004 15.3788C16.5751 14.9193 16.8667 14.4581 17.0853 13.9145C17.2951 13.3887 17.4391 12.7878 17.4818 11.9081C17.5227 11.0263 17.5333 10.7453 17.5333 8.50015C17.5333 6.25504 17.5227 5.97328 17.4818 5.09149C17.4391 4.21143 17.2951 3.61071 17.0853 3.08508C16.8667 2.54137 16.5751 2.08016 16.1004 1.62066C15.6258 1.16082 15.1511 0.878377 14.5893 0.667403C14.0453 0.462973 13.4249 0.323644 12.5164 0.283343C11.6062 0.243215 11.3164 0.233398 8.99814 0.233398H9.00081ZM8.23525 1.72311C8.46245 1.72277 8.71597 1.72311 9.00077 1.72311C11.2792 1.72311 11.5492 1.73104 12.449 1.77065C13.281 1.8075 13.7326 1.94218 14.0334 2.05533C14.4316 2.20517 14.7155 2.38428 15.014 2.67362C15.3127 2.96295 15.4976 3.23851 15.6526 3.62429C15.7694 3.91535 15.9086 4.3528 15.9464 5.15881C15.9873 6.03026 15.9962 6.29204 15.9962 8.49823C15.9962 10.7044 15.9873 10.9662 15.9464 11.8377C15.9084 12.6437 15.7694 13.0811 15.6526 13.3722C15.4979 13.758 15.3127 14.0327 15.014 14.3218C14.7153 14.6112 14.4318 14.7903 14.0334 14.9401C13.7329 15.0538 13.281 15.1881 12.449 15.225C11.5494 15.2646 11.2792 15.2732 9.00077 15.2732C6.72217 15.2732 6.45212 15.2646 5.55256 15.225C4.72055 15.1878 4.26899 15.0531 3.96801 14.9399C3.56978 14.7901 3.28533 14.611 2.98666 14.3216C2.68799 14.0323 2.5031 13.7574 2.34808 13.3715C2.23128 13.0804 2.09208 12.643 2.05421 11.837C2.01332 10.9655 2.00514 10.7037 2.00514 8.49617C2.00514 6.2886 2.01332 6.0282 2.05421 5.15674C2.09226 4.35073 2.23128 3.91329 2.34808 3.62188C2.50275 3.2361 2.68799 2.96054 2.98666 2.67121C3.28533 2.38187 3.56978 2.20276 3.96801 2.05258C4.26881 1.93891 4.72055 1.80457 5.55256 1.76755C6.33977 1.7331 6.64484 1.72277 8.23525 1.72105V1.72311ZM13.5558 3.09574C12.9905 3.09574 12.5318 3.53956 12.5318 4.08741C12.5318 4.63508 12.9905 5.07942 13.5558 5.07942C14.1212 5.07942 14.5799 4.63508 14.5799 4.08741C14.5799 3.53974 14.1212 3.09574 13.5558 3.09574ZM9.00082 4.25481C6.58071 4.25481 4.61855 6.15564 4.61855 8.50013C4.61855 10.8446 6.58071 12.7446 9.00082 12.7446C11.4209 12.7446 13.3824 10.8446 13.3824 8.50013C13.3824 6.15564 11.4209 4.25481 9.00082 4.25481ZM9.00079 5.74454C10.5717 5.74454 11.8453 6.97818 11.8453 8.50013C11.8453 10.0219 10.5717 11.2557 9.00079 11.2557C7.42975 11.2557 6.15632 10.0219 6.15632 8.50013C6.15632 6.97818 7.42975 5.74454 9.00079 5.74454Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </a>
                  </Link>
                ))}
                {contact.map((contact, index) => (
                  <Link key={index} href={contact.youtube}>
                    <a>
                      <button
                        aria-label="youtube"
                        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center"
                      >
                        <svg
                          width="18"
                          height="13"
                          viewBox="0 0 18 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.6677 1.17143C16.4021 1.36664 16.9804 1.94183 17.1767 2.67227C17.5333 3.99611 17.5333 6.75832 17.5333 6.75832C17.5333 6.75832 17.5333 9.52043 17.1767 10.8444C16.9804 11.5748 16.4021 12.15 15.6677 12.3453C14.3369 12.7 9.00001 12.7 9.00001 12.7C9.00001 12.7 3.66309 12.7 2.33218 12.3453C1.59783 12.15 1.0195 11.5748 0.823232 10.8444C0.466675 9.52043 0.466675 6.75832 0.466675 6.75832C0.466675 6.75832 0.466675 3.99611 0.823232 2.67227C1.0195 1.94183 1.59783 1.36664 2.33218 1.17143C3.66309 0.81665 9.00001 0.81665 9.00001 0.81665C9.00001 0.81665 14.3369 0.81665 15.6677 1.17143ZM7.40002 4.43326V9.59993L11.6667 7.01669L7.40002 4.43326Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* --------Email ---------- */}
          <div className="w-full md:w-96 md:max-w-full mx-auto xl:mx-24 pb-12">
            <div className="p-6 border border-gray-300 sm:rounded-md">
              <form onSubmit={sendEmail}>
                <label className="block mb-6">
                  <span className="text-gray-700">Таны нэр </span>
                  <input
                    type="text"
                    name="name"
                    style={{ outline: "none" }}
                    className=" block  w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300  focus:ring  focus:ring-indigo-200
            focus:ring-opacity-50"
                  />
                </label>
                <label className="block mb-6">
                  <span className="text-gray-700">Имэйл хаяг </span>
                  <input
                    type="email"
                    name="email"
                    style={{ outline: "none" }}
                    className="block w-full mt-1 border-gray-300 rounded-md  shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200
            focus:ring-opacity-50"
                    required
                  />
                </label>
                <label className="block mb-6">
                  <span className="text-gray-700">Subject</span>
                  <input
                    type="email"
                    name="name"
                    style={{ outline: "none" }}
                    className="block w-full mt-1 border-gray-300 rounded-md  shadow-sm  hover:border-indigo-300 hover:ring hover:ring-indigo-200
            hover:ring-opacity-50"
                    required
                  />
                </label>
                <label className="block mb-6">
                  <span className="text-gray-700">Санал хүсэлт</span>
                  <textarea
                    name="message"
                    style={{ outline: "none" }}
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200
            focus:ring-opacity-50"
                    id=""
                    cols="30"
                    rows="3"
                  />
                </label>
                <div className="mb-6">
                  <input
                    type="submit"
                    value="Илгээх"
                    className=" h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors 
        duration-150 focus:shadow-outline hover:bg-indigo-800"
                  ></input>
                </div>
                <div></div>
              </form>
            </div>
          </div>
        </div>
      </Layout>{" "}
    </div>
  );
}
export const getServerSideProps = async () => {
  const contact = await getAllContactPage();

  return {
    props: {
      contact,
    },
  };
};
