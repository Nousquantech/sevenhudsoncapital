"use client";

import { useState, Fragment, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import * as HiIcon from "react-icons/hi";
import * as HiIcon2 from "react-icons/hi2";
import { DynamicIcon, Logo } from "@/components/index";

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Menu = () => {
  const router = useRouter();
  const [items, setItems] = useState<any | []>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Fetch menu items from the API
  const getItemsData = () => {
    fetch("/api/menu")
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
    <header className="bg-white">
      <div className="mx-auto xl:max-w-7xl lg:max-w-5xl max-w-sm">
        <nav
          aria-label="Global"
          className="mx-auto flex  items-center justify-between py-6 lg:px-8 px-4"
        >
          <div className="flex lg:flex-1">
            <Logo className="h-20 w-auto" type="primary" />
          </div>
          {/* Mobile Menu hamburger */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <HiIcon2.HiBars3 aria-hidden="true" className="size-6" />
            </button>
          </div>
          {/* Main Menu */}
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              {items &&
                items.length > 0 &&
                items.map((item: any) => (
                  <NavigationMenuItem key={item.name}>
                    {item.isSubmenu === false ? (
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="text-sm/6 font-bold text-navi"
                        >
                          {item.name}
                        </Link>
                      </NavigationMenuLink>
                    ) : (
                      <>
                        <NavigationMenuTrigger>
                          <div className="text-sm/6 font-bold text-navi">
                            {item.name}
                          </div>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="relative z-50">
                          <div className="p-4 ">
                            <div className="flex flex-row gap-x-6 ">
                              {Array.isArray(item.submenu) &&
                                item.submenu.map((subitem: any) => (
                                  <div
                                    key={subitem.title}
                                    className="grow  min-w-3xs"
                                  >
                                    <p className="p-4 text-navi-op font-bold text-lg">
                                      {subitem.title}
                                    </p>
                                    {subitem.subitems.map((subsubitem: any) => (
                                      <div
                                        key={subsubitem.name}
                                        className="group relative flex items-left gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                                      >
                                        {subsubitem.icon && (
                                          <div className="flex size-11  flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <DynamicIcon
                                              iconName={subsubitem.icon}
                                            />
                                          </div>
                                        )}
                                        <div className="flex-auto">
                                          <Link
                                            href={subsubitem.href}
                                            className="block font-bold text-navi text-lg"
                                          >
                                            {subsubitem.name}

                                            <span className="absolute inset-0" />
                                          </Link>
                                          {subsubitem.description && (
                                            <p className="mt-1 text-navi text-sm w-80">
                                              {subsubitem.description}
                                            </p>
                                          )}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                ))}
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </>
                    )}
                  </NavigationMenuItem>
                ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu */}
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-10" />
            <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 max-w-full ">
              <div className="flex items-center justify-between">
                <Logo className="h-20 w-auto" type="primary" />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <HiIcon2.HiXMark aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                {items.map((item: any) => (
                  <div key={item.name} className="flex flex-col gap-y-4">
                    {item.submenu === false ? (
                      <Link
                        href={item.href}
                        className="text-base/7 font-bold text-navi py-3"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <Disclosure as="div" className="-mx-3">
                        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-3 pr-3.5 pl-3 text-base/7 font-bold text-navi hover:bg-gray-50">
                          {item.name}
                          <HiIcon.HiChevronDown
                            aria-hidden="true"
                            className="size-5 flex-none group-data-open:rotate-180"
                          />
                        </DisclosureButton>
                        <DisclosurePanel className="mt-2 space-y-2">
                          {Array.isArray(item.submenu) &&
                            item.submenu.map((subitem: any) => (
                              <div
                                key={subitem.title}
                                className="grow  min-w-3xs"
                              >
                                {subitem.subitems.map((subsubitem: any) => (
                                  <div
                                    key={subsubitem.name}
                                    className="group relative flex items-left gap-x-6 rounded-lg p-4 text-sm/3 hover:bg-gray-50"
                                  >
                                    <div className="flex-auto">
                                      <Link
                                        href={subsubitem.href}
                                        className="block font-bold text-navi text-md"
                                      >
                                        {subsubitem.name}
                                        <span className="absolute inset-0" />
                                      </Link>
                                      {subsubitem.description === false ? (
                                        ""
                                      ) : (
                                        <p className="mt-1 text-navi text-sm w-80">
                                          {subsubitem.description}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ))}
                        </DisclosurePanel>
                      </Disclosure>
                    )}
                  </div>
                ))}
              </div>
            </DialogPanel>
          </Dialog>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="#">
              <HiIcon2.HiMagnifyingGlass className="size-5 text-navi" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Menu;
