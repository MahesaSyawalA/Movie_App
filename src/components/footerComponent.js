import React from "react";

export function FooterComponent() {
  return (
    <div className=" bg-[#27374D] w-full  auto">
      <div className="flex w-full">
        <div className=" flex lg:flex-col p-10 w-[25%] ">
          <div className="flex w-full h-14 text-[#DDE6ED] text-4xl font-bold px-4  ">
            Logo
          </div>
          <button className=" m-4 py-2 rounded-md bg-[#DDE6ED] hover:bg-[#526D82] text-[#27374D] text-2xl font-bold ">
            Subscribe
          </button>
        </div>
        <div className=" flex p-16 gap-16 w-[30%] text-lg font-semibold text-[#DDE6ED] ">
          <ul className="flex-shrink-0  text-left leading-9 ">
            <li>Careers</li>
            <li>How it works</li>
            <li>Our mission</li>
            <li>Your impact</li>
          </ul>
          <ul className="flex-shrink-0 text-left leading-9">
            <li>FAQs</li>
            <li>Get the app</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="flex-col text-left w-[45%]  text-[#DDE6ED] p-10">
            <h1 className="font-bold text-3xl">Small change. Big change.</h1>
            <p className="font-medium">Copyright &copy; 2021</p>
            <br/>
            <p className="py-2 text-sm opacity-75">THIS WEBSITE IS OPERATED BY TREECARD INC. TREECARD RESERVES THE RIGHT TO RESTRICT OR REVOKE ANY AND ALL OFFERS AT ANY TIME. THE TREECARD MASTERCARDO DEBIT CARD IS ISSUED BY SUTTON BANK, MEMBER FDIC, PURSUANT TO A LICENSE FROM MASTERCARD INTERNATIONAL INCORPORATED</p>
        </div>
      </div>
    </div>
  );
}
