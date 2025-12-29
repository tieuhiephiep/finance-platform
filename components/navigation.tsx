"use client";

import { usePathname } from "next/navigation";
import { useMedia } from "react-use"; // Bạn có thể cần cài thêm: npm i react-use
import { useState } from "react";
// Import các component UI từ shadcn (Sheet, Button...) sẽ bổ sung sau
// Tạm thời hiển thị danh sách đơn giản

const routes = [
  { href: "/", label: "Overview" },
  { href: "/transactions", label: "Transactions" },
  { href: "/accounts", label: "Accounts" },
  { href: "/categories", label: "Categories" },
  { href: "/settings", label: "Settings" },
];

export const Navigation = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Todo: Sẽ bổ sung logic Responsive (Mobile/Desktop) sau
  return (
    <div className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {routes.map((route) => (
         <button
            key={route.href}
            className="text-white bg-transparent hover:bg-white/20 hover:text-white border-none outline-none font-normal transition px-4 py-2 rounded-md"
         >
           {route.label}
         </button>
      ))}
    </div>
  );
};