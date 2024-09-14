"use client";
import { Feature } from "./Feature";
export function Infscroll() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="font-serif font-semibold text-5xl  text-center pt-8 max-w-xl">
          Your automation tools in one place—not 10
        </div>
      </div>
      <div className="flex justify-center pt-2">
        <div className=" font-Raleway text-xl text-center pt-8 max-w-2xl">
          Zapsync enables businesses to scale automation faster and grow with
          confidence.
        </div>
      </div>
      {/*  Curved */}
      <div className="flex gap-4 justify-center">
        <div className="bg-gray-100 rounded-full px-6 py-4 shadow-md flex items-center">
          <span className="font-semibold text-black mr-2">
            SOC II / SOC III
          </span>
          <span className="text-sm text-gray-500">Fully compliant</span>
        </div>

        <div className="bg-gray-100 rounded-full px-6 py-4 shadow-md flex items-center">
          <span className="font-semibold text-black mr-2">256-bit AES</span>
          <span className="text-sm text-gray-500">
            To ensure safe data storage
          </span>
        </div>

        <div className="bg-gray-100 rounded-full px-6 py-4 shadow-md flex items-center">
          <span className="font-semibold text-black mr-2">
            24/5 tech support
          </span>
          <span className="text-sm text-gray-500">There if you need it</span>
        </div>
      </div>
    </div>
  );
}

