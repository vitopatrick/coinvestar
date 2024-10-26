import Link from "next/link";
import React from "react";
import Logo from "../../../shared/logo/Logo";
// import Logo from "../../../shared/logo/Logo";

const Footer = () => {
  return (
    <footer className="text-white p-5 bg-neutral-900">
      <div className="mx-auto md:w-[70%]">
        {/* container */}
        <div className="flex gap-4 md:gap-10 flex-col  md:flex-row">
          {/* about link */}
          <div>
            <h4 className="text-lg underline font-bold text-teal-400">
              About Us
            </h4>
            <div className="flex-col flex gap-2 mt-4">
              <Link href="/about" className="text-md font-medium">
                About Us
              </Link>
              <Link href="/contact" className="text-md font-medium">
                Contact Us
              </Link>
              <Link href="/faq" className="text-md font-medium">
                FAQ
              </Link>
              <Link href="/risk" className="text-md font-medium">
                Risk
              </Link>
            </div>
          </div>
          {/* end of about links */}
          {/* about link */}
          <div>
            <h4 className="text-lg underline font-bold text-teal-400">
              Getting Started
            </h4>
            <div className="flex-col flex gap-2 mt-4">
              <Link href="/auth/sign-in" className="text-md font-medium">
                Login
              </Link>
              <Link href="/auth/sign-up" className="text-md font-medium">
                Sign Up
              </Link>
            </div>
          </div>
          {/* end of about links */}
        </div>
        {/* end of container */}
        <hr className="my-8 border border-neutral-800" />
        {/* warning */}
        <div className="my-8 text-sm text-neutral-500 leading-loose">
          The financial services provided by this website carry a high level of
          risk and can result in the loss of all of your funds. You should never
          invest money that you cannot afford to lose. Please ensure you read
          our terms and conditions before making any operation in the platform.
          Under no circumstances the company has any liability to any person or
          entity for any loss or damage cause by operations on this website. Neo
          Exchanger nor its agents or partners are not registered and do not
          provide any services on the USA territory.
        </div>
        {/* end of warning */}
      </div>
      {/* logo and trademark */}
      <div className="flex flex-col justify-center items-center">
        <Logo lg={10} />

        <div className="text-center space-y-3">
          <p className="text-neutral-500">
            Chat with our customer support 24/7 online
          </p>
          <p className="text-neutral-500">
            © Neo Exchanger {new Date().getFullYear()}
          </p>
        </div>
      </div>
      {/* end of logo and trademark */}
    </footer>
  );
};

export default Footer;
