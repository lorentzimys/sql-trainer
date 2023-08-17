import Image from 'next/image'
import { Avatar } from "@radix-ui/themes";
import React from "react";

export const Header = () => {
  return (
    <header className="flex flex-row h-full w-full gap-2 items-middle mx-2 justify-between">
      <Image
        alt="logo"
        src="https://velopark.info/wp-content/uploads/2021/04/logo-all1.svg"
        width="134"
        height="36"
      />
      <nav className='flex align-middle'>
        <ul className="flex flex-row gap-2">
          <li>Главная</li>
          <li>Бронирование</li>
          <li>Прокат</li>
          <li>Проживание</li>
          <li>Как добраться</li>
        </ul>
      </nav>
    </header>
  )
}