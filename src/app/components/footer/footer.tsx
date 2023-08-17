import React from "react";

import { LanguageSelector } from "../languageSelector";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 min-w-screen sticky bottom-0">
      <div className="container flex flex-row gap-16 items-middle justify-between p-4 mx-auto">
        <div className="flex flex-row gap-4 items-center">
          <a href="#" className="flex flex-row gap-2 items-center">
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.46817 2.46817C0.5 4.43633 0.5 7.60444 0.5 13.94V15.06C0.5 21.3956 0.5 24.5637 2.46817 26.5318C4.43633 28.5 7.60444 28.5 13.94 28.5H15.06C21.3956 28.5 24.5637 28.5 26.5318 26.5318C28.5 24.5637 28.5 21.3956 28.5 15.06V13.94C28.5 7.60444 28.5 4.43633 26.5318 2.46817C24.5637 0.5 21.3956 0.5 15.06 0.5H13.94C7.60444 0.5 4.43633 0.5 2.46817 2.46817ZM5.225 9.01669H8.42169C8.52669 14.36 10.8833 16.6233 12.75 17.09V9.01669H15.76V13.625C17.6033 13.4267 19.54 11.3267 20.1933 9.01669H23.2033C22.9571 10.2147 22.4662 11.3489 21.7616 12.3487C21.0571 13.3484 20.1538 14.1919 19.1083 14.8267C20.2756 15.4062 21.3067 16.2269 22.1332 17.2344C22.9598 18.2421 23.5631 19.4136 23.9033 20.6717H20.59C20.2847 19.5789 19.6634 18.6006 18.8041 17.8596C17.9448 17.1187 16.8858 16.648 15.76 16.5067V20.6717H15.3983C9.01669 20.6717 5.37667 16.2967 5.225 9.01669Z" fill="#333333"/>
            </svg>
            Связаться с нами
          </a>
          <a href="#">Пользовательское соглашение</a>
        </div>
        <div className="flex flex-row gap-8">
          <LanguageSelector />
        </div>
      </div>
    </footer>
  )
}