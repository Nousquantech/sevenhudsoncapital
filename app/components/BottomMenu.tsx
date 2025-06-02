import Link from "next/link";
import React from "react";

const MenuItems = [
  {
    title: "About",
    submenu: [
      { title: "Contact Us", link: "#" },
      { title: "Insights", link: "#" },
      { title: "Get Started", link: "#" },
      { title: "Careers", link: "#" },
    ],
  },
  {
    title: "Help & FAQ",
    submenu: [
      { title: "FAQs", link: "#" },
      { title: "Key Financial Terms", link: "#" },
    ],
  },
  {
    title: "Solutions",
    submenu: [
      { title: "ETF Data & Analytics", link: "#" },
      { title: "ETF & Mutual Fund Research", link: "#" },
      { title: "Forensic Accounting Research", link: "#" },
      { title: "Fundamental Equity Research", link: "#" },
      { title: "Public Policy & Legal Research", link: "#" },
      { title: "Technical Research", link: "#" },
    ],
  },
  {
    title: "Who We Serve ",
    submenu: [
      { title: "Wealth Management", link: "#" },
      { title: "Institutional Investors", link: "#" },
      { title: "Financial Advisors", link: "#" },
      { title: "Individual Investors", link: "#" },
    ],
  },
];
const BottomMenu = () => {
  return (
    <div className="grid grid-cols-4 gap-3 justify-center py-6">
      {MenuItems.map((item) => (
        <div key={item.title} className="mb-1">
          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
          <ul className="list-none p-0 m-0 ">
            {item.submenu.map((subItem) => (
              <li key={subItem.title} className="mb-1">
                <Link href={subItem.link} className="text-xl hover:underline">
                  {subItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default BottomMenu;
