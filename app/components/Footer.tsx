import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import TikTokIcon from "../../components/ui/TikTok";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white-200 text-gray-800 py-8">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <div className="flex flex-wrap justify-between">
          <div className="mb-4 w-full sm:w-1/2 lg:w-1/4">
            <h2 className="text-xl font-bold mb-2 text-lg font-semibold text-primary">
              So Baked CBD Dispensary
            </h2>
            <Image
              src="/sobaked.jpg"
              alt="Great Photo"
              className="object-cover object-center"
              width={100}
              height={50}
              priority
            />
            <ul className="list-none">
              <li>
                <a
                  href="/"
                  className="hover:text-gray-400 transition duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/Edibles"
                  className="hover:text-gray-400 transition duration-200"
                >
                  Edibles
                </a>
              </li>
              <li>
                <a
                  href="/Medication"
                  className="hover:text-gray-400 transition duration-200"
                >
                  Medication
                </a>
              </li>
              {/* <li>
                <a
                  href="/Sweets"
                  className="hover:text-gray-400 transition duration-200"
                >
                  Sweets
                </a>
              </li> */}
            </ul>
          </div>

          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
            <h2 className="text-xl font-bold mb-2">Connect With Us </h2>
            <ul className="list-none  ">
              <li>
                <a
                  href="/"
                  className="hover:text-gray-400 transition duration-200"
                >
                  Call : 074 222 9179 | 078 457 5842
                </a>
              </li>
              <li></li>
              <li className=" flex items-center mx-auto mt-2 ">
                <span className="text-xl mr-2">
                  <a
                    href="https://www.facebook.com/profile.php?id=100078777731597"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition duration-200"
                  >
                    <FaFacebook />
                  </a>
                </span>
                <span className="text-xl mr-2">
                  <a
                    href="https://www.tiktok.com/@sobaked_dbn1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition duration-200 "
                  >
                    <TikTokIcon />
                  </a>
                </span>
                <span className="text-xl">
                  <a
                    href="https://www.instagram.com/sobakedCBD?fbclid=IwAR1n9qQxUBczkumUqvXkQ_UEyOPSqcOptU4dPCASJGQIvIFW9B0xy5nEJD8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition duration-200"
                  >
                    <FaInstagram />
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <h2 className="text-lg font-semibold">Location</h2>
            <p>
              Shop1, Yudisa Center <br />
              59 Manor Drive <br />
              Stanger Manor <br />
              Kwadukuza <br />
              4449
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <h2 className="text-lg font-semibold">Location</h2>
            <p>
              Shop1, Chatsworth Main <br />
              12 Tranquil Street <br />
              Croftdene <br />
              Chatsworth <br />
              4092
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <h2 className="text-lg font-semibold">Location</h2>
            <p>
              Shop1, Rocket Towers <br />
              290 Lenny Naidu Drive <br />
              Bayview <br />
              Chatsworth <br />
              4092
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-600 pt-4">
          <a
            href="https://ve3z.co.za/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-200"
          >
            Design by ve3z
          </a>
          <p className="text-sm text-gray-500">
            <br />
            &copy; {new Date().getFullYear()} V @ A Bakery. All rights reserved.
          </p>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
