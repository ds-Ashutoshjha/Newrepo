import * as React from "react";

const Footer = () => {
  return (
    <footer className="">
      <div className="flex flex-col flex-wrap justify-center p-5 md:flex-row">
        <span className="inline-flex justify-center w-full mx-auto mt-2 mr-2 sm:ml-auto sm:mt-0 space-x-3">
          <a className="text-black hover:text-blue-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="text-black hover:text-blue-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="text-black hover:text-blue-500">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="text-black hover:text-blue-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
      <div className=" pt-10 pb-10" style={{backgroundColor: "black",color:"White"}}>
        <div className="w-full px-12  rounded-b-lg bg-blueGray-50">
            <div className="grid grid-cols-4 gap-x-10 gap-y-10">
                <div className="footer-1">
                  <h2 style={{fontSize: "22px"}}>Quick Links</h2>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Faq</a></li>
                    <li><a href="#">Services</a></li>
                  </ul>
                  </div>
                <div className="footer-1">
                  <h2 style={{fontSize: "22px"}}>Our Categories</h2>
                  {/* <ul>
                    <li><a href="#">Category 1</a></li>
                    <li><a href="#">Category 2</a></li>
                    <li><a href="#">Category 3</a></li>
                    <li><a href="#">Category 4</a></li>
                    <li><a href="#">Category 5</a></li>
                  </ul> */}
                  </div>
                <div className="footer-1">
                  <h2 style={{fontSize: "22px"}}>Pages</h2>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Faq</a></li>
                    <li><a href="#">Services</a></li>
                  </ul>
                  </div>
                <div className="footer-1">
                        <h2 style={{fontSize: "22px"}}>Contact US</h2>
                        {/* <p>Your visual experience is also improved by the laptop's 39.62 cm (15.6) FHD anti-glare display, which brings each image on the screen to life. Additionally, this laptop offers 256 GB of SSD storage and 4 GB of RAM</p> */}
                        <div className="mt-5 flex flex-col flex-wrap justify-center p-5 md:flex-row">
                            <span className="inline-flex w-full mx-auto mt-2 mr-2 sm:ml-auto sm:mt-0 space-x-3">
                              <a className="text-white hover:text-blue-500" style={{color: "#ffffff"}} >
                                <svg
                                  fill="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  className="w-5 h-5"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                              </a>
                              <a className="text-black hover:text-blue-500" style={{color: "#ffffff"}}>
                                <svg
                                  fill="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  className="w-5 h-5"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                              </a>
                              <a className="text-black hover:text-blue-500" style={{color: "#ffffff"}}>
                                <svg
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  className="w-5 h-5"
                                  viewBox="0 0 24 24"
                                >
                                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                              </a>
                              <a className="text-black hover:text-blue-500" style={{color: "#ffffff"}}>
                                <svg
                                  fill="currentColor"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="0"
                                  className="w-5 h-5"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                  ></path>
                                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                              </a>
                            </span>
                        </div>
                
                  </div>

            </div>
        </div>
      </div>

      <div className="w-full px-8  rounded-b-lg bg-blueGray-50" style={{backgroundColor: "#000000d9"}}>
        <div className="container inline-flex flex-col flex-wrap items-center px-5 py-6 mx-auto sm:flex-row">
          <p className="mx-auto text-sm text-center text-black sm:text-left " style={{color: "#ffffff"}}>
            {" "}
            © 2023 Selectors. All Rights Reserved.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;