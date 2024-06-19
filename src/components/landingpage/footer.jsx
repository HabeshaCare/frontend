import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1F555D] text-white py-8 mt-12">
      <div className="container mx-auto text-center">
        <div className="text-xl font-semibold">Empowering Your Health Journey</div>
        <div className="mt-4">
          <p className="text-base">
            © 2024 HealthCare, Inc. All rights reserved.
          </p>
          <p className="text-base mt-2">
            <a href="/terms" className="underline">
              Terms of Service
            </a>{" "}
            |{" "}
            <a href="/privacy" className="underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
