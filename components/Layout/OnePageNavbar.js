import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from '@nextui-org/react';
import Image from 'next/image';
import { ThemeSwitcher } from '../ThemeSwitcher';
import ModalContact from '../Modal';
import { useTheme } from 'next-themes'; // Используем для определения текущей темы

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const { theme } = useTheme(); // Получаем текущую тему

  const menuItems = [
    'Home',
    'Main',
    'Features',
    'About',
    'Services',
    'Reviews',
    'FAQ',
  ];

  const handleMenuItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <Navbar
      // onMenuOpenChange={setIsMenuOpen}
      height="80px"
      maxWidth="xl"
    >
      <NavbarContent>
        {/* <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        /> */}
        <NavbarBrand className="flex items-center justify-center">
          <Image
            сlassName="w-fit mx-auto"
            src="/images/oooh.png"
            alt="logo"
            width={250}
            height={100}
          />
        </NavbarBrand>
      </NavbarContent>

      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              href={`#${item.toLowerCase()}`}
              aria-current={activeItem === item ? 'page' : undefined}
              className={`${
                activeItem === item
                  ? theme === 'dark'
                    ? 'text-yellow-500'
                    : 'text-blue-500'
                  : 'text-foreground'
              }`}
              onClick={() => handleMenuItemClick(item)}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:block">
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <ModalContact />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className={`w-full text-3xl  ${
                activeItem === item
                  ? theme === 'dark'
                    ? 'text-yellow-500'
                    : 'text-blue-500'
                  : 'text-foreground'
              }`}
              href={`#${item.toLowerCase()}`}
              onClick={() => handleMenuItemClick(item)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <ThemeSwitcher />
        </NavbarMenuItem>
      </NavbarMenu> */}
    </Navbar>
  );
}
