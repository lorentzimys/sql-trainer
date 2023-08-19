import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./header.module.css";

export const Header2 = () => {
  return (
    <div className="bg-gray-100 min-w-screen sticky top-0 z-50">
      <header className="w-full text-gray-700 bg-white border-t border-gray-100 shadow-sm body-font">
        <div className="container flex flex-row items-start justify-between p-6 mx-auto">
          <Link
            href="/"
            className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0"
          >
            <Image
              className="overflow-hidden h-6 w-12"
              src="/sql_logo1.png"
              alt="logo"
              width="134"
              height="36"
            />
          </Link>
          <nav className={styles.nav}>
            <Link className={styles.navlink} href="/guide">
              Курс
            </Link>
            <Link className={styles.navlink} href="/trainer">
              Тренажер
            </Link>
            <Link className={styles.navlink} href="/guide">
              Еще
            </Link>
          </nav>
          <div className="items-center h-full">
            {/* <a href="#_" className="mr-5 font-medium hover:text-gray-900">Login</a> */}
            <a
              href="#_"
              className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
            >
              Войти
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};
