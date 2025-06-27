"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const BottomMenu = () => {
  const [items, setItems] = useState<any | []>([]);
  // Fetch menu items from the API
  const getItemsData = () => {
    fetch("/api/footermenu")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.error("Error fetching menu items:", error);
      });
  };

  useEffect(() => {
    getItemsData();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 justify-center py-6">
      {items &&
        items.length > 0 &&
        items.map((item: any) => (
          <div key={item.title} className="mb-1">
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <ul className="list-none p-0 m-0 ">
              {item.submenu.map((subItem: any) => (
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
