import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Top Searches */}
          <div className="mb-4 md:mb-0">
            <h3 className="font-semibold">Top Searches</h3>
            <ul className="mt-2 space-y-1">
              {[
                "Slack Integrations",
                "Salesforce Integrations",
                "HubSpot CRM Integrations",
                "PayPal Integrations",
                "Asana Integrations",
              ].map((item) => (
                <li key={item}>
                  <Link href="#">{item}</Link>
                </li>
              ))}
              <li>
                <Link href="#">Show more</Link>
              </li>
            </ul>
          </div>

          {/* Popular Apps */}
          <div className="mb-4 md:mb-0">
            <h3 className="font-semibold">Popular Apps</h3>
            <ul className="mt-2 space-y-1">
              {[
                "Dropbox",
                "Google Sheets",
                "DocuSign",
                "WordPress",
                "Office 365",
              ].map((item) => (
                <li key={item}>
                  <Link href="#">{item}</Link>
                </li>
              ))}
              <li>
                <Link href="#">Show more</Link>
              </li>
            </ul>
          </div>

          {/* Trending Apps */}
          <div className="mb-4 md:mb-0">
            <h3 className="font-semibold">Trending Apps</h3>
            <ul className="mt-2 space-y-1">
              {[
                "Twitch",
                "Calendly",
                "Microsoft To-Do",
                "Microsoft Outlook",
                "Medium",
              ].map((item) => (
                <li key={item}>
                  <Link href="#">{item}</Link>
                </li>
              ))}
              <li>
                <Link href="#">Show more</Link>
              </li>
            </ul>
          </div>

          {/* Top Apps by Category */}
          <div className="mb-4 md:mb-0">
            <h3 className="font-semibold">Top Apps by Category</h3>
            <ul className="mt-2 space-y-1">
              {[
                "Project Management",
                "Calendar",
                "Email",
                "CRM",
                "Marketing Automation",
              ].map((item) => (
                <li key={item}>
                  <Link href="#">{item}</Link>
                </li>
              ))}
              <li>
                <Link href="#">Show more</Link>
              </li>
            </ul>
          </div>

          {/* Our Best Content */}
          <div className="mb-4 md:mb-0">
            <h3 className="font-semibold">Our Best Content</h3>
            <ul className="mt-2 space-y-1">
              {[
                "Best Video Conferencing Apps",
                "Best Email Apps",
                "Best CRM Apps",
                "Best Note Taking Apps",
                "Best Calendar Apps",
              ].map((item) => (
                <li key={item}>
                  <Link href="#">{item}</Link>
                </li>
              ))}
              <li>
                <Link href="#">Show more</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-5 text-center text-gray-500">
          <p>© 2024 ZapSync Inc. Legal Privacy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
