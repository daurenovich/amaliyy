// src/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 ">
      <div className="container mx-auto flex justify-between px-6 py-8">
        <div className="flex flex-col">
          <h5 className="font-bold mb-2">Support</h5>
          <ul className="cursor-pointer ">
            <li>Help Centre</li>
            <li>AirCover</li>
            <li>Combating discrimination</li>
            <li>Supporting people with disabilities</li>
            <li>Cancellation options</li>
            <li>Report neighbourhood concern</li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h5 className="font-bold mb-2">Hosting</h5>
          <ul className="cursor-pointer ">
            <li>Local home</li>
            <li>Cover for hosts</li>
            <li>Hosting resources</li>
            <li>Community forum</li>
            <li>Hosting responsibly</li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h5 className="font-bold mb-2">Localhost</h5>
          <ul className="cursor-pointer ">
            <li>Newsroom</li>
            <li>New Features</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Gift cards</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 bg-gray-300 h-[25px] ">
        <p className="text-sm text-gray-600 flex">
          &copy; 2023 Localhost, Inc. All Rights Reserved
        </p>
        <p className="text-sm text-gray-600  mt-[-20px]">
          <a href="#" className="hover:text-blue-500">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="hover:text-blue-500">
            Terms & Conditions
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
