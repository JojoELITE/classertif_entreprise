import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";

export default function Share() {
  return (
    <div className=" w-full  rounded border  py-5">
      <div className="flex flex-col gap-3">
        <h1 className="text-center">Partager  l&apos;offre d&apos;emploi</h1>
        <div className="flex gap-3 justify-center">
          <div className="flex items-center justify-center p-2">
            <div className="rounded border border-gray-300 p-2 bg-white">
              <HiOutlineMailOpen size={19} className="text-black" />
            </div>
          </div>
          <div className="flex items-center justify-center p-2">
            <div className="rounded border border-gray-300 p-2 bg-white">
              <FaFacebookSquare color="blue" size={19} />
            </div>
          </div>
          <div className="flex items-center justify-center p-2">
            <div className="rounded border border-gray-300 p-2 bg-white">
              <FaXTwitter size={19} className="text-blue-400" />
            </div>
          </div>
          <div className="flex items-center justify-center p-2">
            <div className="rounded border border-gray-300 p-2 bg-white">
              <FaInstagramSquare size={19} className="text-pink-600" />
            </div>
          </div>
          <div className="flex items-center justify-center p-2">
            <div className="rounded border border-gray-300 p-2 bg-white">
              <FaWhatsapp size={19} className="text-green-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
